let currentTime= new Date()
let cHour= currentTime.getHours().value()

function updatehours(){
    let hourscont= document.getElementById('hours')
    hourscont.innerText= cHour
}