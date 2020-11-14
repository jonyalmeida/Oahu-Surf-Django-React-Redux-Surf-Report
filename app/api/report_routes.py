from flask import Blueprint, jsonify, request
import json
from ..models import db, User
from .report_funcs.fetch_forecast import (get_response, parse_data,
                                          get_forecast, get_swell, get_wave,
                                          get_wind_direction, get_wind_speed)

report_routes = Blueprint('reports', __name__)


# @report_routes.route('/forecast', methods=["POST"])
# def fetch_forecast():
#     print(request)
#     lati = request.json.get('lat')
#     longi = request.json.get('long')
#     namei = request.json.get('name')
#     print(lati, longi, namei)
#     spot = GetForecast(lati, longi, name=namei)
#     return {'response': 'ok'}

@report_routes.route('/health_check')
def health_check():
    """
    API health check
    ---
    tags:
      - status
    responses:
     200:
       description: Status check
    """
    return {'status': 'ok'}, 200


@report_routes.route('/get_forecast', methods=['POST'])
def chart():
    """
    Point forecast
        ---
        tags:
          - point
        parameters:
          - name: lat
            in: path
            type: string
            required: true
            default: 37.583
          - name: lon
            in: path
            type: string
            required: true
            default: -122.952
        responses:
         200:
           description: Point forecast
    """
    print(request)
    lat = request.json.get('lat')
    long = request.json.get('long')
    print(lat, long)
    try:
        response = get_response(lat, long)
        if response.status_code == 200:
            data = parse_data(response)
            waves = get_wave(data, meta=False)
            times = get_times(data, pretty=True)[:len(waves)]
            swell = get_swell(data, meta=False)
            swell['wave_height'] = waves
            swell['wind_direction'] = get_wind_direction(data, meta=False)[:len(waves)]
            swell['wind_speed'] = get_wind_speed(data, meta=False)[:len(waves)]
            swell['swell_direction'] = swell['swell_direction'][:len(waves)]
            dir_range =[int(x) for x in swell['wind_direction'] + swell['swell_direction']]
            direction_min, direction_max = min(dir_range) - 20, max(dir_range) + 1
            direction_min = max([int(math.ceil(direction_min / 20.0)) * 20, 0])
            direction_max = min([int(math.ceil(direction_max / 20.0)) * 20, 360])
            wave_max = max([int(x) for x in swell['wave_height']]) + 1
            wind_max = max([int(x) for x in swell['wind_speed']]) + 1
            wave_height_max = int(math.ceil(wave_max / 2.0)) * 2
            scale = {'wave_height_max': wave_height_max,
                     'wind_speed_max': int(math.ceil(wind_max / 5.0)) * 5,
                     'direction_min': direction_min,
                     'direction_max': direction_max,
                     'direction_step': (direction_max - direction_min) / 4,
                     'left_pad': 8 if wave_height_max >= 10 else 16}
            meta = get_metadata(data)
            meta['update'] = meta['update'][:-9].replace('T', ' ')
            meta['source'] = 'weather.gov/' + meta['source'].split('/')[-1]
    except Exception as e:
        print('error:', e)
        if 'not enough values to unpack' in str(e):
            error = 'Please use a comma beteen numbers.'
        elif 'mismatched tag' in str(e) or 'water-state' in str(e):
            error = 'No near-shore ocean forecast available for that coordinate.'
        else:
            error = 'No near-shore ocean forecast available.'
            # raise e
    if error:
        error += ' The expected decimal coordinate is: latitude, longitude'
    return ({times, swell, error, meta, scale, lat})


@report_routes.route('/swell_info', methods=['POST'])
def swell_info(lat, lon):
    """
    Swell direction, height, period
    ---
    tags:
      - point
    parameters:
      - name: lat
        in: path
        type: string
        required: true
        default: 37.583
      - name: lon
        in: path
        type: string
        required: true
        default: -122.952
    responses:
     200:
       description: Swell direction, height, period
    """
    response = get_response(lat, lon)
    if response.status_code == 200:
        data = parse_data(response)
        result = get_swell(data)
    else:
        result = {}
    return result, response.status_code


'''
class PointSwellDirection(Resource):
    def get(self, lat, lon):
        """
        Swell direction
        ---
        tags:
          - point
        parameters:
          - name: lat
            in: path
            type: string
            required: true
            default: 37.583
          - name: lon
            in: path
            type: string
            required: true
            default: -122.952
        responses:
         200:
           description: Swell direction
        """
        return get_swell_direction(lat, lon), response.status_code
class PointSwellHeight(Resource):
    def get(self, lat, lon):
        """
        Swell height
        ---
        tags:
          - point
        parameters:
          - name: lat
            in: path
            type: string
            required: true
            default: 37.583
          - name: lon
            in: path
            type: string
            required: true
            default: -122.952
        responses:
         200:
           description: Swell height
        """
        return get_swell_height(lat, lon), response.status_code
class PointSwellPeriod(Resource):
    def get(self, lat, lon):
        """
        Swell period
        ---
        tags:
          - point
        parameters:
          - name: lat
            in: path
            type: string
            required: true
            default: 37.583
          - name: lon
            in: path
            type: string
            required: true
            default: -122.952
        responses:
         200:
           description: Swell period
        """
        return get_swell_period(lat, lon), response.status_code
'''


@report_routes.route('/wave_info', methods=['POST'])
def wave_info():
    def get(self, lat, lon):
        """
        Wave height
        ---
        tags:
          - point
        parameters:
          - name: lat
            in: path
            type: string
            required: true
            default: 37.583
          - name: lon
            in: path
            type: string
            required: true
            default: -122.952
        responses:
         200:
           description: Wave height
        """
        response = get_response(lat, lon)
        if response.status_code == 200:
            data = parse_data(response)
            result = get_wave(data)
        else:
            result = {}
        return result, response.status_code


'''
class PointWind(Resource):
    def get(self, lat, lon):
        """
        Wind direction, speed
        ---
        tags:
          - point
        parameters:
          - name: lat
            in: path
            type: string
            required: true
            default: 37.583
          - name: lon
            in: path
            type: string
            required: true
            default: -122.952
        responses:
         200:
           description: Wind direction, speed
        """
        return get_wind(lat, lon), response.status_code
'''


@report_routes.route('/wind_info', methods=['POST'])
def wind_info(lat, lon):
    def get(self, lat, lon):
        """
        Wind direction
        ---
        tags:
          - point
        parameters:
          - name: lat
            in: path
            type: string
            required: true
            default: 37.583
          - name: lon
            in: path
            type: string
            required: true
            default: -122.952
        responses:
         200:
           description: Wind direction
        """
        response = get_response(lat, lon)
        if response.status_code == 200:
            data = parse_data(response)
            result = get_wind_direction(data)
        else:
            result = {}
        return result, response.status_code


@report_routes.route('/wind_speed', methods=['POST'])
def wind_speed_info(lat, lon):
    """
    Wind speed
    ---
    tags:
      - point
    parameters:
      - name: lat
        in: path
        type: string
        required: true
        default: 37.583
      - name: lon
        in: path
        type: string
        required: true
        default: -122.952
    responses:
     200:
       description: Wind speed
    """
    response = get_response(lat, lon)
    if response.status_code == 200:
        data = parse_data(response)
        result = get_wind_speed(data)
    else:
        result = {}
    return result, response.status_code
