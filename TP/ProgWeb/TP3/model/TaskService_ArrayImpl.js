////////////////////////////////////////////////////////
//	UTILITY
////////////////////////////////////////////////////////

const Task = require("./Task.js");

////////////////////////////////////////////////////////
//	CLASS TaskService (Array)
////////////////////////////////////////////////////////

class TaskService {
	constructor(data) {
		this.array = new Array();
	}

	//since I cannot return a promise in a constructor
	static async create() {
		const service = new TaskService();
		return service;
	}

	addTask(title) {
		this.array.push(new Task({ title: title }));
	}

	removeTask(id) {
		this.array = this.array.filter(function (ele) {
			return ele.id != id;
		});
	}

	getTasks() {
		return this.array;
	}

}

module.exports = TaskService;
