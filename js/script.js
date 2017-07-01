var apikey =require('./../.env').apikey;
// constructor for github object
function Github(){

}
// prototype for getting response from github
Github.prototype.giveInfo=function(users){
  $.get('https://api.github.com/users/'+ users +'?access_token=' + apikey).then(function(response){
    console.log(JSON.stringify(response));
    // display the user information
    $('.image').html('<img src="'+response.avatar_url+'" class="">');
    $('.showname').text(response.login);
    $('.showurl').text(response.html_url);


    $('.reponumbers').text(response.public_repos);
    $('.creationdate').text(response.created_at);
    $('.update').text(response.updated_at);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
  $('.show').text(users);
};
// exporting module to the userinterface
exports.gitModule= Github;
