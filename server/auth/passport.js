const passport = require('passport');
const jwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/Users');




module.exports = (passport) => {
    let opts = {
        jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET
    };

    passport.use(new jwtStrategy(opts, (jwt_payload, done) => {

        console.log(jwt_payload);
        
        User.findOne({email: jwt_payload.email})
        .then((user) => {
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        })
        .catch((err) => {
            return done(err, false);
        });
    }));
};