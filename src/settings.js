import { clearDisplay, newdisplayTask } from "./display.js";
import { myTasks } from "./index.js";

export function delTask(value) {
    myTasks[value][5] = 'false';
    clearDisplay(value);
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
    })
}

function openeForm() {
    document.querySelector('#formBg3').style.display = "flex";
}

function ecloseForm() {
    document.querySelector('#formBg3').style.display = "none";
}

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
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
    }
}
}