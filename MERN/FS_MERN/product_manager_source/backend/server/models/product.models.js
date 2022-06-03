const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is Required"],
        minlength: [5, "Title must be at least 5 characters"]
    },
    price: {
        type: Number,
        required: [true, "Price is Required"],
        min: [0.01, "Price must be at least $0.01"]
    },
    description: {
        type: String,
        required: [true, "Description is Required"],
        minlength: [10, "Description must be at least 10 characters"]
    }
})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;