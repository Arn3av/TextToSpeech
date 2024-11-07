import functions.converter as tts

from flask import Flask, request, jsonify
from flask_restful import Api, Resource
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
api = Api(app)

class englishSpeech(Resource):
    def post(self):
        input_string = request.json.get('input_string')
        return (jsonify({"outputState": tts.EnglishSpeech(input_string)}))
    
api.add_resource(englishSpeech, '/Generated')

if __name__ == '__main__':
    app.run(debug=True)