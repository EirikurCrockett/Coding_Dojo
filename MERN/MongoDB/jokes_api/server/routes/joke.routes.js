const jokeControl = require("../controllers/joke.controller");

module.exports = app => {
    app.get("/api/joke/all", jokeControl.findAllJokes)
    app.get("/api/joke/:_id", jokeControl.findOneJokes)
    app.post("/api/joke/new", jokeControl.createJoke)
    app.patch("/api/joke/update/:_id", jokeControl.updateJoke)
    app.delete("/api/joke/delete/:_id", jokeControl.deleteJoke)
} 