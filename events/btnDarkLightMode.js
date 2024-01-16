// Display the stylesheet depending on the mode that is stored in localStorage
let setCurrMode = localStorage.getItem("mode");
if (setCurrMode == "dark"){
    darkLightModeBtn.children[0].className = "iconoir-sun-light";
    const link = document.querySelector("link");
    link.setAttribute("href", "./styles/styleDark.css");
    link.setAttribute("rel", "stylesheet");
}
else{
    darkLightModeBtn.children[0].className = "iconoir-half-moon";
    const link = document.querySelector("link");
    link.setAttribute("href", "./styles/styleLight.css");
    link.setAttribute("rel", "stylesheet");
}


// Change CSS stylesheet when users clicks on dark/light button
darkLightModeBtn.addEventListener("click", ()=>{
    let currMode = localStorage.getItem("mode");
    if (currMode == "light"){
        darkLightModeBtn.children[0].className = "iconoir-sun-light";
        // darkLightModeBtn.i.class="iconoir-sun-light";
        const link = document.querySelector("link");
        link.setAttribute("href", "./styles/styleDark.css");
        link.setAttribute("rel", "stylesheet");
        localStorage.setItem("mode", "dark");
    }
    else{
        darkLightModeBtn.children[0].className = "iconoir-half-moon";
        const link = document.querySelector("link");
        link.setAttribute("href", "./styles/styleLight.css");
        link.setAttribute("rel", "stylesheet");
        localStorage.setItem("mode", "light");
    }
})
