openingPageStartBtn.addEventListener("click", ()=>{
    openingPart2.className = "opening-slide-animation-right";
    openingPart1.className = "opening-slide-animation-left";
    startContainer.className = "start-container-animation-fade";

    setTimeout(()=>{
        window.location="./todolist.html"
    }, 3000)
})