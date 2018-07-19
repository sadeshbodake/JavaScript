js = {
  settings:{
    capture:$("#capture"),
    switchboard:$(".switchboard"),
    switchbtn:$(".btn"),
    text:$('#text'),
    msg:$('#msg'),
    block:$('.block'),
    counter:0,
    timer:5000,
    colorBlock:['red','black'],
    switchboard_color:['green','red'],
    switchbtn_color:['yellow','gray']
  },

  init: function() {
    s=this.settings
    this.bindUIActions();
  },

  bindUIActions: function() {
    $(document).ready(function(){
    s.switchbtn.on("click", function() {
        if(s.capture.prop("checked")==true){
          if(s.counter%2==0){
            s.switchbtn.css('background-color',s.switchbtn_color[0])
            s.text.text("ON");
            js.addmsg()
            js.colorBlock()
          }
          else{
            s.switchbtn.css('background-color',s.switchbtn_color[1])
            s.text.text("OFF");
            js.addmsg()
            js.reveseColor()
          }
        }
        else{
          if(s.counter%2==0){
            s.switchboard.css('background-color',s.switchboard_color[0])
            text.innerHTML="ON";
            js.addmsg()
            js.colorBlock()
          }
          else{
            s.switchboard.css('background-color',s.switchboard_color[1])
            text.innerHTML="OFF";
            js.addmsg()
            js.reveseColor()
          }
        }
        s.counter++;
      });
    });
  },

  addmsg:function(){
    s.msg.text("Hello Sandesh..")
    setTimeout(function(){
      s.msg.text("");
    },s.timer)
  },
  colorBlock:function(){
    var i=0;
    s.block.each(function(){
      $(this).css('background-color',s.colorBlock[i]);
      i=(i+1)%s.colorBlock.length
    });
  },

  reveseColor:function(){
    var i=1;
     s.block.each(function(){
      $(this).css('background-color',s.colorBlock[i]);
      i=(i+1)%(s.colorBlock.length)
    });
  }
};
js.init()





