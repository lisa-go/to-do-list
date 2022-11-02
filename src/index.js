import "./style.scss";
import displayTasks from './display.js';

let myTasks = [];

class Task {
    constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    }
        addToList(){ 
            myTasks.push([this.title, this.description, this.dueDate, this.priority]);
            return this;
        }
}


//* event listener for submit button on form *//
const formBtn = document.querySelector('#formBtn');
formBtn.addEventListener("click", newTask);

//* create a new task with form values *//
function newTask() {
    let title = document.querySelector("#title").value;
    let description = document.querySelector("#description").value;
    let dueDate = document.querySelector("#dueDate").value;
    let priority = document.querySelector("#priority").value;

    var task = new Task(title, description, dueDate, priority);

    task.addToList();

    closeForm();
    displayTasks();
    console.log(myTasks);
}


//* event listener for add task button on sidebar *//
const openFormBtn = document.querySelector('#openForm');
openFormBtn.addEventListener("click", openForm);

//* function to open form *//
function openForm() {
    document.querySelector('#formBg').style.display = "flex";
}

//* event listener for cancel button on form *//
const closeFormBtn = document.querySelector('#closeForm');
closeFormBtn.addEventListener("click", closeForm);

//* function to open form *//
function closeForm() {
    document.querySelector('#formBg').style.display = "none";
}