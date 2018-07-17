var s;

shoppingCart={

  settings:{

    products:[
    {
      name:"product1",
      description:"description goes Here..",
      price:85
    },

    {
      name:"product2",
      description:"description goes Here..",
      price:25
    },

    {
      name:"product3",
      description:"description goes Here..",
      price:65
    },

    ]
  },

  init: function() {
    s = this.settings;
  },

  calculatePrice:function(){
    var total_price=0;
    for(var i=0;i<s.products.length;i++){
      total_price+=s.products[i].price
    }
    return 'Total Price of Your Shopping Cart is : '+total_price+'$.'
  },

  updateDetail:function(){
    for(var i=0;i<s.products.length;i++){
      console.log("Product Name : "+s.products[i].name+",Product Price : "+s.products[i].price*0.90)
    }
  }

};
console.log(shoppingCart.init())
console.log(shoppingCart.calculatePrice())
console.log(shoppingCart.updateDetail())