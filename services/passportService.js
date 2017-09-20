const passport = require('passport');
const keys = require("./../config/keys")
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: keys.googleCliendID,
    clientSecret: keys.googleSecretKey,
    callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
    console.log("access token : " + accessToken);
    console.log("Refresh Token : " + refreshToken);
    console.log("Profile: " + profile);
}))