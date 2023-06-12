import Todo from "./modules/todo.js";
import Project from "./modules/project.js";
const title1 = "Sample Title";
const description1 = "Sample description";
const dueDate1 = "Need a date example here";
const priority1 = "normal";

const title2 = "Another Sample";
const description2 = "Another sample description";
const dueDate2 = "Need a date example here";
const priority2 = "normal";

const sample1 = Todo.newTask(title1, description1, dueDate1, priority1);
const sample2 = Todo.newTask(title2, description2, dueDate2, priority2);

const Project1 = Project.newProject("General");
