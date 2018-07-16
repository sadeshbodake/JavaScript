var s;

javascriptAssig={

  settings:{
    arr:[2,3,4,3,4],
    arr2:[5,1,5,6,5]
  },

  init: function() {
    s = this.settings;
  },

  gradeCalculate:function(myGrade){
    var total=myGrade.reduce(function(accumulator,item){
      return accumulator+item;
    },0);

    return'Your Average Grade is '+total/myGrade.length+'.'
  },

  calculator:function(operator,num1,num2){
    switch(operator){
      case '+':result=num1+num2;return "Addition is :"+result;break;
      case '-':result=num1-num2;return "Subtraction is:"+result;break;
      case '*':result=num1*num2;return "Multiplication is :"+result;break;
      case '/':if(num2==0)
                 return "Number Can't Divide By Zero"
               else{
                  result=num1/num2;
                  return "Division is :"+result;
                }
               break;
    }
  },

  mulTable:function(num){
    var i = 1;
    var result = '';
    for (i =1;i<=10;i++) {
      console.log(num+""+"*"+i+"="+num*i)
    }
  },

  countDigit:function(num){
    num=parseInt(num)
    numDigits=0;

    while(num>0){
      num=(num-num%10)/10
      numDigits++;
    }
    return "Number of Digits Are :"+numDigits
  },

  averageArray:function(){
    var sum=0;

    for(var i=0;i<(s.arr).length;i++){
      sum+=parseInt(s.arr[i])
    }
    var avg=sum/s.arr.length
    return "Average is :"+avg
  },

  largestNumber:function(){
    var max=s.arr[0];
    for(var i=0;i<s.arr.length;i++){
      if(max<s.arr[i]){
        max=s.arr[i]
      }
    }
    return "Maximum Number in Array: "+max;
  },

  addArray:function(){
    var sum = s.arr.map((a, i) => a + s.arr2[i]);
    console.log("Sum of Array :"+sum);
  },

  reverseArray:function(){
    return "Array Reverse is :"+(s.arr).reverse()
  }
};

console.log(javascriptAssig.init())
console.log(javascriptAssig.gradeCalculate([96,52,41,18]));
console.log(javascriptAssig.calculator('+',54,52));
console.log(javascriptAssig.mulTable(12));
console.log(javascriptAssig.countDigit(963258));
console.log(javascriptAssig.averageArray());
console.log(javascriptAssig.largestNumber());
console.log(javascriptAssig.addArray());
console.log(javascriptAssig.reverseArray());