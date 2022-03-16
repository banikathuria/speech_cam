var SpeechRecognition = window.webkitSpeechRecognition;
var recognition= new SpeechRecognition()
function start(){
 document.getElementById("voice_textbox").value = ""
 recognition.start()
}
recognition.onresult= function(event)
{console.log(event)
    var content = event.results[0][0].transcript
    document.getElementById("voice_textbox").value=content
    console.log(content)
    speak()
}
function speak(){
var synth= window.speechSynthesis;
speakData= document.getElementById("voice_textbox").value
var utterthis = new SpeechSynthesisUtterance(speakData)
synth.speak(utterthis)
Webcam.attach("#camera")
}
Webcam.set({
    width: 360,
    height: 300,
    image_format: "png",
    png_quality : 90

})