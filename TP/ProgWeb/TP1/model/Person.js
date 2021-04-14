class Person{
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
    if(undefined != data.name) {
      this.name = data.name;
    } else {
      this.name = "";
    }
    if(undefined != data.firstname) {
      this.firstname = data.firstname;
    } else {
      this.firstname = "";
    }
    if(undefined != data.email) {
      this.email = data.email;
    } else {
      this.email = "";
    }
  }
}

module.exports = Person;
