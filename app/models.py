from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.orderinglist import ordering_list

db = SQLAlchemy()


class User(db.Model, UserMixin):
    '''
    Defines the User model and methods.
    '''
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    first_name = db.Column(db.String(40))
    last_name = db.Column(db.String(40))
    email = db.Column(db.String(255), unique=True)
    shore_order = db.Column(db.ARRAY(db.String(5)))
    hashed_password = db.Column(db.String(128), nullable=False)
    favorites = db.relationship('SurfSpot', secondary=lambda: favorites_table)

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email or '',
            'my_spots': [spot.to_dict() for spot in self.favorites],
            'shore_order': [n for n in self.shore_order]
        }

    @classmethod
    def authenticate(cls, username, password):
        user = cls.query.filter(User.username == username).scalar()
        if user:
            return check_password_hash(user.hashed_password, password), user
        else:
            return None, None


class SurfSpot(db.Model):
    '''
    Define surf spot locations with name and
    respective geo coordinates.
    '''
    __tablename__ = 'surfspots'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(25), unique=True, nullable=False)
    shore = db.Column(db.String(5))
    created_at = db.Column(
        db.DateTime, default=datetime.now)
    updated_at = db.Column(
        db.DateTime, onupdate=datetime.now)
    lat = db.Column(db.Float)
    long = db.Column(db.Float)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'shore': self.shore,
            'lat': self.lat,
            'long': self.long
        }


favorites_table = db.Table('favorites', db.Model.metadata,
                           db.Column('user_id', db.Integer, db.ForeignKey('users.id'),
                                     primary_key=True),
                           db.Column('surfspot_id', db.Integer, db.ForeignKey('surfspots.id'),
                                     primary_key=True)
                           )
