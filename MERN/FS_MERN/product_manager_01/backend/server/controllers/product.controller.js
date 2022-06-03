const Product = require('../models/product.models');

module.exports.createProdcut = (req,res) => {
    Product.create(req.body)
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message: "that didnt quite word", err}))
}
module.exports.findAllProducts = (req,res) => {
    Product.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "that didnt quite word", err}))
}