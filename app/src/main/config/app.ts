import express from 'express';
import setupRoutes from './routes';
import setupMiddlewares from './middlewares';
import setupSequelize from './sequelize';

const app = express();
setupMiddlewares(app);
setupRoutes(app);
setupSequelize();
export default app;
