import { clearDisplay, newdisplayTask } from "./display.js";
import { myProjects, myTasks } from "./index.js";
import { openForm, closeForm } from "./index.js";

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
    document.querySelector("#project").value = task[4];
    
    document.querySelector('#ecloseForm').addEventListener('click', () => {
        ecloseForm();
    })

    document.querySelector('#eformBtn').addEventListener('click', () => {
        task[0] = document.querySelector("#etitle").value;
        task[1] = document.querySelector("#edescription").value;
        task[2] = document.querySelector("#edueDate").value;
        task[3] = document.querySelector("#epriority").value;
        task[4] = document.querySelector("#eproject").value;
            //* fix this project doesnt change *//
        ecloseForm();
        clearDisplay(value);
        newdisplayTask(task);
        console.log (task);
    })
}

function openeForm() {
    document.querySelector('#formBg3').style.display = "flex";
}

function ecloseForm() {
    document.querySelector('#formBg3').style.display = "none";
}