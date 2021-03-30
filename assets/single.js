var getRepoIssues = function(repo) {
console.log(repo);
var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
fetch(apiUrl).then(function(response) {
    //was successful
    if (response.ok) {
        response.json().then(function(data){
            displayIssues(data);
        });
    }
    else{
        alert("there was a problem with your request!")
    }
});
};
var displayIssues = function(issues) {
    
    for (var i=0; i < issues.length; i++) {
        //create a link element to take users to the issue on github
        var issueE1 = document.createElement("a");
        issueE1.classList = "list-item flex-row justify-space-between align-center";
        issueE1.setAttribute("href" , issues[i].html_url);
        issueE1.setAttribute("target", "_blank");
    }

};

getRepoIssues("facebook/react");