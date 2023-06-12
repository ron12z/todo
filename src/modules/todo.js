let idGenerator = 0;

const newTask = (title, description, dueDate, priority) => {
	// Getters
	const id = idGenerator;
	const getID = () => id;
	const getTitle = () => title;
	const getDesc = () => description;
	const getDueDate = () => dueDate;
	const getPrio = () => priority;

	// Setters
	const setTitle = (newTitle) => (title = newTitle);
	const setDesc = (newDesc) => (description = newDesc);
	const setDueDate = (newDueDate) => (dueDate = newDueDate);
	const setPrio = (newPrio) => (priority = newPrio);

	// increment idGen so there are no similar ID in the whole universe
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
