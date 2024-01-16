// Iterate through all the lists in localStorage and set each list's style to corresponding coordinates
for(let k = 0; k < listContainer.children.length; k++){
    // Get list coordinates
    let listObj = JSON.parse(localStorage.getItem(listContainer.children[k].id));
    if(listObj.listName){
        let currXCoord = listObj.xCoord;
        let currYCoord = listObj.yCoord;
        // Set coordinates
        listContainer.children[k].style.left = currXCoord;
        listContainer.children[k].style.top = currYCoord;
    }
}

// When user clicks and drag a list, set list's coordinates to mouse's coordinates
for (let i = 0; i < listContainer.children.length; i++){

    // Set list, color palette, edit btn's coordinates to current list's coordinates
    function staticListCoordinates(list){
        let currListX = Number(list.style.left.replace(/\D/g, ''));
        let currListY = Number(list.style.top.replace(/\D/g, ''));
        // Set color palette's coordinates to match list's coordinates
        let colorAddLeft = 120;
        let colorAddTop = -20;
        for(let j = 0; j < colorPaletteClass.length; j++) {
            colorPaletteClass[j].style.left = `${currListX + colorAddLeft}px`;
            colorPaletteClass[j].style.top = `${currListY + colorAddTop}px`;
            colorAddLeft += 20;
        }
        let editBtnAddLeft = 450;
        let editBtnAddTop = 150;
        // Set edit list btn coordinates to match list's coordinates
        for (let k = 0; k < editListBtnClass.length; k++){
            editListBtnClass[k].style.left = `${currListX + editBtnAddLeft}px`;
            editListBtnClass[k].style.top = `${currListY + editBtnAddTop}px`;
            editBtnAddTop += 40;
        }

        // Set new list name container coordinates to match list's coordinates
        let newListNameLeft = 150;
        let newListNameTop = 120;
        for (let l = 0; l < newListNameContainer.children.length ; l++){
            newListNameContainer.children[l].style.left = `${currListX + newListNameLeft}px`;
            newListNameContainer.children[l].style.top = `${currListY + newListNameTop}px`;
            newListNameLeft -= 25;
        }

        // Set new task name container coordinates to match list's coordinates
        let newTaskContainerLeft = 100;
        let newTaskContainerTop = 300;
        for (let m = 0; m < newTaskContainer.children.length ; m++){
            newTaskContainer.children[m].style.left = `${currListX + newTaskContainerLeft}px`;
            newTaskContainer.children[m].style.top = `${currListY + newTaskContainerTop}px`;
            newTaskContainerLeft -= 25;
        }
    }

    // Set list, color palette and edit btn's coordinates to mouse's coordinates (movementX and movementY) during movement
    function followMouseCoordinates({movementX, movementY}){
        let noteX = window.getComputedStyle(listContainer.children[i]).left;
        let noteY =  window.getComputedStyle(listContainer.children[i]).top;
        listContainer.children[i].style.left = `${movementX + parseInt(noteX)}px`;
        listContainer.children[i].style.top = `${movementY + parseInt(noteY)}px`;
        // Set color palette's coordinates to match list's coordinates
        let colorAddLeft = 120;
        let colorAddTop = -20;
        for(let j = 0; j < colorPaletteClass.length; j++) {
            colorPaletteClass[j].style.left = `${movementX + parseInt(noteX) + colorAddLeft}px`;
            colorPaletteClass[j].style.top = `${movementY + parseInt(noteY) + colorAddTop}px`;
            colorAddLeft += 20;
        }
        let editBtnAddLeft = 450;
        let editBtnAddTop = 150;
        // Set edit list btn coordinates to match list's coordinates
        for (let k = 0; k < editListBtnClass.length; k++){
            editListBtnClass[k].style.left = `${movementX + parseInt(noteX) + editBtnAddLeft}px`;
            editListBtnClass[k].style.top = `${movementY + parseInt(noteY) + editBtnAddTop}px`;
            editBtnAddTop += 40;
        }

        // Set new list name container coordinates to match list's coordinates
        let newListNameLeft = 150;
        let newListNameTop = 120;
        for (let l = 0; l < newListNameContainer.children.length ; l++){
            newListNameContainer.children[l].style.left = `${movementX + parseInt(noteX) + newListNameLeft}px`;
            newListNameContainer.children[l].style.top = `${movementY + parseInt(noteY) + newListNameTop}px`;
            newListNameLeft -= 25;
        }

        // Set new task name container coordinates to match list's coordinates
        let newTaskContainerLeft = 100;
        let newTaskContainerTop = 300;
        for (let m = 0; m < newTaskContainer.children.length ; m++){
            newTaskContainer.children[m].style.left = `${movementX + parseInt(noteX) + newTaskContainerLeft}px`;
            newTaskContainer.children[m].style.top = `${movementY + parseInt(noteY) + newTaskContainerTop}px`;
            newTaskContainerLeft -= 25;
        }
    }

    listContainer.children[i].addEventListener("mousedown",()=>{
        staticListCoordinates(listContainer.children[i]);
        listContainer.children[i].style.cursor = "grabbing";
        listContainer.children[i].addEventListener("mousemove", followMouseCoordinates);
    });
    
    document.addEventListener("mouseup", () =>{
        listContainer.children[i].style.cursor = "grab";
        listContainer.children[i].removeEventListener("mousemove", followMouseCoordinates);
        changeCoordinatesMove(listContainer.children[i].id, listContainer.children[i].style.left, listContainer.children[i].style.top);
    })
    
}