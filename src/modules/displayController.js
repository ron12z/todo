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

const renderAllTasks = () => {
	const _tasklist = Logic.getAllTasks();
	// Render here
};

const resetProjectPicker = () => {
	_projectPicker.innerHTML = "";
};

// Variables
const addTaskBtn = document.querySelector("#AddTaskBtn");
const todoSubmitBtn = document.querySelector("#newTodo");
const todoCloseBtn = document.querySelector("#todoCloseModal");
const todoCancelBtn = document.querySelector("#todoCancelModal");
const todoDialog = document.querySelector("#todoDialog");
const todoForm = document.querySelector("#todoForm");
const _projectPicker = document.querySelector("#todoProject");

// Event Listeners
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
