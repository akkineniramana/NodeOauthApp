const passport = require('passport');
const keys = require("./../config/keys")
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
var User = mongoose.model("users")

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user)
    })
})

passport.use(new GoogleStrategy({
    clientID: keys.googleCliendID,
    clientSecret: keys.googleSecretKey,
    callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
    console.log(accessToken);
    User.findOne({ googleID: profile.id })
        .then((existingUser) => {
            if (existingUser) {
                done(null, existingUser);
            } else {
                new User({ googleID: profile.id })
                    .save()
                    .then(user => done(null, user))

            }
        })
}))