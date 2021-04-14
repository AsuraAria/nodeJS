////////////////////////////////////////////////////////
//	CLASS User
////////////////////////////////////////////////////////

class Task {
  //id, title, date in object "data"
  constructor(data) {

    // si id est renseigné
    if (undefined != data.id) {
      this.id = data.id;
    }
    else {
      this.id = parseInt(Math.floor(Math.random() * Math.floor(100000)));
    }
    // si title est renseigné    
    if (undefined != data.title) {
      this.title = data.title;
    }
    else {
      this.title = "";
    }
    // si date est renseigné    
    if (undefined != data.date) {
      this.date = data.date;
    }
    else {
      this.date = new Date();
    }
  }
}

module.exports = Task;
