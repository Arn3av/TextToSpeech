from gtts import gTTS
import io
def return_speech_object(text):
    speech = gTTS(text=text, lang="en", slow=False)
    audio_data = io.BytesIO()
    speech.write_to_fp(audio_data)
    audio_data.seek(0)
    return audio_data