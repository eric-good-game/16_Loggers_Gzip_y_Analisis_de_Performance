import { Request, Response } from "express";
import logger from "../config/loggerConfig";
import Products from "../models/productModel";

class ProductController {
    static async getAllProducts(req: Request, res: Response) {
        try {
            const products = await Products.find();
            res.status(200).json(products);
        } catch (err) {
            if(err instanceof Error) {
                logger.error(err.message);
            }
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
    static async getProductById(req: Request, res: Response) {
        try {
            const product = await Products.findById(req.params.id);
            if(!product) {
                throw new Error("Product not found");
            }
            res.status(200).json(product);
        } catch (err) {
            if(err instanceof Error) {
                logger.error(err.message);
            }
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
    static async createProduct(req: Request, res: Response) {
        try {
            const product = await Products.create(req.body);
            res.status(201).json(product);
        } catch (err) {
            if(err instanceof Error) {
                logger.error(err.message);
            }
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
    static async updateProduct(req: Request, res: Response) {
        try {
            const product = await Products.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            res.status(200).json(product);
        } catch (err) {
            if(err instanceof Error) {
                logger.error(err.message);
            }
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
    static async deleteProduct(req: Request, res: Response) {
        try {
            const product = await Products.findByIdAndDelete(req.params.id);
            res.status(200).json(product);
        } catch (err) {
            if(err instanceof Error) {
                logger.error(err.message);
            }
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

export default ProductController;