const express = require('express');
const bodyParser = require('body-parser');
//const Person = require("./model/Person.js");

const PersonService = require("./model/PersonService_ArrayImpl.js");

const personService = new PersonService();

const app = express()
const port = 3000

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


// set the view engine to ejs
app.set('view engine', 'ejs');

//const data = new Array();
//data.push(new Person({name:"BARREAUD",firstname:"Vincent"}));
//data.push(new Person({name:"NEWTON",firstname:"Curtis"}));
//data.push(new Person({name:"CURTIS",firstname:"Tony"}));



app.get('/', (req, res)=>{
	let tempList = personService.getPersons();

	res.render('pages/form',{list:tempList});
    //res.render('pages/form',{list:data});
});

app.post('/', (req,res)=>{
	//console.log(req.body);
 	//data.push(new Person(req.body));
	//res.render('pages/form',{list:data});
	personService.addPerson(req.body);

	res.render('pages/form',{list:personService.getPersons()});
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


