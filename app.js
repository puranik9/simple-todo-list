/**
 * Created by puranikk on 2017-08-03.
 */
var taskInput = document.getElementById("newTask");
var taskList = document.querySelector("ul");

var addTask = function() {
    var listItem = document.createElement("li");
    var checkBox = document.createElement("input");
    var label = document.createElement("label");

    checkBox.type = "checkbox";
    label.innerHTML = taskInput.value;

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    //to prevent empty tasks from being added to the list
    if(taskInput.value) {
        taskList.insertBefore(listItem, taskList.firstChild);
    }
    else {
        alert("Please enter a task");
    }

    //after adding a task to the list, input field should be empty
    taskInput.value = "";

    //add an event listener to checkbox, so whenever it is clicked, the item is removed
    checkBox.addEventListener("change", removeTask);
};

var removeTask = function() {

    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    console.log("Removed task " + ul.label);

    ul.removeChild(listItem);
};

taskInput.addEventListener("keyup", function(e) {
    console.log("Event triggered");
    if(e.keyCode === 13) {
        addTask();
    }
});