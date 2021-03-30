
var issueContainerE1 = document.querySelector("#issue-container");

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

    if (issues.length === 0) {
        issueContainerE1.textcontent = "This repo has no open issues!";
        return;
    }
    
    for (var i=0; i < issues.length; i++) {
        //create a link element to take users to the issue on github
        var issueE1 = document.createElement("a");
        issueE1.classList = "list-item flex-row justify-space-between align-center";
        issueE1.setAttribute("href" , issues[i].html_url);
        issueE1.setAttribute("target", "_blank");

        //create span to hold issue titile
        var titleEl = document.createElement("span");
        titleEl.textContent = issues[i].title;

        //append to container
        //issueE1.appendChild(typeE1);//

        // create a type element
        var typeE1 = document.createElement("span");

        // cheach if issue is an actual issue or a pull request
        if (issues[i].pull_request) {
            typeE1.textContent = "(pull request)";
        }else {
            typeE1.textContent = "(issue)";
        }

        issueContainerE1.appendChild(issueE1);

        
    }
//append to container
issueE1.appendChild(typeE1);
};

getRepoIssues("facebook/react");