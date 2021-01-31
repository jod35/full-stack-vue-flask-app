from flask import Blueprint,jsonify,make_response
from flask_restx import Api,Resource,fields

resources=Blueprint('api',__name__)

api=Api(resources,title="Task API")




@api.route('/')
class Hello(Resource):
    def get(self):
        return make_response(jsonify(
            {"message":"Hello World"}
        ))