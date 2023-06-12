// This file is a factory that creates Project objects

let idGenerator = 0;

const newProject = (projectName) => {
	// Initial list of to-do's
	let tasklist = [];
	const id = idGenerator;
	idGenerator++; // increment idGen so there are no similar ID in the whole universe

	// Getters
	const getID = () => id;
	const getTasklist = () => tasklist;
	const getProjectName = () => projectName;

	// Setter
	const setProjectName = (newName) => (projectName = newName);

	// Methods
	const addItem = (TodoItem) => tasklist.push(TodoItem);
	const removeItem = (TodoItem) => {
		tasklist = tasklist.filter((task) => task.getID() != TodoItem.getID());
	};
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
