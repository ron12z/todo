// This file is a factory that creates Project objects

let _idGenerator = 1;

const newProject = (projectName) => {
	// Private variables
	let _tasklist = [];
	const _id = _idGenerator;

	// Getters
	const getID = () => _id;
	const getTasklist = () => _tasklist;
	const getProjectName = () => projectName;

	// Setter
	const setProjectName = (newName) => {
		console.log(`PROJECT: [${projectName}] changed to [${newName}]`);
		projectName = newName;
	};

	// Methods
	const addItem = (TodoItem) => {
		_tasklist.push(TodoItem);
		console.log(`${projectName.toUpperCase()}: Added [${TodoItem.getTitle()}]`);
	};

	const removeItem = (TodoItem) => {
		_tasklist = _tasklist.filter((task) => task.getID() != TodoItem.getID());
		console.log(
			`${projectName.toUpperCase()}: removed [${TodoItem.getTitle()}].`
		);
	};

	// Log and ID increment
	console.log(`PROJECT: [${projectName}] created. ID: ${_id}`);
	_idGenerator++;

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
