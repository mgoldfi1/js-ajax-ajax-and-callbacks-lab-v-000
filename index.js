$(document).ready(function  (){

});

function searchRepositories () {
  $.get(`https://api.github.com/search/repositories?q=${document.getElementById('searchTerms').value}`, function(data) {
    console.log(  $('#results').html(data))
    $('#results').html(data)
  })
}
