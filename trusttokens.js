const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
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