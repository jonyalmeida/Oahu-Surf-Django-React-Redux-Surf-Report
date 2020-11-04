from rest_framework import serializers
from rest_auth.serializers import LoginSerializer
from django.views.decorators.csrf import ensure_csrf_cookie


class NewLoginSerializer(LoginSerializer):

    @ensure_csrf_cookie
    def _validate_username(self, username, password):
        user = None

        if username and password:
            user = self.authenticate(username=username, password=password)
        else:
            msg = _('Must include "username" and "password".')
            raise exceptions.ValidationError(msg)

        return user
