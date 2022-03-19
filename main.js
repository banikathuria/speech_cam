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
    if (content == "take my selfie"){
        speak()
    }    
}
function speak(){
var synth= window.speechSynthesis;
speakData= "taking your selfie in 5 seconds"
var utterthis = new SpeechSynthesisUtterance(speakData)
synth.speak(utterthis)
Webcam.attach("#camera")
setTimeout(function(){
    takesnapshot()
},5000)

}
Webcam.set({
    width: 360,
    height: 300,
    image_format: "png",
    png_quality : 90

})
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img src= '"+data_uri+"'id= 'takenselfie'>"
    })
}
function save(){
    link= document.getElementById("link")
    image= document.getElementById("takenselfie").src
    link.href= image
    link.click()
}