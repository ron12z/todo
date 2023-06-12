// This file is a factory that creates Project objects

let idGenerator = 0;

const newProject = (projectName) => {
	// Private variables
	let _tasklist = [];
	const _id = idGenerator;

	// Getters
	const getID = () => _id;
	const getTasklist = () => _tasklist;
	const getProjectName = () => projectName;

	// Setter
	const setProjectName = (newName) => (projectName = newName);

	// Methods
	const addItem = (TodoItem) => _tasklist.push(TodoItem);
	const removeItem = (TodoItem) => {
		_tasklist = _tasklist.filter((task) => task.getID() != TodoItem.getID());
	};

	// Log and ID increment
	console.log(`PROJECT: ${projectName} ID: ${_id} created.`);
	idGenerator++;

	return {
		getID,
		getTasklist,
		getProjectName,
		setProjectName,
		addItem,
		removeItem,
	};
};

export default { newProject };
