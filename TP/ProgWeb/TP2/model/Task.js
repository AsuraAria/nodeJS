class Task{
  constructor(data){   //id,title,comment,tags
    if(undefined != data.id) {
      this.id = data.id;
    } else {
      this.id = parseInt(    Math.floor(Math.random() * Math.floor(100000))     );
    }
    if(undefined != data.title) {
      this.title = data.title;
    } else {
      this.title = "";
    }
    if(undefined != data.date) {
      this.date = data.date;
    } else {
      this.date = new Date();
    }
  }
}

module.exports = Task;
