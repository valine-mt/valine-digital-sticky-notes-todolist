// For each element of the object
Object.keys(localStorage).forEach(function(element){
    // Create a new instance to check the number of tasks done and remaining 
    // Discard all the element in the storage that aren't list objects
    if(localStorage.getItem(element).length>10){
        let listObj = JSON.parse(localStorage.getItem(element));
        counterDoneDisplay += getNumberDoneDashboard(listObj.listName);
        counterRemainingDisplay += getNumberRemainingDashboard(listObj.listName);
    }
    });


// Display counters
nbTasksDone.innerHTML = `<p>${counterDoneDisplay}</p>`;
nbTasksRemaining.innerHTML = `<p>${counterRemainingDisplay}</p>`;