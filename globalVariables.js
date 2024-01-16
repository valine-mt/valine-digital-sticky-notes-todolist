// OPENING PAGE
const openingPageStartBtn = document.getElementById("opening-page-start-btn");
const openingPart1 = document.getElementById("opening-part-1");
const openingPart2 = document.getElementById("opening-part-2");
const startContainer = document.getElementById("start-container");
const closePageBtn = document.getElementById("close-page-btn");

// *******

// DARK/LIGHT MODE
const darkLightModeBtn = document.getElementById("dark-light-mode-btn");

// DASHBOARD
// Number of Tasks Done
const nbTasksDone = document.getElementById("nb-tasks-done");
// Done counter
let counterDoneDisplay = 0;

// Number of Tasks Remaining
const nbTasksRemaining = document.getElementById("nb-tasks-remaining");
// Remaining counter
let counterRemainingDisplay = 0;

// Timer btn
const setTimerBtn = document.getElementById("set-timer-btn");
const stopTimerBtn = document.getElementById("stop-timer-btn");
const timerProgressBar = document.getElementById("timer-progress-bar");
const userInputTimer = document.getElementById("nb-minutes-timer");


// BTN
// Remove all btn
const removeListsBtn = document.getElementById("remove-lists-btn");


// Add list btn
const addListBtn = document.getElementById("add-new-list-btn");
// Add list form
const addListForm = document.getElementById("add-list-form");
// User input list name
const inputListName = document.getElementById("input-list-name");
// Add list submit btn
const addListSubmitBtn = document.getElementById("add-list-submit-btn");


// Add task btn
const addTaskBtn = document.getElementById("add-new-task-btn");
// Add list form
const addTaskForm = document.getElementById("add-task-form");
// User input task name
const inputTaskName = document.getElementById("task-name");
// User input task list select
const inputTaskList = document.getElementById("task-list");
// Add task submit btn
const addTaskSubmitBtn = document.getElementById("add-task-submit-btn");



// LISTS
// Color Palette
const colorPaletteContainer = document.getElementById("color-palette-container");
const colorPaletteClass = document.querySelectorAll(".color-palette-class")
const color1 = document.getElementById("color-1");
const color2 = document.getElementById("color-2");
const color3 = document.getElementById("color-3");
const color4 = document.getElementById("color-4");
// Notes
const listContainer = document.getElementById("list-container");
const individualNoteClass = document.querySelectorAll(".individual-note-class");
// Edit list btn
const editListBtnContainer = document.getElementById("edit-list-btn-container");
const editListBtnClass = document.querySelectorAll(".edit-list-btn-class");
// Change list name
const newListNameContainer = document.getElementById("new-list-name-container");
const newListName = document.getElementById("new-list-name");
const saveNewListNameBtn = document.getElementById("save-new-list-name-btn");
// Add task
const newTaskContainer = document.getElementById("new-task-container");
const addNewTaskBtn = document.getElementById("add-new-task-btn");
const newTaskName = document.getElementById("new-task-name");


// FUNCTIONS
// Get number of done tasks
function getNumberDoneDashboard(listName){
    let listObj = JSON.parse(localStorage.getItem(listName));
    let listInst = new List(listObj);
    let numberTasksDoneForList = listInst.getNumberOfDoneTasks();
    return numberTasksDoneForList
}

// Get number of remaining tasks
function getNumberRemainingDashboard(listName){
    let listObj = JSON.parse(localStorage.getItem(listName));
    let listInst = new List(listObj);
    let numberTasksRemainingForList = listInst.getNumberOfRemainingTasks();
    return numberTasksRemainingForList
}


// Delete tasks btn
function deleteTaskBtn(listName, task){
    let listObj = JSON.parse(localStorage.getItem(listName));
    let listInst = new List(listObj);
    listInst.deleteTask(task);
}

// Update done/remaining counters - checkbox changes
function changeTaskStatusCheckbox(listName, taskName, taskCheckbox){
    let taskInst = new Task(taskName);
    taskInst.changeTaskStatus(listName, taskName, taskCheckbox);
}

// Change list color
function changeListColorClickColorPalette(listName, newColor){
    let listObj = JSON.parse(localStorage.getItem(listName));
    let listInst = new List(listObj);
    listInst.changeColor(newColor);
}

// Change coordinates x y
function changeCoordinatesMove(listName, x, y){
    let listObj = JSON.parse(localStorage.getItem(listName));
    let listInst = new List(listObj);
    listInst.changeCoord(x,y);
}

// Increment zIndex
function incrementZIndexClick(listName){
    let listObj = JSON.parse(localStorage.getItem(listName));
    let listInst = new List(listObj);
    listInst.changeZIndex();
}

// Delete list
function deleteList(listName){
    localStorage.removeItem(listName);
    location.reload();
}

// Change list name
function changeListName(oldListName, newListName){
    // Copy current key/value in localStorage
    let currListValue = JSON.parse(localStorage.getItem(oldListName));
    currListValue.listName = newListName;
    // Set new key/value with newListName
    localStorage.setItem(newListName, JSON.stringify(currListValue));
    // Erase old key/value in localStorage
    localStorage.removeItem(oldListName);
    // Reload page
    location.reload();
}

// Add new task
// Add a task to a list
function addNewTaskClick(taskName, listName){
    let listObj = JSON.parse(localStorage.getItem(listName));
    let listInst = new List(listObj);
    listInst.addTask(taskName);
}
        