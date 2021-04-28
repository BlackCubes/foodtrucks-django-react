from django.contrib.auth import get_user_model
from django.test import TestCase

# Create your tests here.


class UsersManagersTests(TestCase):
    def test_create_user(self):
        User = get_user_model()
        user = User.objects.create_user(
            email='someuser@user.com', password='mernStack')

        self.assertEqual(user.email, 'someuser@user.com')
        self.assertTrue(user.is_active)
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)

        try:
            self.assertIsNone(user.username)
        except AttributeError:
            pass
        with self.assertRaises(TypeError):
            User.objects.create_user()
        with self.assertRaises(TypeError):
            User.objects.create_user(email='')
        with self.assertRaises(ValueError):
            User.objects.create_user(email='', password='mernStack')

    def test_create_superuser(self):
        User = get_user_model()
        admin_user = User.objects.create_superuser(
            'adminuser@user.com', 'djangoStack')

        self.assertEqual(admin_user.email, 'adminuser@user.com')
        self.assertTrue(admin_user.is_active)
        self.assertTrue(admin_user.is_staff)
        self.assertTrue(admin_user.is_superuser)

        try:
            self.assertIsNone(admin_user.username)
        except AttributeError:
            pass
        with self.assertRaises(ValueError):
            User.objects.create_superuser(
                email='adminuser@user.com', password='djangoStack', is_superuser=False)
