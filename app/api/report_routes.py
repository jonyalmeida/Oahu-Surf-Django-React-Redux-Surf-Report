from flask import Blueprint, jsonify, request
import json
from ..models import db, User

report_routes = Blueprint('reports', __name__)


@report_routes.route('/surfspotslist', methods=['POST'])
def list():
    surf_spots_list = request.json.get('result', None)
    print(surf_spots_list)
    with open('data.txt', 'w') as outfile:
        outfile.write(str(surf_spots_list))
    return {'response': 'ok'}
