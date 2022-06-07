var countdownTime = new Date("Jan 1 2023").getTime();


function countdown(){

    const now = new Date().getTime()
    const timeLeft = countdownTime - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((timeLeft % (1000 * 60)) / 1000);


    if(timeLeft < 1){
        document.getElementById("statement").innerHTML = "Happy New Year!!!";
        document.getElementById("countdown-container").style.display = "none";
    }
    
    document.getElementById("days").innerHTML = formatTime(days);
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("mins").innerHTML = formatTime(mins);
    document.getElementById("secs").innerHTML = formatTime(secs);
    
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);