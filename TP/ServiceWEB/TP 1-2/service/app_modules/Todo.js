class Todo
{
  // id, title, comment, tags
  constructor(data)
  {
    if (undefined != data.id) { this.id = data.id; }
    // If no id generate random id
    else { this.id = parseInt(Math.floor(Math.random() * Math.floor(100000))); }

    if (undefined != data.title) { this.title = data.title; }
    // If no title generate empty string
    else { this.title = ""; }

    if (undefined != data.comment) { this.comment = data.comment; }
  // If no comment generate empty string
    else { this.comment = ""; }

    if (undefined != data.tags) { this.tags = data.tags; }
    // If no tag generate empty tag
    else { this.tags = []; }
  }
}

module.exports = Todo;
