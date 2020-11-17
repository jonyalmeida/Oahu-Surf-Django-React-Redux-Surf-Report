from flask import Blueprint, jsonify, request
import json
from app.models import db, User, SurfSpot, favorites_table

user_routes = Blueprint('users', __name__)


@user_routes.route('/<user_param>')
def get_single_user(user_param):
    user_id = int(user_param)
    response = User.query.filter(user_id == User.id).one()
    return response.profile_info()


@user_routes.route('/add_spot', methods=["POST"])
def add_spot():
    add_surf_spot = request.json.get('addSurfSpot', None)
    user = request.json.get('user', None)
    print(add_surf_spot)
    curr_key = None
    curr_id = None
    for key, value in add_surf_spot.items():
        print(key, value)
        curr_key = key
        curr_id = value
    surfspot = SurfSpot.query.filter_by(id=curr_id)
    if surfspot:
        print("SURFSPOT")
        entry1 = favorites_table.insert().values(
            surfspot_id=curr_id,
            user_id=user['id']
        )
        db.session.execute(entry1)
        db.session.commit()

    print(curr_id, user['id'])
    return {'response': 'ok'}
