import functions.audio_object_returner as audio
from flask import Flask, request, send_file
from flask_restful import Api, Resource
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
api = Api(app)

class audioGenerator(Resource):
    def post(self):
        input_string = request.json.get('input_string')
        speech_data = audio.return_speech_object(input_string)
        return send_file(speech_data, mimetype="audio/mpeg", as_attachment=True, download_name='speech.mp3')
    
        

api.add_resource(audioGenerator, '/audio')

if __name__ == "__main__":
    app.run(debug=True)