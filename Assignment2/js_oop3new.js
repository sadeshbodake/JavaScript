products=[]
total_price=0

function Product(name,description,price){
  this.name=name
  this.description=description
  this.price=price
}

Product.prototype.addProduct=function(){
  products.push({name:this.name,description:this.description,price:this.price})
};


function shoppingCart(){
  //shopping cart detail goes here
}

shoppingCart.prototype.calculatePrice=function(){
  for(var i=0;i<products.length;i++){
    total_price+=products[i].price
  }
  console.log("Total Price is :"+total_price+"$.")
};
shoppingCart.prototype.calculateDiscount=function(){
  for(var i=0;i<products.length;i++){
    console.log("Product Name : "+s.products[i].name+",Product Price : "+s.products[i].price*0.90)
  }
};

var product1=new Product('product1','Lorem ipsum',123)
var product2=new Product('product2','Lorem ipsum',23)
product1.addProduct()
product2.addProduct()

var cart1=new shoppingCart()
cart1.calculatePrice()
cart1.calculateDiscount()