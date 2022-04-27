document.querySelector('.collum1').addEventListener('click', function(e) {
    window.location.href = './ask.random.html';
}, false);

document.querySelector('.collum2').addEventListener('click', function(e) {
    window.location.href = './ask.grouper.html';
}, false);

document.querySelector('.collum3').addEventListener('click', function(e) {
    window.location.href = '../notes/index.html';
}, false);

//Get from GitHub the Relases form the Repo and console.log those
//https://api.github.com/repos/electron/electron/releases
//https://api.github.com/repos/electron/electron/releases/latest
currentVersion = "1.0.0-beta.2";



  //check response for name
    //https://api.github.com/repos/flynnlg/student-group-assignment/releases/latest

    //If update is aviable, show update message

