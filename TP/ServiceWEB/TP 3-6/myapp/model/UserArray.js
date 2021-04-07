const User = require("./User.js");

class UserArray {
	constructor(data) {
		this.array = new Array();
	}

	addUser(data) {
		this.array.push(new User({ name: data.name, firstname: data.firstname }));
	}

	getUsers() {
		return this.array;
	}

}

module.exports = UserArray;
