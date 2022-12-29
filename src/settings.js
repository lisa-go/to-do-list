import { clearDisplay, newdisplayTask } from "./display.js";
import { myTasks } from "./index.js";
import closeIcon from "./images/cancel.svg";

export function delTask(value) {
    myTasks[value][5] = 'false';
    clearDisplay(value);
    localStorage["myTasks"] = JSON.stringify(myTasks);
}

export function editTask(value) {
    let task = myTasks[value];

    openeForm();

    document.querySelector("#etitle").value = task[0];
    document.querySelector("#edescription").value = task[1];
    document.querySelector("#edueDate").value = task[2];
    document.querySelector("#epriority").value = task[3];
    document.querySelector("#eproject").value = task[4];

    document.querySelector('#ecloseForm').addEventListener('click', () => {
        ecloseForm();
    })

    document.querySelector('#eformBtn').addEventListener('click', () => {
        task[0] = document.querySelector("#etitle").value;
        task[1] = document.querySelector("#edescription").value;
        task[2] = document.querySelector("#edueDate").value;
        task[3] = document.querySelector("#epriority").value;
        task[4] = document.querySelector("#eproject").value;
        ecloseForm();
        clearDisplay(value);
        newdisplayTask(task);
        localStorage["myTasks"] = JSON.stringify(myTasks);
    })
}

function openeForm() {
    document.querySelector('#formBg3').style.display = "flex";
}

function ecloseForm() {
    document.querySelector('#formBg3').style.display = "none";
    document.querySelector('#formBg4').style.display = "none";
}

//* function for striking through a checked checkbox input task *//
export function strikeTask(value) {
    let task = document.querySelector('task' + value);
    let taskDivs = task.childNodes;
    let checkbox = document.querySelector('.cb' + value);
    let str = document.createElement('str' + value);
    str.classList.add('hidden');

    if (checkbox.checked) {
        task.appendChild(str);
        for (let i = 0; i < taskDivs.length; i++) {
            taskDivs[i].style.fontStyle = 'italic';
        }
        task.style.backgroundColor = '#eeeeee';
    }
    else {
        for (let i = 0; i < taskDivs.length; i++) {
            taskDivs[i].style.fontStyle = 'normal';
        }
        task.style.backgroundColor = 'white';

        let elements = document.getElementsByTagName('str' + value)
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
    }
}

function openView() {
    document.querySelector('#formBg4').style.display = "flex";
}

export function viewFull(value) {
    openView();
    let task = myTasks[value];

    //* priority bar *//
    const viewPrio = document.querySelector('.viewPriority');
    if (task[3] === 'Urgent') {
        viewPrio.style.backgroundColor = 'red';
    }
    else if (task[3] === 'High') {
        viewPrio.style.backgroundColor = 'orange';
    }
    else if (task[3] === 'Normal') {
        viewPrio.style.backgroundColor = 'yellow';
    }
    else if (task[3] === 'Low') {
        viewPrio.style.backgroundColor = 'green';
    }

    //* task name *//
    const viewTitle = document.querySelector('.viewTitle');
    viewTitle.textContent = task[0];

    //* project name *//
    const viewProject = document.querySelector('.viewProject');
    viewProject.textContent = '— ' + task[4];

    //* task description *//
    const viewDescription = document.querySelector('.viewDescription');
    viewDescription.textContent = task[1];

    //* due date *//
    const viewDuedate = document.querySelector('.viewDuedate');
    viewDuedate.textContent = task[2];
}

const closeBtn = new Image();
closeBtn.src = closeIcon;
closeBtn.addEventListener('click', () => {
    ecloseForm();
});
document.querySelector(".viewClose").appendChild(closeBtn);