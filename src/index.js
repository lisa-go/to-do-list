import "./style.scss";
import { displayTasks, displayProjects, displayDprojects, newdisplayTask } from './display.js';
import logoIcon from './images/edit.svg';
import addIcon from './images/add.svg';

export let myTasks = [];

class Task {
    constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    }
        addToList(){ 
            myTasks.push([this.title, this.description, this.dueDate, this.priority, this.project]);
            return this;
        }
}

class Project {
    constructor(pname) {
        this.pname = pname;
    }
        addToProjectlist() {
            myProjects.push(this.pname);
            return this;
        }
}

//* adding images *//
const logo = new Image();
logo.src = logoIcon;
logo.classList.add('filter-brown');
document.querySelector('.header').appendChild(logo);

const add = new Image();
add.src = addIcon;
add.classList.add('resize');
document.querySelector('#openForm').appendChild(add);
const add2 = new Image();
add2.src = addIcon;
add2.classList.add('resize');
document.querySelector('#addProject').appendChild(add2);


//* event listener for submit button on form *//
const formBtn = document.querySelector('#formBtn');
formBtn.addEventListener("click", newTask);

//* create a new task with form values *//
function newTask() {
    let title = document.querySelector("#title").value;
    let description = document.querySelector("#description").value;
    let dueDate = document.querySelector("#dueDate").value;
    let priority = document.querySelector("#priority").value;
    let project = document.querySelector("#project").value;

    var task = new Task(title, description, dueDate, priority, project);

    task.addToList();

    closeForm();
    newdisplayTask();
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
const closeFormBtn2 = document.querySelector('#closeForm2');
closeFormBtn2.addEventListener("click", closeForm);

//* function to open form *//
function closeForm() {
    document.querySelector('#formBg').style.display = "none";
    document.querySelector('#formBg2').style.display = "none";
}

//* project list on form *//
const projectListCont = document.querySelector('.project');
const projectList = document.createElement('select');
projectList.name = 'project';
projectList.id = 'project';
projectList.required = 'true';
projectListCont.appendChild(projectList);

const defaultProject = document.createElement('option');
defaultProject.value = 'default';
defaultProject.textContent = 'Default';
defaultProject.selected = 'true';
projectList.appendChild(defaultProject);

export let myProjects = [projectList.value];

        //* event listener for opening add project form *//
        const addProjectBtn = document.querySelector('#addProject');
        addProjectBtn.addEventListener("click", openForm2);

        function openForm2() {
            document.querySelector('#formBg2').style.display = "flex";
        }

        //* add new projects *//
        const formBtn2 = document.querySelector('#formBtn2');
        formBtn2.addEventListener("click", newProject);

        function newProject() {
            let pname = document.querySelector("#newProject").value;
            var project = new Project(pname);
            project.addToProjectlist();
            
            let projectName = myProjects.slice(-1);
            const projectStr = document.createElement('option');
            projectStr.value = projectName;
            projectStr.textContent = projectName;
            projectList.appendChild(projectStr);

            closeForm();
            displayProjects();
            console.log (myProjects);
        }

        displayDprojects();

