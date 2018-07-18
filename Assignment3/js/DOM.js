var toggle=(function(){
  var counter=0;

  return function(){

    if(document.getElementById("capture").checked==true){
      if(counter%2==0){
        document.getElementsByClassName("btn")[0].style.backgroundColor="yellow"
        document.getElementById('text').innerHTML="ON";
        addmsg()
        colorBlock()
      }

      else{
        document.getElementsByClassName("btn")[0].style.backgroundColor="gray"
        document.getElementById('text').innerHTML="OFF";
        addmsg()
        reveseColor()
      }
    }
    else{
      if(counter%2==0){
        document.getElementsByClassName("switchboard")[0].style.backgroundColor="green"
        document.getElementById('text').innerHTML="ON";
        addmsg()
        colorBlock()
      }
      else{
        document.getElementsByClassName("switchboard")[0].style.backgroundColor="red"
        document.getElementById('text').innerHTML="OFF";
        addmsg()
        reveseColor()
      }
    }
    counter++;
  }

  function addmsg(){
    document.getElementById('msg').innerHTML="Hello Sandesh.."
    setTimeout(function(){
      document.getElementById('msg').innerHTML="";
    },5000)
  }

  function colorBlock(){
    for(var i=0;i<4;i++){
      if(i%2==0){
        document.getElementsByClassName('block')[i].style.backgroundColor="red";
      }
      else{
        document.getElementsByClassName('block')[i].style.backgroundColor="black";
      }
    }
  }

  function reveseColor(){
    for(var i=0;i<4;i++){
      if(i%2!=0){
        document.getElementsByClassName('block')[i].style.backgroundColor="red";
      }
      else{
        document.getElementsByClassName('block')[i].style.backgroundColor="black";
      }
    }
  }

})();

