var students=[];

$("#submit").on("click",function(e){

  e.preventDefault();
  name=$("#name").val();
  email=$("#email").val();
  phone=$("#phone").val();
  date=$("#date").val();
  subject1=$("#maths").val();
  subject2=$("#phy").val();
  subject3=$("#comp").val();

  var row=" ";
  var marks;
  marks=(parseInt(subject1)+parseInt(subject2)+parseInt(subject3))/3;

  row+="<tr><td>"+name+"</td><td>"+email+"</td><td>"+phone+"</td><td>"+calculateAge(date)+"</td><td>"+Math.round(marks)+"</td>"+gradeCalculate(subject1,subject2,subject3)+"<td><button class='btn btn-info'>EDIT INFO</button><button id='rm' class='btn btn-danger'>Remove</buttton></td></tr>";

  $(row).appendTo("#list");

  students.push({name,email,phone,date});


   function gradeCalculate(subject1,subject2,subject3){

      var marks;

      marks=(parseInt(subject1)+parseInt(subject2)+parseInt(subject3))/3;

      if(subject1<40 || subject2<40 || subject3<40){
        return "<td class='danger'>FAIL</td>";
      }
      else if(marks>=70){
        return "<td class='success'>FIRST CLASS WITH DISTINCTION</td>";
      }
      else if(marks>=60 && marks<70){
        return "<td class='success'>FIRST CLASS</td>";
      }
      else if(marks>=50 && marks<60){
        return "<td class='success'>SECOND CLASS</td>";
      }
      else if(marks>=40 && marks<50){
        return "<td class='success'>THIRD CLASS</td>";
      }
      else
        return "<td class='danger'>FAIL</td>";
   }


  function calculateAge(birth){
    ageMS = Date.parse(Date()) - Date.parse(birth);
    age = new Date();
    age.setTime(ageMS);
    ageYear = age.getFullYear() - 1970;
    return ageYear;
  }
});












