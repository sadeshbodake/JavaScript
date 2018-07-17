var s;

javascriptAssig={

  settings:{
    students : [
      {
        name: 'Anubhav',
        age: 22,
        marks: [80, 73, 60]
      },
      {
        name: 'Rohit',
        age: 18,
        marks: [78, 71, 69]
      },
      {
        name: 'Sameer',
        age: 24,
        marks: [88, 58, 77]
      }
    ]
  },

  init: function() {
    s = this.settings;
  },

  acceptDetails:function(name,age,marks){
    javascriptAssig.settings.students.push({name:name,age:age,marks:marks})
  },

  printDetails:function(){
    for(var i=0;i<s.students.length;i++)
      console.log(s.students[i]);
  },

  gradeCalculate:function(myGrade){
    var total=myGrade.reduce(function(accumulator,item){
      return accumulator+item;
    },0);

    return Math.round(total/myGrade.length)
  },

  printPercentage:function(){
    for(var i=0;i<s.students.length;i++)
      console.log("Name : "+s.students[i].name+", Percentage : "+javascriptAssig.gradeCalculate(s.students[i].marks))
  }
};

console.log(javascriptAssig.init())
console.log(javascriptAssig.acceptDetails('sandy',21,[45,85,65]))
console.log(javascriptAssig.printDetails())
console.log(javascriptAssig.printPercentage())