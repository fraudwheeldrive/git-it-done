var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");
var repoContainerE1 = document.querySelector("#repos-container");
var repoSearchTerm = document.querySelector("#repo-search-term");

var formSubmitHandler = function (event) {
    event.preventDefault();
    if (username) {
        getUserRepos(username);
        nameInputE1.value= "";
    } else{
        alert("please enter a GitHub username");
    }
};

var getUserRepos = function(user) {
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    //make a request to the url 
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            displayRepos(data, user);
        });
    });
};

var displayRepos = function(repos, searchTerm) {
    console.log(repos);
    console.log(searchTerm);
};
    
userFormEl.addEventListener( "submit", formSubmitHandler);  
