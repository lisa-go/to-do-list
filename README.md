<h1 align="center"> to-do-list 📝</h1>  

#### Click [here](https://lisa-go.github.io/to-do-list/) for live preview.
<br>

# Made with

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
<br>

# Description

#### A simple to-do list with local storage. 
<br>

# Features
- Local Storage. Your projects and tasks are saved even after exiting your browser.
- Add new projects and tasks, you can set the urgency of the task and the color of the border reflects that.
- Clicking on the project name on the sidebar filters all the tasks, showing only the tasks belonging to that project.
- Tick off tasks to complete it, it crosses off the task on the display.
- You can edit or remove the task if you click on the gear or delete button on the right side of each task.
- There is a display-only view of each task if you click on the fullscreen icon on the right.
- The clear all button on the bottom of the sidebar clears all local storage memory.
<br>

# Previews

### Home Page
<img src="https://i.imgur.com/odCkqR5.png" alt="homepage" width="700" />

### Create New Project Modal
<img src="https://i.imgur.com/Ujd6mFD.png" alt="create project modal" width="700" />

### Create New Task Modal
<img src="https://i.imgur.com/qDgMRlZ.png" alt="create task modal" width="700" />

### Filter default tasks
<img src="https://i.imgur.com/Yy77avw.png" alt="filter tasks" width="700" />

### Task display-only mode
<img src="https://i.imgur.com/jaRlBIR.png" alt="task display" width="700" />
<br>

# Things I learned from this Project
* Introduced me to webpacks.
* First time using SASS and variables.
* First time using local storage.
```js 
localStorage["myTasks"] = JSON.stringify(myTasks);

//* get local storage *//
if (localStorage["myTasks"] != undefined) {
    var stored_tasks = JSON.parse(localStorage["myTasks"]);
    myTasks = stored_tasks;
}
```
* Deepened understanding of classes
```js
class Project {
    constructor(pname) {
        this.pname = pname;
    }
        addToProjectlist() {
            myProjects.push(this.pname);
            return this;
        }
}
```
* How modals work
```js
//* function to open form *//
function openForm() {
    document.querySelector('#formBg').style.display = "flex";
}
```
* DOM manipulation
```js
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
```
* More understanding of how to reuse functions for different purposes.
```js
export function newdisplayTask(value) {
    if (value === 'new') {
        num = myTasks.slice(-1)[0];
    }

    else {
        num = value;
    }
```