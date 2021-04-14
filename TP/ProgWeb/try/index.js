////////////////////////////////////////////////////////
//	Express
////////////////////////////////////////////////////////

const express = require('express');
const app = express()
const port = 3001

////////////////////////////////////////////////////////
//	LowDB
////////////////////////////////////////////////////////

const TaskService = require("./model/TaskService_LowDbImpl.js");

let taskServiceInstance;

////////////////////////////////////////////////////////
//	JSON
////////////////////////////////////////////////////////

const bodyParser = require('body-parser');
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true })) 

////////////////////////////////////////////////////////
//	VIEW ENGINE
////////////////////////////////////////////////////////

app.set('view engine', 'ejs');

////////////////////////////////////////////////////////
//	GET
////////////////////////////////////////////////////////

app.get('/', (req, res, next)=>{
	//nothing to do so next()
	next();
	//res.render('pages/index.ejs');
});

////////////////////////////////////////////////////////
//	POST
////////////////////////////////////////////////////////

app.post('/', (req,res,next)=>{
	try{
		console.log("call to addTask with "+req.body.title)
		taskServiceInstance.addTask(req.body.title);
	}catch(e){
		console.log("An error occured : "+ e);
	}
	next();
})

app.post('/delete',(req,res,next)=>{
	try{
		taskServiceInstance.removeTask(parseInt(req.body.id));
	}catch(e){
		console.log("An error occured : "+ e);
	}
	res.redirect("/");
})

////////////////////////////////////////////////////////
//	USE
////////////////////////////////////////////////////////

app.use((req,res,next)=>{
	res.render('pages/form',{list:taskServiceInstance.getTasks()}); 
	next();
})

////////////////////////////////////////////////////////
//	RUN
////////////////////////////////////////////////////////

TaskService.create().then(ts=>{
	taskServiceInstance=ts;
	app.listen(port, () => {
  		console.log(`Example app listening at http://localhost:${port}`)
	});
});