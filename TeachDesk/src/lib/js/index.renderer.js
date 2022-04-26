import { Octokit } from "https://cdn.skypack.dev/@octokit/core";

document.querySelector('.collum1').addEventListener('click', function(e) {
    window.location.href = './ask.random.html';
}, false);

document.querySelector('.collum2').addEventListener('click', function(e) {
    window.location.href = './ask.grouper.html';
}, false);

//Get from GitHub the Relases form the Repo and console.log those
//https://api.github.com/repos/electron/electron/releases
//https://api.github.com/repos/electron/electron/releases/latest
currentVersion = "1.0.0-beta.2";

response = await octokit.request('GET /repos/{owner}/{repo}/releases', {
    owner: 'flynnlg',
    repo: 'student-group-assignment'
  })

  console.log(response);

  //check response for name
    //https://api.github.com/repos/flynnlg/student-group-assignment/releases/latest

