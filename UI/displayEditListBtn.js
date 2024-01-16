// Display edit list btn when user clicks on a note
for (let i = 0; i < listContainer.children.length; i++){
    listContainer.children[i].addEventListener("click", ()=>{
        if (editListBtnContainer.style.visibility == "visible"){
            editListBtnContainer.style.visibility = "hidden";
        }
        else{
            editListBtnContainer.style.visibility = "visible";
            // If user clicks on delete list btn
            for(let j = 0; j < editListBtnContainer.children.length; j++){
                editListBtnContainer.children[j].addEventListener("click", ()=>{
                    // If the button clicked is remove list btn, apply delete list function (globalVariables.js)
                    if (editListBtnContainer.children[j].id == "remove-list-btn") deleteList(listContainer.children[i].id);
                    else if(editListBtnContainer.children[j].id == "edit-list-name-btn"){
                        // Display form to gather user's input for new name
                        if (newListNameContainer.style.visibility == "visible"){
                            newListNameContainer.style.visibility = "hidden";
                        }
                        else{
                            newListNameContainer.style.visibility = "visible";
                            saveNewListNameBtn.addEventListener("click", ()=>{
                                // Change name
                                let oldListName = listContainer.children[i].id;
                                let userInputName = newListName.value;
                                changeListName(oldListName, userInputName);
                            })
                        }
                    } 
                    else if(editListBtnContainer.children[j].id == "add-new-task-list-btn"){
                        if (newTaskContainer.style.visibility == "visible"){
                            newTaskContainer.style.visibility = "hidden";
                        }
                        else{
                            newTaskContainer.style.visibility = "visible";
                            addNewTaskBtn.addEventListener("click", ()=>{
                                // Get user's input - cf globalVariables for function
                                let taskName = newTaskName.value;
                                let listName = listContainer.children[i].id;
                                addNewTaskClick(taskName, listName)
                            })
                        }
                    }        
                })
            }            
        }
    })
}