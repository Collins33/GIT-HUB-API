var apikey =require('./../.env').apikey;


function Github(){

}

Github.prototype.giveInfo=function(users){
  $.get('https://api.github.com/users/'+ users +'?access_token=' + apikey).then(function(response){
    console.log(JSON.stringify(response));
    $('.image').html('<img src="'+response.avatar_url+'">');
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
exports.gitModule= Github;
