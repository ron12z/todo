// Only for manipulating DOM

import Logic from "./logicController.js";

// Helper Functions
const todoModalInit = () => {
	const originList = Logic.getProjectList();

	document.querySelector("#todoDue").valueAsDate = new Date();

	originList.forEach((project) => {
		const projectName = project.getProjectName();
		_projectPicker.innerHTML += `
        <option value="${projectName}">${projectName}</option>
        `;
	});
};

const projectModalInit = () => {
	document.querySelector("#projectDue").valueAsDate = new Date();
};

const renderAllTasks = () => {
	const _tasklist = Logic.getAllTasks();
	// Render here
};

const resetProjectPicker = () => {
	_projectPicker.innerHTML = "";
};

// Variables
// Tasks creation
const addTaskBtn = document.querySelector("#AddTaskBtn");
const todoSubmitBtn = document.querySelector("#newTodo");
const todoCloseBtn = document.querySelector("#todoCloseBtn");
const todoCancelBtn = document.querySelector("#todoCancelBtn");
const todoDialog = document.querySelector("#todoDialog");
const todoForm = document.querySelector("#todoForm");
const _projectPicker = document.querySelector("#todoProject");

// Project creation
const addProjectBtn = document.querySelector("#AddProjectBtn");
const projectSubmitBtn = document.querySelector("#projectSubmitBtn");
const projectCloseBtn = document.querySelector("#projectCloseBtn");
const projectCancelBtn = document.querySelector("#projectCancelBtn");
const projectDialog = document.querySelector("#projectDialog");
const projectForm = document.querySelector("#projectForm");

// Event Listeners
// Task creation
addTaskBtn.addEventListener("click", (e) => {
	todoDialog.showModal();
	todoModalInit();
});

todoSubmitBtn.addEventListener("click", (e) => {
	e.preventDefault();
	Logic.createTask(e);
	todoDialog.close();
	resetProjectPicker();
	todoForm.reset();
});

todoCloseBtn.addEventListener("click", (e) => {
	e.preventDefault();
	resetProjectPicker();
	todoDialog.close();
});

todoCancelBtn.addEventListener("click", (e) => {
	e.preventDefault();
	resetProjectPicker();
	todoForm.reset();
	todoDialog.close();
});

// Project Creation
addProjectBtn.addEventListener("click", (e) => {
	projectDialog.showModal();
	projectModalInit();
});

projectSubmitBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const name = projectName.value;
	Logic.createProject(name);
	projectForm.reset();
	projectDialog.close();
});

projectCloseBtn.addEventListener("click", (e) => {
	e.preventDefault();
	projectDialog.close();
});

projectCancelBtn.addEventListener("click", (e) => {
	e.preventDefault();
	projectDialog.close();
	projectForm.reset();
});
