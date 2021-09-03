import express from 'express';

// Rotas
import route from './src/routes';

const app = express();
const versionAPI:string = 'v1';
app.use(`/${versionAPI}/`, route.person);
app.use(`/${versionAPI}/user`, route.user);

export default app;
