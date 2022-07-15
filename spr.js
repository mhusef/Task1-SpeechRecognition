const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recog = new window.SpeechRecognition();
recog.lang = "ar-AR"
recog.interimResults = true;

let p = document.createElement('p');

recog.addEventListener('result', (e) => {

const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    p.innerHTML = text;
    texts.appendChild(p);

    console.log(text);
    });
    

document.getElementById("start").addEventListener("click", (e) => {
        recog.start();  
});

recog.addEventListener('end', () => {
    recog.start();
    });