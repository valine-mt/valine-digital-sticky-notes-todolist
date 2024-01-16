// Iterate through localStorage
Object.keys(localStorage).forEach(function(element){
    // Retrieve name of the list, coordinates, color and list of tasks
    // Discard all the element in the storage that aren't list objects
    if (localStorage.getItem(element).length>10){
        let listObj = JSON.parse(localStorage.getItem(element));
        let listName = listObj.listName;
        let listXCoord = listObj.xCoord;
        let listYCoord = listObj.yCoord;
        let listTasks = listObj.tasks;
        
        // Add a new note to list container
        listContainer.innerHTML += 
        `<div class="individual-note-class" id="${listName}">
            <h3>${listName}</h3>
            <ul id="${listName}"></ul>
        </div>`
        
        
        listTasks.forEach((element)=>{
            // For onclick deleteTaskBtn function below, see globalVariables to check out function's details
            document.getElementById(`${listName}`).innerHTML += 
            `<li class="task-checkbox">
                <input type="checkbox" name="task-checkbox" id="${listName} ${element.taskName}">
                <label for="${listName} ${element.taskName}">
                    ${element.taskName}
                </label>
                <button class="delete-task-btn zoom-icon" data-task="${element.taskName}" data-list="${listName}" onclick="deleteTaskBtn(this.dataset.list, this.dataset.task)">
                    <i class="iconoir-trash"></i>
                </button>
            </li>`
        })

        
    }

})
