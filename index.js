$(document).ready(function  (){
  return searchRepositories()
});

function searchRepositories () {
  $.get(`https://api.github.com/search/repositories?q=${document.getElementById('searchTerms').value}`, function(data) {
    $('#results').html(data)
  })
}
