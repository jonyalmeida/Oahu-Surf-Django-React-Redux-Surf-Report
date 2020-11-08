from flask import Blueprint, jsonify, request
from app.models import db, User

user_routes = Blueprint('users', __name__)


@user_routes.route('/<user_param>')
def get_single_user(user_param):
    user_id = int(user_param)
    response = User.query.filter(user_id == User.id).one()
    return response.profile_info()
