// Controls the following:
// --creation of new Projects and Tasks (To-Do).
// --Updating Projects' and/or Tasks' contents(property).

import Project from "./project.js";
import Todo from "./todo.js";

const _ProjectList = [];

// Getters
const getProjectList = () => _ProjectList;

// Methods
const createProject = (projectName) => {
	const newProject = Project.newProject(projectName);
	_ProjectList.push(newProject);
};

const deleteProject = (Project) => {
	_ProjectList = _ProjectList.filter(
		(project) => project.getID() != Project.getID()
	);
	console.log(`LOGIC: [${Project.getProjectName()}] removed from ProjectList`);
};

const createTask = (e) => {
	e.preventDefault();
	const title = todoTitle.value;
	const desc = todoDescription.value;
	const date = todoDue.value;
	const priority = todoPrio.value;
	const Project = _ProjectList.find(
		(project) => project.getProjectName() == todoProject.value
	);
	const newTask = Todo.newTask(title, desc, date, priority);
	Project.addItem(newTask);
};

//Create Initial Project
createProject("General");

export default { createProject, deleteProject, createTask, getProjectList };
