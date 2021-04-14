////////////////////////////////////////////////////////
//	UTILITY
////////////////////////////////////////////////////////

const User = require("./User.js");
const LowDB = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync'); 

////////////////////////////////////////////////////////
//	CLASS UserService
////////////////////////////////////////////////////////

class UserService{
	constructor(data){ 
		this.idCpt = 0; 
		
		this.db = {};
	}

	////////////////////////////////////////////////////////
	//	Method create
	////////////////////////////////////////////////////////

	static async create(){ //since I cannot return a promise in a constructor
		const service = new UserService();
		const adapter = new FileAsync("./model/dbUser.json");
		service.db = await LowDB(adapter);
		console.log(service.db.get('user').find({id:1}).value());
		return service;
	}

	////////////////////////////////////////////////////////
	//	Method addUser
	////////////////////////////////////////////////////////	

	addUser(userid, password){
		const id = this.idCpt;
  		let newTask;
  		if(undefined !== (newTask = new User({id:id,userid:userid,password:password}))){
  			console.log("just created a user"+newUser);
			this.db.get('user').push(newUser).write();
			this.idCpt++;
		}else{
			throw Error("cannot create User");
		}
	}

	////////////////////////////////////////////////////////
	//	Method removeUser
	////////////////////////////////////////////////////////	

	removeUser(id){
		this.db.get('Users').remove(e=> e.id == id).write();
	}

	////////////////////////////////////////////////////////
	//	Method getTask
	////////////////////////////////////////////////////////

	getUsers(){
		return this.db.get('Users').value();
	}

}

module.exports = UserService;
