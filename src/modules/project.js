const newProject = (projectName) => {
	// Initial list of to-do's
	let tasklist = [];

	// Getters
	const getTasklist = () => tasklist;
	const getProjectName = () => projectName;

	// Setter
	const setProjectName = (newName) => (projectName = newName);

	// Methods
	const addItem = (Item) => tasklist.push(Item);
	const removeItem = (Item) => {
		tasklist = tasklist.filter((task) => task.getID() != Item.getID());
	};
	return { getTasklist, getProjectName, setProjectName, addItem, removeItem };
};

export default { newProject };
