// Timer
setTimerBtn.addEventListener("click", () => {
    let userInputMinutes = userInputTimer.value;
    let userInputSeconds = userInputMinutes * 60;
    let counter = 0;
    timerProgressBar.style.visibility = "visible";
    stopTimerBtn.style.visibility = "visible";
    setTimerBtn.style.visibility = "hidden";

    let timer = setInterval(function(){
        counter += 1;
        if (counter == 100){
            timerProgressBar.style.visibility = "hidden";
            stopTimerBtn.style.visibility = "hidden";
            setTimerBtn.style.visibility = "visible";
            clearInterval(timer);
        }
        timerProgressBar.style.width = `${counter}%`;
        timerProgressBar.style.height = '30px';
        timerProgressBar.style.backgroundColor = 'black';
        },userInputSeconds*10);
    
        // Stop timer
        stopTimerBtn.addEventListener("click",() =>{
            timerProgressBar.style.visibility = "hidden";
            stopTimerBtn.style.visibility = "hidden";
            setTimerBtn.style.visibility = "visible";
            clearInterval(timer);
    })
});