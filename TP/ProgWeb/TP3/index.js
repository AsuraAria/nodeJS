////////////////////////////////////////////////////////
//	Express
////////////////////////////////////////////////////////

const express = require('express');
const app = express()
const port = process.env.PORT || 3001
const host = process.env.HOST || 'localhost'

////////////////////////////////////////////////////////
//	Serivce (Array by default)
////////////////////////////////////////////////////////

//"echo \"Running app with db\" && set TS_IMPL=./model/TaskService_LowDbImpl.js&& node index.js" ne pas mettre d'espace entre
// "TS_IMPL=./model/TaskService_LowDbImpl.js" et "&&" sinon l'espace est inclu dans la variable
const TaskService = require(process.env.TS_IMPL);

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

app.get('/', (req, res, next) => {
	//nothing to do so next()
	next();
	//res.render('pages/index.ejs');
});

////////////////////////////////////////////////////////
//	POST
////////////////////////////////////////////////////////

app.post('/', (req, res, next) => {
	try {
		console.log("call to addTask with " + req.body.title)
		taskServiceInstance.addTask(req.body.title);
	} catch (e) {
		console.log("An error occured : " + e);
	}
	next();
})

app.post('/delete', (req, res, next) => {
	try {
		taskServiceInstance.removeTask(parseInt(req.body.id));
	} catch (e) {
		console.log("An error occured : " + e);
	}
	res.redirect("/");
})

////////////////////////////////////////////////////////
//	USE
////////////////////////////////////////////////////////

app.use((req, res, next) => {
	res.render('pages/form', { list: taskServiceInstance.getTasks() });
	next();
})

////////////////////////////////////////////////////////
//	RUN
////////////////////////////////////////////////////////

TaskService.create().then(ts=>{
    taskServiceInstance=ts;
    app.listen(port, host, () =>
	{
		console.log('\nApp is running');
        console.log('The value of port is :', port);
        console.log('The value of host is :', host, '\n');
		console.log('Type of service :', process.env.TS_IMPL)
    });
});