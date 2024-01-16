closePageBtn.addEventListener("click", ()=>{
    let currMode = localStorage.getItem("mode");
    if (currMode == "dark") window.location="./openingPageDark.html";
    else if (currMode == "light") window.location="./openingPageLight.html";
})