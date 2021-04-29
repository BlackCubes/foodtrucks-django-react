from django.utils.text import slugify
import string


def random_string_generator(size=10, chars=string.ascii_lowercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))


def unique_slug_generator(instance, new_slug=None):
    """
    Assumes your instance has a model with a slug field and a title character (char) field.

    Returns: unique_slug_generator if the slug query exists, or the newly created slug that has been slugify.
    """
    if new_slug is not None:
        slug = new_slug
    else:
        slug = slugify(instance.title)

    Klass = instance.__class__
    qs_exists = Klass.objects.filter(slug=slug).exists()

    if qs_exists:
        new_slug = "{slug}-{randstr}".format(slug=slug,
                                             randstr=random_string_generator(size=4))
        return unique_slug_generator(instance, new_slug=new_slug)

    return slug
