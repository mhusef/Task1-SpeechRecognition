const texts = document.querySelector('.texts');

const ch = document.getElementById("chs");
console.log(ch.value);




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
})



ch.addEventListener('change', function(){
    if (this.checked) {
        console.log("ff")
        recog.start();  
        recog.addEventListener('end', () => {
            recog.start();
        }) 
    
    } else {
        recog.stop();
        recog.removeEventListener('end', () => {
            recog.stop();
        }) 
    }
})

