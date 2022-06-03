const productControl = require("../controllers/product.controller");

module.exports = (app) => {
    app.get("/api/product/all", productControl.findAllProducts)
    app.post("/api/product/new", productControl.createProdcut)
    app.get("/api/product/:_id", productControl.findOneProduct)
    app.patch("/api/product/:_id/edit", productControl.editOneProduct)
    app.delete("/api/product/:_id/delete", productControl.deleteOneProduct)
} 