
//sample fof call() method

var obj={message:"welcome to my blog"}

var greeting=function(lang){
  return  this.message+" "+lang
}

console.log(greeting.call(obj,"New Blog is Coming.."))

//sample of Apply

var obj={message:"welcome to my blog"}

var greeting=function(lang){
  return  this.message+" "+lang
}
args=["New Blog is Coming.."]
console.log(greeting.apply(obj,args))


//sample of bind()
var obj={message:"welcome to my blog"}

var greeting=function(lang){
  return  this.message+" "+lang
}

var bound=greeting.bind(obj)
console.dir(bound)
console.log(bound("New Blog is Coming.."))