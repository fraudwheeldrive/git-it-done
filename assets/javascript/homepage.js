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

    //clear old content
    repoContainerE1.textContent = "";
    repoSearchTerm.textContent = searchTerm;

    // loop over repos 

    // loop over repos
for (var i = 0; i < repos.length; i++) {
    // format repo name
    var repoName = repos[i].owner.login + "/" + repos[i].name;
  
    // create a container for each repo
    var repoEl = document.createElement("div");
    repoEl.classList = "list-item flex-row justify-space-between align-center";
  
    // create a span element to hold repository name
    var titleEl = document.createElement("span");
    titleEl.textContent = repoName;

    //create a status element 
    var statusE1 = document.createElement("span");
    statusE1.classList - "flex-row align-center";

    // check if current repo has issues or not 
    if (repos[i].open_issues_count > 0) {
        statusE1.innerHTML =
        "<i class= 'fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + " issues(s)";
    } else{
        statusE1.innerHTML= "<i class='fas fa-check-square status-icon icon-success'></i>";
    }   
    // append to container
    repoEl.appendChild(titleEl);
  
    // append container to the dom
    repoContainerEl.appendChild(repoEl);
  }
};
    
userFormEl.addEventListener( "submit", formSubmitHandler);  
