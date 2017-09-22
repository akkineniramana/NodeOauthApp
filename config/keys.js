if (process.env.NODE_ENV === "production") {
    //export prod keys
    module.exports = require('./prodKeys')
} else {
    module.exports = require("./devKeys");
}