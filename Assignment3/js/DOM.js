js = {
  settings:{
    capture:document.getElementById("capture"),
    switchboard:document.getElementsByClassName("switchboard"),
    switchbtn:document.getElementsByClassName("btn"),
    text:document.getElementById('text'),
    msg:document.getElementById('msg'),
    block:document.getElementsByClassName('block'),
    counter:0,
    timer:5000,
  },

  init: function() {
    s=this.settings
    this.bindUIActions();
  },

  bindUIActions: function() {
    s.switchbtn[0].addEventListener("click", function() {

      if(s.capture.checked==true){
        if(s.counter%2==0){
          s.switchbtn[0].style.backgroundColor="yellow"

          s.text.innerHTML="ON";
          js.addmsg()
          js.colorBlock()
        }
        else{
          s.switchbtn[0].style.backgroundColor="gray"
          s.text.innerHTML="OFF";
          js.addmsg()
          js.reveseColor()
        }
      }
      else{

        if(s.counter%2==0){
          s.switchboard[0].style.backgroundColor="green"
          text.innerHTML="ON";
          js.addmsg()
          js.colorBlock()
        }
        else{
          s.switchboard[0].style.backgroundColor="red"
          text.innerHTML="OFF";
          js.addmsg()
          js.reveseColor()
        }
      }
      s.counter++;
    });
  },

  addmsg:function(){
    s.msg.innerHTML="Hello Sandesh.."
    setTimeout(function(){
      s.msg.innerHTML="";
    },s.timer)
  },

  colorBlock:function(){
    for(var i=0;i<4;i++){
      if(i%2==0){
        s.block[i].style.backgroundColor="red";
      }
      else{
        s.block[i].style.backgroundColor="black";
      }
    }
  },

  reveseColor:function(){
    for(var i=0;i<4;i++){
      if(i%2!=0){
        s.block[i].style.backgroundColor="red";
      }
      else{
        s.block[i].style.backgroundColor="black";
      }
    }
  }
};
js.init()