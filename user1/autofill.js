// Save Speedial in LocalStorage

function setphspd1(){
    let newp1spd= prompt("Enter the number you'd like to add to your speed-dial")
    localStorage.setItem('phpref1', newp1spd)
}
function setwaspd1(){
    let newwa1spd= prompt("Enter the number you'd like to add as WhatsApp speeddial")
    localStorage.setItem('waspd1', newwa1spd)
}


// Setting Speedial onload

function setspddial1(){
    let phspdrtr1= localStorage.getItem('phpref1')
    document.getElementById('u1phsp').href= "callto:+91"+ phspdrtr1;
}