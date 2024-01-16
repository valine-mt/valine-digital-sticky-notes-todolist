class Task {
    constructor(taskName){
        this.taskName = taskName;
        this.isDone = false;
    }

    // Change task status
    changeTaskStatus(listName, taskName, checkboxStatus){
        // Get tasks' list
        let listObj = JSON.parse(localStorage.getItem(listName));
        let taskObj = listObj.tasks; 
 
        // Get the task status of taskName
        taskObj.forEach(element => {
            if(element.taskName == taskName){ 
                // If the change is that the checkbox goes from uncheck to checked, change the task status to true
                if(checkboxStatus.checked == true){
                    element.isDone = true;
                }
                // Else, change the task status to false
                else if (checkboxStatus.checked == false){
                    element.isDone = false;
                }
                }
            })

        // Store new tasks in list
        localStorage.setItem(listObj.listName, JSON.stringify(listObj));
        // Reload page
        location.reload();
    }

    // Change task name
    changeTaskName(taskName){
    localStorage(this.taskName, taskName);
    }

}