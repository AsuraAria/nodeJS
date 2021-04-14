const Person = require("./Person.js");

class PersonService{
	constructor(data){  
		this.array = new Array();
	}

	addPerson(data){
		this.array.push(new Person({name:data.name,firstname:data.firstname}));
	}

	getPersons(){
		return this.array;
	}

}

module.exports = PersonService;
