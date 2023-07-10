// GET elements
let val;
let click = document.getElementById("click");
let input = document.getElementById("text");
// let text = "HI MY NAME IS ESSAM , I'M A FRONT-END DEVOlOPER , I LOVE YOU";
function getValue(){
if(click.onclick){
    val = input.value;
}
}
let speech = new SpeechSynthesisUtterance();
function textToSpeech(){
    speech.text = val;
    speech.rate = 0.5;
    speech.volume = 2;
    speech.pitch = 1;
    speech.lang="en-US";
    speechSynthesis.speak(speech);
}
click.onclick = function(){
    getValue();
    textToSpeech();
}


