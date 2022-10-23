import mongoose from "mongoose";
import logger from "./loggerConfig";

async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://localhost/my_database');
        logger.info('Connected to database');
    } catch (error) {
        logger.error('Error connecting to database', error);
    }
}

connectToDatabase();