$(document).ready(function  (){

});

function searchRepositories () {
  console.log(`https://api.github.com/search/repositories?q=${document.getElementById('searchTerms').value}`)
  $.get(`https://api.github.com/search/repositories?q=${document.getElementById('searchTerms').value}`, function(data) {
    $('#results').html(data)
  })
}
