const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

//Log ins
function setpwd1() {
    let newpwd1 = prompt('Set your new password')
    localStorage.setItem('setpwd1', newpwd1);
}
function setpwd2() {
    let newpwd2 = prompt('Set your new password')
    localStorage.setItem('setpwd2', newpwd2);
}
function setpwd3() {
    let newpwd3 = prompt('Set your new password')
    localStorage.setItem('setpwd3', newpwd3);
}
function setpwd4() {
    let newpwd4 = prompt('Set your new password')
    localStorage.setItem('setpwd4', newpwd4);
}

//For User 1
let vrfcd1= generateString(16);
function getpwd1() {
    let asetpwd1 = localStorage.getItem('setpwd1');

    let gvnpwd1 = prompt("Enter your password")

    if (gvnpwd1 == asetpwd1) {
        alert("Successful login. 32bit Encrypted Code ****************"+vrfcd1)
        sessionStorage.setItem('u1verif', "succverif")
        console.log("Successful login with trust code set to " + vrfcd1)
        window.location.replace("/user1/index.html")
    } else {
        alert("Wrong password");
    }
}
//Security check
function checkttu1(){
    console.log("Running log-in check")
    let checkttcode= sessionStorage.getItem('u1verif');
    if (checkttcode=="succverif"){
        console.log("Login verified")
    }else{
        window.location.replace("/index.html");
    }
}

//User 1 End

// User 2
function getpwd2() {
    let asetpwd2 = localStorage.getItem('setpwd2');

    let gvnpwd2 = prompt("Enter your password")

    if (gvnpwd2 == asetpwd2) {
        alert("Successful login. 32bit Encrypted Code ****************"+vrfcd1)
        sessionStorage.setItem('u2verif', "succverif")
        console.log("Successful login with trust code set to " + vrfcd1)
        window.location.replace("/user2/index.html")
    } else {
        alert("Wrong password");
    }
}

function checkttu2(){
    console.log("Running log-in check")
    let checkttcode= sessionStorage.getItem('u2verif');
    if (checkttcode=="succverif"){
        console.log("Login verified")
    }else{
        window.location.replace("/index.html");
    }
}

//User 3
function getpwd3() {
    let asetpwd3 = localStorage.getItem('setpwd3');

    let gvnpwd3 = prompt("Enter your password")

    if (gvnpwd3 == asetpwd3) {
        alert("Successful login. 32bit Encrypted Code ****************"+vrfcd1)
        sessionStorage.setItem('u3verif', "succverif")
        console.log("Successful login with trust code set to " + vrfcd1)
        window.location.replace("/user3/index.html")
    } else {
        alert("Wrong password");
    }
}

function checkttu3(){
    console.log("Running log-in check")
    let checkttcode= sessionStorage.getItem('u3verif');
    if (checkttcode=="succverif"){
        console.log("Login verified")
    }else{
        window.location.replace("/index.html");
    }
}