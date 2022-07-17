var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();
  var Textbox = document.getElementById("textbox"); 
  function start()
   { Textbox.innerHTML = "";
   recognition.start();
 } recognition.onresult = function(event) { console.log(event);
     var Content = event.results[0][0].transcript; 
     Textbox.innerHTML = Content; 
     console.log(Content);
      if(Content =="take my selfie") { console.log("taking selfie --- ");
       speak(); } }

       function speak(){
        var synth = window.speechSynthesis;
        
        speak_data = document.getElementById("textbox").value;

        var utterThis = new SpeechSynthesisUtterance(speak_data);
      
        synth.speak(utterThis);
        
        Webcam.attach(camera);
       }
       
       Webcam.set({
        width:360,
        height:250,
        image_format : 'png',
        png_quality:90
       });
       camera = document.getElementById("camera");

       