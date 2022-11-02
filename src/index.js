import "./style.scss";


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
    console.log(myTasks);
}



