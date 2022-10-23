import { Router } from "express";
import productsRouter from "./productsRoute";
import messagesRouter from "./messagesRoute";
import logger from "../config/loggerConfig";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hello World!");
});

router.use("/api/products", productsRouter);
router.use("/api/messages", messagesRouter);
router.get("*", (req, res) => {
    logger.warn(`La ruta ${req.url} y/o el método ${req.method} no estan implementados.`);
    res.status(404).send("Not Found");
});

export default router;