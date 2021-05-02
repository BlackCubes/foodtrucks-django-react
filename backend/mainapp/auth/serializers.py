from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


# CUSTOM TOKEN CLAIMS
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    """
    Customizing the claims contained in web tokens.
    """
    @classmethod
    def get_token(cls, user):
        """
        Custom Claims: name and email.

        Returns: token
        """
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)

        token['name'] = user.name
        token['email'] = user.email

        return token
