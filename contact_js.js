(function blink() { 
  $('.blink_me').fadeOut(500).fadeIn(500, blink); 
})();



var captcha;
 
function generateCaptcha() {
    var a = Math.floor((Math.random() * 10));
    var b = Math.floor((Math.random() * 10));
    var c = Math.floor((Math.random() * 10));
    var d = Math.floor((Math.random() * 10));
 
    captcha=a.toString()+b.toString()+c.toString()+d.toString();
    
    document.getElementById("captcha").value = captcha;
}
 
function check(){
    var input=document.getElementById("inputText").value;
 
    if(input==captcha){
        alert("Your feedback has been send to us!");
    }
    else{
        alert("Wrong captcha");
    }
}	