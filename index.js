$(document).ready(function  (){

});

function searchRepositories () {
  $.get(`https://api.github.com/search/repositories?q=${document.getElementById('searchTerms').value}`, function(data) {
    console.log(data)
    for (const x of data.items) {
      $('#results').append(`<div>${x.name}, <a href="#" data-repository="${x.name}" onclick="showCommits(this)">Show Commits</a></div>`)
    }
  })
}

function showCommits(el) {
  console.log(el)

}
