$(document).ready(function  (){

});

function searchRepositories () {
  $.get(`https://api.github.com/search/repositories?q=${document.getElementById('searchTerms').value}`, function(data) {

    for (const x of data.items) {
      console.log(x)
      $('#results').append(`<div>${x.name}, <a href="#" data-repository="${x.name}" onclick="showCommits(this)">Show Commits</a></div>`)
    }
  })
}

function showCommits(el) {
  console.log(el.data.repository.name)
  $.get(`https://api.github.com/repos/chvin/react-tetris/commits`, function(data){

  })

}
