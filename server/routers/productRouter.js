import express from 'express';
import {createProduct, getUserProducts, editProduct, deleteProduct} from "../controllers/productController.js";
import protect from "../validators/validateJWT.js";

const productRouter = express.Router();

productRouter.use(protect);
productRouter.route("/").post(createProduct);
productRouter.route("/user/:id").get(getUserProducts);
productRouter.route("/:productId").patch(editProduct).delete(deleteProduct);

export default productRouter;