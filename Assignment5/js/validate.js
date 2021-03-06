jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});
jQuery.validator.addMethod("accept", function(value, element, param) {
  return value.match(new RegExp("." + param + "$"));
});

$("#myform").validate({
  rules: {

    name:{
      required:true,
      accept:"[a-zA-Z]+"
    },

    email: {
      required: true,
      email: true
    },

    phone:{
      required:true,
      minlength:10,
      accept:"[0-9]+"
    },

    date:{
      required:true
    },

    marks:{
      required:true,
      maxlength:1,
      maxlength:2,
      accept:"[0-9]+"
    }

  },

  messages:{
    phone:"Phone Number is not valid ",
    name:"Name should't contain any number or blank",
    marks:"Not Valid Marks",
  },

  submitHandler: function(form) {
      form.submit();
  }

});