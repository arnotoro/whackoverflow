var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

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
