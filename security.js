function fillnames(){
    console.log("Hey there user. Welcome to the site :)");
    console.log("Filling names in empty divs");

    let fill1= localStorage.getItem('usrnm1')
    let u1fill= document.getElementById('u1txt');
    u1fill.innerText= fill1;

    let fill2= localStorage.getItem('usrnm2')
    let u2fill= document.getElementById('u2txt');
    u2fill.innerText= fill2;

    let fill3= localStorage.getItem('usrnm3')
    let u3fill= document.getElementById('u3txt');
    u3fill.innerText= fill3;

    let fill4= localStorage.getItem('usrnm4')
    let u4fill= document.getElementById('u4txt');
    u4fill.innerText= fill4;

}
// Reject logins without Trust Tokens



