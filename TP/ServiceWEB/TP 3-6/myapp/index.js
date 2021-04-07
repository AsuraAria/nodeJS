
/// || INIT ||

var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const app = express();
const port = 3030

/// || Holders ||

// User

const User = require("./model/User.js");

// UserArray is an array of User

const UserArray = require("./model/UserArray.js");
const userArray = new UserArray();

// Define default values

const data = new Array();
data.push(new User({ name: "N°001", firstname: "NoName" }));
data.push(new User({ name: "N°002", firstname: "NoName" }));
data.push(new User({ name: "N°003", firstname: "NoName" }));

/// || VERBS ||

// USE

// for parsing application/json	
app.use(bodyParser.json())
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

//

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
app.use('/users', usersRouter);


//

// SET
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// GET

app.get('/', (req, res) => {
	res.render('pages/form', { list: data });
});

// POST
	/// open default page given
app.post('/', (req, res) => {
	data.push(new User(req.body));
	userArray.addUser(req.body);
	res.render('pages/form', { list: data });
})

// LISTEN

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})


// ERROR PROCESSING

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
  });

  // error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
  
	// render the error page
	res.status(err.status || 500);
	res.render('error');
  });