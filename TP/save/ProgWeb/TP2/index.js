const express = require('express');
const bodyParser = require('body-parser');

const TaskService = require("./model/TaskService_LowDbImpl.js");

let taskServiceInstance;

const app = express()
const port = 3001

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true })) 

app.set('view engine', 'ejs');


app.get('/', (req, res, next)=>{
	//nothing to do so next()
	next();
	//res.render('pages/index.ejs');
});

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


app.use((req,res,next)=>{
	res.render('pages/form',{list:taskServiceInstance.getTasks()}); 
	next();
})


TaskService.create().then(ts=>{
	taskServiceInstance=ts;
	app.listen(port, () => {
  		console.log(`Example app listening at http://localhost:${port}`)
	});
});