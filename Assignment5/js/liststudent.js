/*$( "body" ).data( "foo", 52 );
$( "body" ).data( "bar", { myType: "test", count: 40 } );
$( "body" ).data( { baz: [ 1, 2, 3 ] } );
var s=$( "body" ).data( "foo" );
alert(s) // 52
var p=$( "body" ).data("bar");
alert(p)
name=$("#name");

  value=$("#myDiv").data("blah","hello");
  alert(name);

*/

var students=[];

$("#myform").submit(function(e){


    e.preventDefault();
    name=$("#name").val();
    email=$("#email").val();
    phone=$("#phone").val();
    date=$("#date").val();
    subjec1=$("#maths").val();
    subjec2=$("#phy").val();
    subjec3=$("#comp").val();

    students.push({name,email,phone,date});

    for(var i=0;i<students.length;i++){
      $('.tname').text(students[i].name);
      $('.temail').text(students[i].email);
      $('.tphone').text(students[i].phone);
      $('.tdate').text(students[i].date);
    }
});












