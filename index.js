let update = document.getElementById("update");
let music = new Audio("Juanita Bynum - dont mind waiting.mp3");
function countdown(){
    const newDate = new Date(document.getElementById('bath-date').value).getTime();
    const currentDate = new Date().getTime();
    const TotalSeconds = (newDate - currentDate)/1000;
    
    
    const days = Math.floor((TotalSeconds / 3600 / 24));
    const hours = Math.floor((TotalSeconds / 3600)%24);
    const minutes = Math.floor((TotalSeconds / 60)%60);
    const seconds = Math.floor((TotalSeconds)%60);

    document.getElementById('days').innerHTML = formatTime(days);
    document.getElementById('hours').innerHTML = formatTime(hours);
    document.getElementById('minutes').innerHTML = formatTime(minutes);
    document.getElementById('seconds').innerHTML = formatTime(seconds);
    formatSec(TotalSeconds)
}

function formatTime(time){
    return time < 10 ? `0${time}` : time; 
}

function formatSec(time){
    if(time < 0){
    document.getElementById('days').innerHTML = '00';
    document.getElementById('hours').innerHTML = '00';
    document.getElementById('minutes').innerHTML = '00';
    document.getElementById('seconds').innerHTML = '00';
    update.innerHTML = "It's Time To Take Your Bath!";
    }
}

countdown();
setInterval(countdown, 1000);
