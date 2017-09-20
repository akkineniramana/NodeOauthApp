const express = require('express')
require("./services/passportService")


var app = new express();

require('./routes/authRoutes')(app);
/* 
app.get("/", (req, res) => {
    res.send("hello node js");
})
 */




app.listen(5000, () => {
    console.log("server started on port 5000");
})