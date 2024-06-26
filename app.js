var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const userRouter = require('./src/user/userRoute');
const uploadFileRouter = require('./src/uploadFile/uploadRoutes');
const fileRouter = require('./src/fileHandeling/fileHandeling');
const mailRouter = require('./src/nodeMailer/mailRoute');
const eventRouter = require('./src/eventEmitter/eventEmitter');
const streamRouter = require('./src/stream/stream');
var cors = require("cors")
var bodyParser = require('body-parser')
var status = require("express-status-monitor")



var app = express();
app.use(cors())

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



// parse application/json


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }));

app.use(status())


////////////////////////////////////////
app.use('/user',userRouter);
app.use('/file',fileRouter);
app.use('/upload',uploadFileRouter);
app.use('/event',eventRouter);
app.use('/stream',streamRouter);
app.use('/mail',mailRouter);

////////////////////////////////////////

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


mongoose.set("strictQuery", false);
  mongoose
    .connect(
      `mongodb://localhost:27017/demodb?retryWrites=true&w=majority&appName=Cluster0`
        
    )
    .then(() => {
      console.log("Connected to MongoDB");
  
    })
    .catch((err) => console.log(err));

module.exports = app;
