var myGradeCalculate=(function(){

  var myGrade=[93,95,85,10,45,63]

  return{
    average:function(){
      var total=myGrade.reduce(function(accumulator,item){
          return accumulator+item;
      },0);

      return'Your Percentage Grade is '+total/myGrade.length+'.'
    }
  }
})();

myGradeCalculate.average();