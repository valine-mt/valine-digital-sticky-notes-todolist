class List{
    constructor(listState){
            this.listName = listState.listName;
            this.xCoord = listState.xCoord;
            this.yCoord = listState.yCoord;
            this.zInd = listState.zInd;
            this.listColor = listState.listColor;
            this.tasks = JSON.parse(localStorage.getItem(this.listName)).tasks;
        // for (let i = 0; i < this.tasks.length; i++){
        //     this.tasks.push(new Task(listState.tasks[i]));
        // }
    }

    // Get number of tasks done
    getNumberOfDoneTasks(){
        let counter = 0;
        for (let i = 0; i < this.tasks.length; i++){
            if (this.tasks[i].isDone){
                counter++;
            }
        }
        return counter;
    }

    // Get number of tasks remaining
    getNumberOfRemainingTasks(){
        let counter = 0;
        for (let i = 0; i < this.tasks.length; i++){
            if (!this.tasks[i].isDone){
                counter++;
            }
        }
        return counter;
    }


    // Delete a task
    deleteTask(taskName){
        // Filter out tasks - only get those who don't go by taskName
        let updatedTaskList = this.tasks.filter((taskObj) => taskObj.taskName != taskName);
        this.tasks = updatedTaskList;
        // Get the current list
        let currList = JSON.parse(localStorage.getItem(this.listName));
        currList.tasks = updatedTaskList;
        // Store new updated list in localStorage
        localStorage.setItem(this.listName, JSON.stringify(currList));
        location.reload();
    }

    // Change list name
    changeListName(listName){
        localStorage.setItem(this.listName, listName);
    }

    // Change color of a list
    changeColor(listColor){
        this.listColor = listColor;
        localStorage.setItem(this.listName, JSON.stringify(this));
        location.reload();
    }

    // Change coord (move list) of a list
    changeCoord(xCoord,yCoord){
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        localStorage.setItem(this.listName, JSON.stringify(this));
    }

    // Change zIndex;
    changeZIndex(){
        let currZIndex = Number(JSON.parse(localStorage.getItem("zIndex")));
        // Initialize zIndex in localStorage to track current highest zIndex
        if(!currZIndex){
            localStorage.setItem("zIndex", 0);
        }
        this.zInd = currZIndex + 1;
        localStorage.setItem("zIndex", this.zInd);
        localStorage.setItem(this.listName, JSON.stringify(this));
    }

    addTask(taskName){
        //  Check if list already contains a task named taskName
        let taskExists = false;
        for(let i = 0; i < this.tasks.length; i++){
            console.log(this.tasks[i].taskName)
            if (this.tasks[i].taskName == taskName){
                alert("This task already exists. Choose a different name.");
                taskExists = true;
            }
        }

        if (taskExists == false){
            // If list doesn't contain such a task, add task to list
            let newTask = new Task(taskName);
            this.tasks.push(newTask);
            localStorage.setItem(this.listName, JSON.stringify(this));
            location.reload();
        }
        else return
    }

}



// List creation
// Listen for user's click on the "add list" button, when get user's click
addListBtn.addEventListener("click", ()=>{
    // Show add list form
    addListForm.style.visibility = "visible";
    // Listen for user's submission of a new list, when user submits new list
    addListSubmitBtn.addEventListener("click", ()=>{
        addListForm.style.visibility = "hidden"; 
        const newListName = inputListName.value;
        // First initialization of list object
        let currZIndex = Number(JSON.parse(localStorage.getItem("zIndex")));
        let color1 = colorPaletteClass[0].id;
        // Get style of color 1 (cannot use style only because that works for inline styles)
        let defaultListColor = window.getComputedStyle(document.querySelector(`#${color1}`)).backgroundColor;
        let list = {
            listName: newListName,
            xCoord: colorPaletteContainer.style.left,
            yCoord: colorPaletteContainer.style.top,
            listColor: defaultListColor,
            zInd: currZIndex,
            tasks: []
        }
        // Store that initial list in localStorage (only if the list doesn't already exist)
        if (localStorage.getItem(newListName) == null){
            localStorage.setItem(newListName, JSON.stringify(list));
            location.reload();
        } 
        else alert("This list already exists. Choose a different name.");
    })
})



// Delete all lists
removeListsBtn.addEventListener("click", ()=>{
    localStorage.clear();
    location.reload();
})
        




// <!-- Goal LocalStorage -->
// <!-- 
//     ListName = {
//         listName: '',
//         xCoord: 'px',
//         yCoord: 'px',
//         listColor: '',
//         tasks: [
//             {
//                 taskName: '',
//                 isDone: false,
//             },
//             {
//                 taskName: '',
//                 isDone: false,
//             }
//         ]
//     }

//     Quote = ''
//  -->