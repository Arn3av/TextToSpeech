const user_input = document.getElementById('text-field');
const audioSource = document.getElementById('audio-source');
const audioPlayer = document.getElementById('audio-player');
const progressBar = document.getElementById('progress-bar');

document.getElementById('generate-button').addEventListener('click', () => {
    sendString();
});

window.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        sendString();
    }
});

function sendString(){
    const input_string = user_input.value;

    console.log(input_string);
    
    const POST_URL = "https://texttospeech-4e6u.onrender.com/audio";
    
    fetch(POST_URL, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({input_string})
    })
        .then(response => response.blob())
        .then(data => {
            document.getElementById("result-message").innerHTML = `Audio is Generated Successfully`;
            const audioURL = URL.createObjectURL(data);
            audioSource.src = audioURL;
            audioPlayer.style.display = 'block';
            audioPlayer.load();
            updateProgressBar(50);
            audioPlayer.play();
        })
        .catch((error) => console.log(error));

}

function updateProgressBar(percentage) {
    progressBar.style.setProperty("--progress", `${percentage}%`);
}