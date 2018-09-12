$(document).ready(function  (){
  searchRepositories()
});

function searchRepositories () {
  return $.get(`https://api.github.com/search/repositories?q=${document.getElementById('searchTerms').value}`, function(data) {
    $('#results').html(data)
  })
}
