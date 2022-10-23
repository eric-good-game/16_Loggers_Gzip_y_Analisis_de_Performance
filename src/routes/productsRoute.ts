import { Router } from "express";
import ProductController from "../controllers/productController";

const router = Router();

router
    .post("/", ProductController.createProduct)
    .get("/", ProductController.getAllProducts)
    .get("/:id", ProductController.getProductById)
    .put("/:id", ProductController.updateProduct)
    .delete("/:id", ProductController.deleteProduct);

export default router;