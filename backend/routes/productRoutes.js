
const router = require('express').Router();
const productControllers = require("../controller/productControllers");
const {tokenMiddleware,checkAdmin} =require('../middleware/tokenMiddleware')

router.post('/addproduct', tokenMiddleware,checkAdmin, productControllers.addProduct)
router.get("/", productControllers.getProducts);
router.get("/:id", productControllers.getProductById);
router.delete("/deleteproduct/:id" , tokenMiddleware ,checkAdmin , productControllers.deleteProduct);
router.put("/updateproduct/:id", tokenMiddleware, checkAdmin, productControllers.updateProduct);

module.exports = router;
