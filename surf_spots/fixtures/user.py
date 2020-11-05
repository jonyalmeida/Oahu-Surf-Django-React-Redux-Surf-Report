from django.contrib.auth.hashers import make_password

[
    {
        "model": "django.contrib.auth.models.user",
        "pk": 3,
        "fields": {
            "first_name": "Mick",
            "last_name": "Fanning"
            "email": "mick@fanning.com"
            "password": make_password('password', salt=None, hasher='default')¶
        }
    },
    {
        "model": "django.contrib.auth.models.user",
        "pk": 4,
        "fields": {
            "first_name": "Kelly",
            "last_name": "Slater"
            "email": "kelly@slater.com"
            "password": make_password('password', salt=None, hasher='default')¶
        }
    },
    {
        "model": "django.contrib.auth.models.user",
        "pk": 5,
        "fields": {
            "first_name": "Felipe",
            "last_name": "Toledo"
            "email": "felipe@toledo.com"
            "password": make_password('password', salt=None, hasher='default')¶
        }
    },
]
