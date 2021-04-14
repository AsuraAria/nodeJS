////////////////////////////////////////////////////////
//	UTILITY
////////////////////////////////////////////////////////

const Task = require("./Task.js");
const LowDB = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');

////////////////////////////////////////////////////////
//	CLASS TaskService (DB)
////////////////////////////////////////////////////////

class TaskService {
	constructor(data) {
		this.idCpt = 0;

		this.db = {};
	}

	////////////////////////////////////////////////////////
	//	Method create
	////////////////////////////////////////////////////////

	static async create() { //since I cannot return a promise in a constructor
		const service = new TaskService();
		const adapter = new FileAsync("./model/db.json");
		service.db = await LowDB(adapter);
		console.log(service.db.get('tasks').find({ id: 1 }).value());
		return service;
	}

	////////////////////////////////////////////////////////
	//	Method addTask
	////////////////////////////////////////////////////////	

	addTask(title) {
		const id = this.idCpt;
		const now = new Date();
		let newTask;
		if (undefined !== (newTask = new Task({ id: id, date: now, title: title }))) {
			console.log("just created a task" + newTask);
			this.db.get('tasks').push(newTask).write();
			this.idCpt++;
		} else {
			throw Error("cannot create Task");
		}
	}

	////////////////////////////////////////////////////////
	//	Method removeTask
	////////////////////////////////////////////////////////	

	removeTask(id) {
		this.db.get('tasks').remove(e => e.id == id).write();
	}

	////////////////////////////////////////////////////////
	//	Method getTask
	////////////////////////////////////////////////////////

	getTasks() {
		return this.db.get('tasks').value();
	}

}

module.exports = TaskService;
