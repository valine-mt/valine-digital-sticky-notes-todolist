// Iterate through all the lists in localStorage and set each list's style to corresponding color
for(let l = 0; l < listContainer.children.length; l++){
    // Get list color
    let listObj = JSON.parse(localStorage.getItem(listContainer.children[l].id));
    let currBackgroundColor = listObj.listColor;
    // Set color
    listContainer.children[l].style.backgroundColor = currBackgroundColor;
}

// Display color palette when user clicks on a note
for(let i = 0; i < listContainer.children.length; i++){
    listContainer.children[i].addEventListener("click", ()=>{
    for (let j = 0; j < colorPaletteClass.length; j++){
        if (colorPaletteClass[j].style.visibility == "visible"){
            colorPaletteClass[j].style.visibility = "hidden";
        }
        else{
            colorPaletteClass[j].style.visibility = "visible";
            // When user clicks on a color from the color palette, change note's color and save color to localStorage and reload
            colorPaletteClass[j].addEventListener("mouseover", ()=>{
            let selectedColorID = colorPaletteClass[j].id;
            // Get style of the color selected (cannot use style only because that works for inline styles)
            let selectedColor = window.getComputedStyle(document.querySelector(`#${selectedColorID}`)).backgroundColor;
            console.log(listContainer.children[i]);
            // Set list's backgroundColor to selectedColor
            listContainer.children[i].style.backgroundColor = selectedColor;
            })

            // When user clicks on a color from the color palette, change note's color and save color to localStorage and reload
            colorPaletteClass[j].addEventListener("click", ()=>{
                let selectedColorID = colorPaletteClass[j].id;
                // Get style of the color selected (cannot use style only because that works for inline styles)
                let selectedColor = window.getComputedStyle(document.querySelector(`#${selectedColorID}`)).backgroundColor;
                // Set list's backgroundColor to selectedColor
                listContainer.children[i].style.backgroundColor = selectedColor;
                changeListColorClickColorPalette(listContainer.children[i].id, selectedColor)
            })
        }
    }
    }
    
    )
}


