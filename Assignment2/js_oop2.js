
//Parent Class is Animal
function Animal(name,gender,breed){
  this.name=name
  this.gender=gender
  this.breed=breed
}

//child class man Innherited
function Man(name,gender,breed,address){
  Animal.call(this,name,gender,breed)
  this.address=address
}
Man.prototype.display=function(){
  alert("I am Man..")
};


//child class Dog Innherited
function Dog(name,gender,breed){
  Animal.call(this,name,gender,breed)
}
Dog.prototype.display=function(){
  alert("I am Dog..")
};



var man1=new Man('abc','male','qwe','pune')
console.log(man1.display())
console.log(man1)

