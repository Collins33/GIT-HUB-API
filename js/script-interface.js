var Github= require('./../js/script.js').gitModule;



$(document).ready(function(){
  var newUser=new Github();
  $('form.githubform').submit(function(event){
    event.preventDefault();
    var users=$('input#user').val();
    $('input#user').val("");
    newUser.giveInfo(users);
  });
});
