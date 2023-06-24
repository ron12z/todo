// Controls the following:
// --creation of new Projects and Tasks (To-Do).
// --Updating Projects' and/or Tasks' contents(property).

import Project from "./project.js";
import Todo from "./todo.js";
import { format, differenceInCalendarDays, addDays } from "date-fns";

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
      const taskDate = new Date(task.getDueDate());
      const endOfWeek = addDays(new Date(), 7);
      const difference = differenceInCalendarDays(taskDate, endOfWeek);
      const withinWeek = difference >= -7 && difference <= 0;

      if (withinWeek) {
        _allTasks.push(task);
      }
    });
  });
  return _allTasks;
};

const getDayTasks = () => {
  const _allTasks = [];
  _ProjectList.forEach((Project) => {
    const _tasklist = Project.getTasklist();
    _tasklist.forEach((task) => {
      const taskDate = task.getDueDate();
      const fns = format(new Date(), "yyyy-MM-dd");
      if (taskDate == fns) {
        _allTasks.push(task);
      }
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
  newTask.project = Project;
  Project.addItem(newTask);
};

//Create Initial Project
createProject("General");

export default {
  getProjectList,
  getAllTasks,
  getWeekTasks,
  getDayTasks,
  createProject,
  deleteProject,
  createTask,
};
