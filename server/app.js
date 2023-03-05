var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
require('dotenv').config();


var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var snippetRouter = require('./routes/snippets');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/snippets', snippetRouter);

// connect to mongoDB
const mongoDB = 'mongodb://127.0.0.1:27017/codesnipper';
mongoose.connect(mongoDB, {});
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('MongoDB connected');
});

// cors
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve("..", "client", "build")));
    app.get("*", (req, res) => 
        res.sendFile(path.resolve("..", "client", "build", "index.html"))
    );
} else if (process.env.NODE_ENV === 'development') {
    var corsOpstions = {
        origin: 'http://localhost:3000',
        optionSuccessStatus: 200,
    }
    app.use(cors(corsOpstions));
}

module.exports = app;
