const User = require("../models/intro.model");

module.exports.testResponse = (req,res) =>{
    res.json({
        message: "res from controller"
    })  
}

module.exports.findAllUsers = (req,res) => {
    User.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "that didnt quite word", err}))
}