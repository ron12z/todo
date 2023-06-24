// Only for manipulating DOM

import Logic from "./logicController.js";

// Helper Functions
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function clearTaskList() {
  const tasksUL = document.querySelector(".tasksUL");
  removeAllChildNodes(tasksUL);
}

function clearProjectList() {
  const projectsUL = document.querySelector(".projectsUL");
  removeAllChildNodes(projectsUL);
}

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
  clearTaskList();
  const tasksUL = document.querySelector(".tasksUL");
  const _tasklist = Logic.getAllTasks();

  _tasklist.forEach((task) => {
    const taskItem = document.createElement("li");
    const taskTitle = document.createElement("h4");
    const taskDesc = document.createElement("p");
    const taskDue = document.createElement("p");

    taskItem.setAttribute("data-id", task.getID());
    taskItem.classList.add("taskItem");
    taskTitle.classList.add("task-title");
    taskDesc.classList.add("task-description");
    taskDue.classList.add("task-due");

    taskTitle.textContent = task.getTitle();
    taskDesc.textContent = task.getDesc();
    taskDue.textContent = task.getDueDate();

    taskItem.append(taskTitle, taskDesc, taskDue);
    tasksUL.append(taskItem);

    console.log(task);
  });
};

const renderProjects = () => {
  clearProjectList();
  const _projectList = Logic.getProjectList();
  const projectsUL = document.querySelector(".projectsUL");

  _projectList.forEach((project) => {
    const newProject = document.createElement("li");
    const projectName = document.createElement("h3");

    newProject.classList.add("project-item");
    newProject.setAttribute("data-id", project.getID());
    projectName.classList.add("project-name");

    projectName.textContent = project.getProjectName();

    newProject.append(projectName);
    projectsUL.append(newProject);
  });
};

const resetProjectPicker = () => {
  removeAllChildNodes(_projectPicker);
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
const generalBtn = document.querySelector("#generalBtn");
const todayBtn = document.querySelector("#todayBtn");
const weekBtn = document.querySelector("#weekBtn");

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
  renderAllTasks();
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
  renderProjects();
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

generalBtn.addEventListener("click", (e) => {
  renderAllTasks();
});

todayBtn.addEventListener("click", (e) => {
  // show today
});

weekBtn.addEventListener("click", (e) => {
  // show week
});
