from gtts import gTTS

def EnglishSpeech(input_string):
    if(type(input_string) != str): return
    else:
        speech = gTTS(text=input_string, lang='en', slow=False)
        speech.save("frontend/output.mp3")
        outputMessage = "Audio is Generated"
        return outputMessage