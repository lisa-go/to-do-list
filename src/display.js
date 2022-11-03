import { myProjects, myTasks } from "./index.js";

    const taskCont = document.querySelector('#taskContainer');
export function newdisplayTask() {
    //* container for task *//
    const taskDisplay = document.createElement('task');
    taskDisplay.classList.add('task' + myTasks.length);
    taskDisplay.dataset.id = myTasks.slice(-1)[0][4];
    taskCont.appendChild(taskDisplay);

        const taskD5 = document.createElement('priority');
        taskD5.classList.add('task' + myTasks.length);
        taskD5.textContent = myTasks.slice(-1)[0][3];
        taskDisplay.appendChild(taskD5);

        const taskD1 = document.createElement('input');
        taskD1.type = 'checkbox';
        taskD1.classList.add('task' + myTasks.length);
        taskD1.classList.add('checkbox');
        taskDisplay.appendChild(taskD1);

        const taskD2 = document.createElement('ptitle');
        taskD2.classList.add('task' + myTasks.length);
        taskD2.textContent = myTasks.slice(-1)[0][0];
        taskDisplay.appendChild(taskD2);

        const taskD3 = document.createElement('description');
        taskD3.classList.add('task' + myTasks.length);
        taskD3.textContent = myTasks.slice(-1)[0][1];
        taskDisplay.appendChild(taskD3);

        const taskD4 = document.createElement('dueDate');
        taskD4.classList.add('task' + myTasks.length);
        taskD4.textContent = myTasks.slice(-1)[0][2];
        taskDisplay.appendChild(taskD4);

        const taskD6 = document.createElement('project');
        taskD6.classList.add('task' + myTasks.length);
        taskD6.textContent = myTasks.slice(-1)[0][4];
        taskDisplay.appendChild(taskD6);

        const taskD7 = document.createElement('settings');
        taskD7.classList.add('task' + myTasks.length);
        taskD7.textContent = 'temp settings';
        taskDisplay.appendChild(taskD7);
}

export function displayTasks() {
    
    console.log ('hi');
    
}


//* create new divs for new projects *//
    const projectCont = document.querySelector('.project-list');
export function displayProjects() {
    const newProject = document.createElement('button');
    newProject.id = myProjects.slice(-1);
    newProject.textContent = myProjects.slice(-1);
    newProject.onclick = displayTasks;
    projectCont.appendChild(newProject);
}


//* default project displays *//
export function displayDprojects() {
    const allProjects = document.createElement('button');
    allProjects.id = 'projAll';
    allProjects.textContent = 'All';
    allProjects.onclick = displayTasks; //*change later to display all projects *//
    projectCont.appendChild(allProjects);

    const defaultP = document.createElement('button');
    defaultP.id = 'default';
    defaultP.textContent = myProjects.slice(0);
    defaultP.onclick = displayTasks;
    projectCont.appendChild(defaultP)
}