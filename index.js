const express = require('express')
const mongoose = require('mongoose');
const keys = require('./config/keys');
require("./models/User");
require("./services/passportService");
const cookieSession = require('cookie-session');
const passport = require('passport')
mongoose.connect(keys.mongodbURI);
const app = new express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookeKey]
    })
)

app.use(passport.initialize())
app.use(passport.session());

require('./routes/authRoutes')(app);
/* 
app.get("/", (req, res) => {
    res.send("hello node js");
})
 */


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})