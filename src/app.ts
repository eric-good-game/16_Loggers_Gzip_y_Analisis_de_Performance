import express from 'express';
import compression from 'compression';
import router from './routes';
import './config/mongooseConfig';
import register from './middleware/register';

const app = express();
// Middlewares
app.use(express.json());
app.use(compression());
app.use(register);
// Routes
app.use('/', router);

export default app;