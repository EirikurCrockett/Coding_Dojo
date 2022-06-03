const productControl = require("../controllers/product.controller");

module.exports = (app) => {
    app.get("/api/product/all", productControl.findAllProducts)
    app.post("/api/product/new", productControl.createProdcut)
    app.get("/api/product/:_id", productControl.findOneProduct)
} 