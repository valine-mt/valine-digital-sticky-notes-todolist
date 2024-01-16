// Iterate through all the lists in localStorage and set each list's style to corresponding zIndex
for(let j = 0; j < listContainer.children.length; j++){
    // Get list coordinates
    let listObj = JSON.parse(localStorage.getItem(listContainer.children[j].id));
    if(listObj.listName){
        let currZIndex = listObj.zInd;
        // Set zIndex
        listContainer.children[j].style.zIndex = currZIndex;
    }
}

// Increment list's zIndex when user clicks on list & set new current highest zIndex
for(let i = 0; i < listContainer.children.length; i++){
    listContainer.children[i].addEventListener("click", ()=>{
        incrementZIndexClick(listContainer.children[i].id);
        listContainer.children[i].style.zIndex = Number(JSON.parse(localStorage.getItem("zIndex")));
    })
}