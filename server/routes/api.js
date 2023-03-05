const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');


// Load User model
const User = require('../models/Users');
const Snippet = require('../models/Snippets');
require('../auth/passport')(passport);

// @route   GET api/users/test
router.get('/users/test', passport.authenticate('jwt', {session: false}), (req, res) => {
    console.log(req.user);
    res.json({msg: 'Users endpoint OK!'});
});

// @route   POST api/users/register
router.post('/users/register', async (req, res) => {
    // frontend validates the data so we don't have to do it here

    const { firstName, lastName, username, email, password } = req.body;

    // check if user exists
    await User.findOne({email: email})
    .then((user) => {
        // if a user is already found we notify the frontend
        if (user) {
            res.status(403).json({success: false, text:'User already exists.'});
        }
        // if no user is found we create a new user
        else {
            // first hash the password
            bcrypt.genSalt(10, (err, salt) => {
                // error check
                if (err) {
                    console.log(err);
                    return next(err);
                }

                bcrypt.hash(password, salt, (err, hash) => {
                    // error check
                    if (err) {
                        console.log(err);
                        return next(err);
                    }
                    // create a new user
                    else {
                        const newUser = new User({
                            firstName: firstName,
                            lastName: lastName,
                            userName: username,
                            email: email,
                            password: hash
                        });
                        
                        // save the user to the database
                        newUser.save()
                        .then((user) => {
                            res.status(200).json({success: true, json: user, text:'User created successfully.'});
                        })
                        .catch((err) => {
                            console.log(err);
                            res.status(500).json({success: false, text:'Something went wrong. Please try again later.'});
                        });
                    }
                });
            });
        }
    }).catch((err) => {
        // if there is an error we notify the frontend
        if (err) {
            console.log(err);
            res.status(500).json({success: false, text:'Something went wrong. Please try again later.'});
        }
    });
});
                                
// @route   POST api/users/login
router.post('/users/login', async (req, res) => {
    // frontend validates the data so we don't have to do it here

    const { email, password } = req.body;

    // check if user exists
    await User.findOne({email: email})
    .then((user) => {
        // if a user is not found we notify the frontend
        if (!user) {
            res.status(403).json({success: false, text:'User does not exist.'});
        }
        // if a user is found we check the password
        else {
            bcrypt.compare(password, user.password, (err, isMatch) => {
                // error check
                if (err) {
                    console.log(err);
                    return next(err);
                }
                // if the password is correct we create a jwt auth token
                else if (isMatch) {
                    const payload = jwt.sign({email: user.email}, process.env.JWT_SECRET, {expiresIn: 3600});
                    res.status(200).json({success: true, token: payload, userName: user.userName, userID: user._id});
                }
                // if the password is incorrect we notify the frontend
                else {
                    res.status(403).json({success: false, text:'Incorrect password.'});
                }
            });
        }
    })
    .catch((err) => {
        // if there is an error we notify the frontend
        if (err) {
            console.log(err);
            res.status(500).json({success: false, text:'Something went wrong. Please try again later.'});
        }
    });
});

// @route   GET api/snippets
router.get('/snippets', async (req, res) => {
    await Snippet.find()
    .then((snippets) => {
        res.status(200).json({success: true, json: snippets});
    })
    .catch((err) => {
        if (err) {
            console.log(err);
            res.status(500).json({success: false, text:'Something went wrong. Please try again later.'});
        }
    });
});

// @route   POST api/snippets
router.post('/snippets', passport.authenticate('jwt', {session: false}), async (req, res) => {
    // frontend validates the data so we don't have to do it here
    const { title, code, userID } = req.body;

    // save snippet to the database
    const newSnippet = new Snippet({
        title: title,
        code: code,
        userID: userID,
        timeStamp: Date.now()
    });

    await newSnippet.save()
    .then((snippet) => {
        res.status(200).json({success: true, json: snippet, text:'Snippet created successfully.'});
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({success: false, text:'Something went wrong. Please try again later.'});
    });
});


module.exports = router;