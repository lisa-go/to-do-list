import { clearDisplay, newdisplayTask } from "./display.js";
import { myProjects, myTasks } from "./index.js";

export function delTask(value) {
    myTasks[value][5] = 'false';
    clearDisplay(value);
}

export function editTask(value) {
    
}