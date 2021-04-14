////////////////////////////////////////////////////////
//	CLASS User
////////////////////////////////////////////////////////

class User {
    //id, userId, password in object "data"
    constructor(userId, password) {
        if (undefined != data.id) {
            this.id = data.id;
        }
        else {
            this.id = parseInt(Math.floor(Math.random() * Math.floor(100000)));
        }

        this.userId = userId;
        this.password = password;

    }
}


module.exports = User;
