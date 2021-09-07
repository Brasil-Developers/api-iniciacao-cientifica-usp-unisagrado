import express from 'express';

// Rotas
import route from './src/routes';

const app = express();

app.use(express.urlencoded());
app.use(express.json());

const versionAPI:string = 'v1';
app.use(`/${versionAPI}/`, route.person);
app.use(`/${versionAPI}/user`, route.user);
export default app;
