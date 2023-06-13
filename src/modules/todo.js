// This file is a factory that creates To-Do objects (Or "tasks" as I call it)

let idGenerator = 1;

const newTask = (title, description, dueDate, priority) => {
	// Private variables
	const _id = idGenerator;

	// Getters
	const getID = () => _id;
	const getTitle = () => title;
	const getDesc = () => description;
	const getDueDate = () => dueDate;
	const getPrio = () => priority;

	// Setters
	const setTitle = (newTitle) => (title = newTitle);
	const setDesc = (newDesc) => (description = newDesc);
	const setDueDate = (newDueDate) => (dueDate = newDueDate);
	const setPrio = (newPrio) => (priority = newPrio);

	// Log and ID increment
	console.log(`TODO: [${title}] created. ID: ${_id}`);
	idGenerator++;

	return {
		getID,
		getTitle,
		getDesc,
		getDueDate,
		getPrio,
		setTitle,
		setDesc,
		setDueDate,
		setPrio,
	};
};

export default { newTask };
