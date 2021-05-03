import os
import random
import string
from django.utils import timezone
from django.utils.text import slugify


def upload_to(instance, filename, pathstart):
    """
    Changed the output of the photo name.
    """
    now = timezone.now()
    base, extension = os.path.splitext(filename.lower())
    milliseconds = now.milliseconds // 1000
    return f"{pathstart}/{instance.uuid}/{now%Y%m%d%H%M%S}{milliseconds}{extension}"


def random_string_generator(size=10, chars=string.ascii_lowercase + string.digits):
    """
    Generates a random string.
    """
    return ''.join(random.choice(chars) for _ in range(size))


def unique_slug_generator(instance, new_slug=None):
    """
    Assumes your instance has a model with a slug field and a name character (char) field.

    Returns: unique_slug_generator if the slug query exists, or the newly created slug that
    has been slugify.
    """
    if new_slug is not None:
        slug = new_slug
    else:
        slug = slugify(instance.name)

    klass = instance.__class__
    qs_exists = klass.objects.filter(slug=slug).exists()

    if qs_exists:
        new_slug = "{slug}-{randstr}".format(slug=slug,
                                             randstr=random_string_generator(size=4))
        return unique_slug_generator(instance, new_slug=new_slug)

    return slug


def slug_generator(sender, instance, *args, **kwargs):
    """
    Converts the string into a slug if it is not present.
    """
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)
