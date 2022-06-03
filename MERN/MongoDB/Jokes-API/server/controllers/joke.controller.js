const Joke = require("../models/joke.model");

module.exports.findAllJokes = (req,res) => {
    Joke.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "that didnt quite word", err}))
}

module.exports.findOneJokes = (req,res) => {
    Joke.findOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "that didnt quite word", err}))
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "that didnt quite word", err}))
}

module.exports.updateJoke = (req, res) => {
    Joke.updateOne({_id: req.params._id}, req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "that didnt quite word", err}))
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "that didnt quite word", err}))
}