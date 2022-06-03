const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/product_manager_db",{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
    .then(()=>console.log("Mongoose connected to mongoDB"))
    .catch(err => console.log( `Mongoose NOT connected to mongoDB \nError: ${err}`))