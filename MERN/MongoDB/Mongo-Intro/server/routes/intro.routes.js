const introControl = require("../controllers/intro.controller");

module.exports = app => {
    app.get("/api/test/control", introControl.testResponse)
    app.get("/api/user/all", introControl.findAllUsers)
} 