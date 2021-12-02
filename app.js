$(function(){
  var $loginForm = $("#login");
  if ($loginForm.length){
    $loginForm.validate({
      rules:{
        username:{
          required: true
        },
        password:{
          required: true
        },
        email: { 
          required: true
        },
        control: { 
          required: true
        },
      },
      messages:{
        username:{
          required: "You cannot leave this field empty!"
        },
        password:{
          required: "You cannot leave this field empty!"
        },
        email:{
          required: "You cannot leave this field empty!"
        },
        control:{
          required: "You cannot leave this field empty!"
        },
      }
    })
  }
})
