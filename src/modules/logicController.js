// Controls the following:
// --creation of new Projects and Tasks (To-Do).
// --Updating Projects' and/or Tasks' contents(property).

import Project from "./project.js";
import Todo from "./todo.js";

const _ProjectList = [];

// Getters
const getProjectList = () => _ProjectList;

const getAllTasks = () => {
  const _allTasks = [];
  _ProjectList.forEach((Project) => {
    const _tasklist = Project.getTasklist();
    _tasklist.forEach((task) => {
      _allTasks.push(task);
    });
  });
  return _allTasks;
};

const getWeekTasks = () => {
  const _allTasks = [];
  _ProjectList.forEach((Project) => {
    const _tasklist = Project.getTasklist();
    _tasklist.forEach((task) => {
      // Check if Date is within one week, then push _allTasks
    });
  });
  return _allTasks;
};

const getDayTasks = () => {
  const _allTasks = [];
  _ProjectList.forEach((Project) => {
    const _tasklist = Project.getTasklist();
    _tasklist.forEach((task) => {
      // Check if Date is today, then push to _allTasks
    });
  });
  return _allTasks;
};

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
createProject("Office");

export default {
  getProjectList,
  getAllTasks,
  getWeekTasks,
  getDayTasks,
  createProject,
  deleteProject,
  createTask,
};
