// For each element of the object
Object.keys(localStorage).forEach(function(element){
    // Create a new instance to check the number of tasks done and remaining 
    // Discard all the element in the storage that aren't list objects
    if(localStorage.getItem(element).length > 10){
        let listObj = JSON.parse(localStorage.getItem(element));
        let tasksArray = listObj.tasks;
        let listInst = new List(listObj);
        listInst.tasks.forEach((element)=>{
            if (element.isDone == true){
                document.getElementById(`${listInst.listName} ${element.taskName}`).checked = true;
                document.getElementById(`${listInst.listName} ${element.taskName}`).nextElementSibling.style.textDecoration = 'line-through';
            }
            else if (element.isDone == false){
                document.getElementById(`${listInst.listName} ${element.taskName}`).checked = false;
                document.getElementById(`${listInst.listName} ${element.taskName}`).nextElementSibling.style.textDecoration = 'none';
            }
        })
    }
})

// Tasks checkboxes, not in global variables to avoid error if there aren't any list yet
let tasksCheckboxes = document.querySelectorAll("input[name=task-checkbox]");
// Iterate over all the checkboxes from a specific list to detect any changes
for (let i = 0; i < tasksCheckboxes.length; i++){
    // If there are changes, fire changeTaskStatusCheckbox function to update dashboard - see globalVariables to check out function's details
    tasksCheckboxes[i].addEventListener("change", () => {
        let taskListName = tasksCheckboxes[i].parentElement.parentElement.id;
        let taskNameCheck = tasksCheckboxes[i].id.replace(`${taskListName} `, "");
        changeTaskStatusCheckbox(taskListName, taskNameCheck, tasksCheckboxes[i]);
    })
}