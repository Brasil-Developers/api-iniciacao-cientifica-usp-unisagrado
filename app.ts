import express from 'express';

// Rotas
import expRoute from './src/routes/personRoute';

const app = express();

app.use('/', expRoute);

export default app;
