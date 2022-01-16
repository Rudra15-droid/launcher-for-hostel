// Save Speedial in LocalStorage

function setphspd1(){
    let newp1spd= prompt("Enter the number you'd like to add to your speed-dial")
    localStorage.setItem('phpref1', newp1spd)
}
function setwaspd1(){
    let newwa1spd= prompt("Enter the number you'd like to add as WhatsApp speeddial")
    localStorage.setItem('waspd1', newwa1spd)
}
function setigsp1(){
    let newigsp1= prompt("Enter the id of the Instagram account you want to add to your speedial")
    localStorage.setItem('igspd1', newigsp1)
}

// Setting Speedial onload

function setspddial1(){
    let phspdrtr1= localStorage.getItem('phpref1')
    document.getElementById('u1phsp').href= "callto:+91"+ phspdrtr1;


    let waspdrtr1= localStorage.getItem("waspd1")
    document.getElementById('u1wasp').href= "https://wa.me/+91"+ waspdrtr1;
<<<<<<< HEAD

    let igsprtr1= localStorage.getItem('igspd1')
    document.getElementById('u1igsp').href= "https://instagram.com/"+ igsprtr1;
}

// Set Elements onload homepage



//Set colors onloading Settings




//Set prefs
function showsd1(){
    localStorage.setItem('showspd1', 'show')
    alert('Speeddial Toggled On!')
}


// Logout
function logout1(){
    sessionStorage.removeItem('u1verif')
    window.location.replace("/index.html")
=======
>>>>>>> parent of 63c1a45 (Minor Updates)
}