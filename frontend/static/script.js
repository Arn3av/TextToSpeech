const user_input = document.getElementById('text-field');
const audioSource = document.getElementById('audio-source');
const audioPlayer = document.getElementById('audio-player');
document.getElementById('generate-button').addEventListener('click', () => {
    sendString();
});

document.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        sendString();
    }
});

function sendString(){
    const input_string = user_input.value;

    console.log(input_string);
    
    const POST_URL = "http://127.0.0.1:5000/Generated";
    
    fetch(POST_URL, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({input_string})
    })
    .then((response) => response.json())
    .then((data) => {
        audioPlayer.style.display = 'block';
        audioSource.src = "./output.mp3";
        audioPlayer.load();
        document.getElementById('result-message').innerHTML = data['outputState'];
    })
    .catch((error) => console.log(error));
}
