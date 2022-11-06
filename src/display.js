import { myProjects, myTasks } from "./index.js";
import setIcon from "./images/settings.svg";
import delIcon from "./images/backspace.svg";
import { delTask, editTask, strikeTask } from "./settings.js";
import daIcon from "./images/double_arrow.svg";

var num;
var tid;
const taskCont = document.querySelector('#taskContainer');

export function newdisplayTask(value) {
    if (value === 'new') {
        num = myTasks.slice(-1)[0];
    }

    else {
        num = value;
    }
    //* assigning index of task in array to the dom element *//
    tid = myTasks.indexOf(num);

    if (num[5] === 'true') {
        //* container for task *//
        const taskDisplay = document.createElement('task' + tid);
        taskDisplay.classList.add('task');
        taskDisplay.classList.add('taskCon');
        taskCont.appendChild(taskDisplay);

            const taskD1 = document.createElement('input');
            taskD1.type = 'checkbox';
            taskD1.id = tid;
            taskD1.classList.add('cb' + tid);
            taskD1.addEventListener('click', () => {
                strikeTask(taskD1.id);
            })
            taskDisplay.appendChild(taskD1);

            const taskD2 = document.createElement('ptitle');
            taskD2.textContent = num[0];
            taskDisplay.appendChild(taskD2);

            const taskD3 = document.createElement('description');
            taskD3.textContent = num[1];
            taskDisplay.appendChild(taskD3);

            const taskD4 = document.createElement('dueDate');
            taskD4.textContent = num[2];
            taskDisplay.appendChild(taskD4);

            const taskD5 = document.createElement('project');
            taskD5.textContent = num[4];
            taskDisplay.appendChild(taskD5);

            const taskD6 = document.createElement('settings');
            taskDisplay.appendChild(taskD6);
                const editP = new Image();
                editP.src = setIcon;
                editP.id = tid;
                editP.addEventListener('click', () => {
                    editTask(editP.id);
                });
                taskD6.appendChild(editP);
                const delP = new Image();
                delP.src = delIcon;
                delP.id = tid;
                delP.addEventListener('click', () => {
                    delTask(delP.id);
                });
                taskD6.appendChild(delP);


            //* color of border left changes based on priority *//
            if (num[3] === 'Urgent') {
                taskDisplay.style.borderLeft = '8px solid red';
            }
            else if (num[3] === 'High') {
                taskDisplay.style.borderLeft = '8px solid orange';
            }
            else if (num[3] === 'Normal') {
                taskDisplay.style.borderLeft = '8px solid yellow';
            }
            else if (num[3] === 'Low') {
                taskDisplay.style.borderLeft = '8px solid green';
            }
        }

        else if (num[5] === 'false') {
            return;
        }
}


export function displayTasks(pid) {
    let pin = pid.toString();
    let projTask = [];

    if (pin !== 'projAll') {
        for (let i = 0; i < myTasks.length; i++) {
            if (myTasks[i][4] === pin) {
                projTask.push(myTasks[i]);
                num = myTasks[i];
                newdisplayTask(num);
            }
        }
    }

    else {
        for (let i = 0; i < myTasks.length; i++) {
            projTask.push(myTasks[i]);
            num = myTasks[i];
            newdisplayTask(num);
        }  
    }
}


//* create new divs for new projects *//
    const projectCont = document.querySelector('.project-list');
export function displayProjects() {
    let pid = myProjects.slice(-1);
    const newProject = document.createElement('button');
    newProject.id = pid;
    newProject.textContent = pid;
    newProject.addEventListener('click', () => {
        clearDisplay('undefined');
        displayTasks(pid);
    });
    
    projectCont.appendChild(newProject);
}


//* default project displays *//
export function displayDprojects() {
    const allProjects = document.createElement('button');
    allProjects.id = 'projAll';
    allProjects.textContent = 'All';
    allProjects.addEventListener('click', () => {
        clearDisplay('undefined');
        let pid = allProjects.id;
        displayTasks(pid);
    });
    projectCont.appendChild(allProjects);

            const daicon = new Image();
            daicon.src = daIcon;
            daicon.classList.add('daicon');
            daicon.classList.add('resize');
            allProjects.appendChild(daicon);

    const defaultP = document.createElement('button');
    defaultP.id = 'default';
    defaultP.textContent = 'default';
    defaultP.addEventListener('click', () => {
        clearDisplay('undefined');
        let pid = defaultP.id;
        displayTasks(pid);
    });
    projectCont.appendChild(defaultP);

    //* showing projects from local storage by default *//
    if (myProjects.length > 1) {
        for (let i = 1; i < myProjects.length; i++) {
            let pid = myProjects[i];
            displayProjects(pid);
        }
    }
}


export function createPselect(value){
    var projectName;
    const projectList = document.querySelector('#project');
    const projectList2 = document.querySelector('#eproject');

    if (value === 'new') {
        projectName = myProjects.slice(-1);
    }

    else {
        projectName = myProjects[value];
    }

    const projectStr = document.createElement('option');
    projectStr.value = projectName;
    projectStr.textContent = projectName;
    projectList.appendChild(projectStr);

            const projectStr2 = document.createElement('option');
            projectStr2.value = projectName;
            projectStr2.textContent = projectName;
            projectList2.appendChild(projectStr2);
}


export function clearDisplay(value) {
    if (value == 'undefined') {
        let elements = document.getElementsByClassName('task');
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
    }

    else if (value == 'daicon') {
        let elements = document.getElementsByClassName('daicon');
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
    }

    else {
        let elements = document.getElementsByTagName('task' + value)
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
    }
}

projectCont.addEventListener('click', function(event) {
    let bID = document.querySelector('#' + event.target.id);
    clearDisplay('daicon');
    const daicon = new Image();
    daicon.src = daIcon;
    daicon.classList.add('daicon');
    daicon.classList.add('resize');
    bID.appendChild(daicon); 
});

