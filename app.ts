import express from 'express';

import redis from 'redis';

// Rotas
import route from './src/routes';

const cache = redis.createClient({
  host: 'localhost',
  port: 8081,
  no_ready_check: true,
});

cache.on('connect', () => {
  const getClient = cache.get('1');
  console.log(getClient);
//   global.console.log('connected');
});

cache.on('error', (err:any) => {
  global.console.log(err.message);
});

const app = express();
const versionAPI:string = 'v1';
app.use(`/${versionAPI}/`, route.person);
app.use(`/${versionAPI}/user`, route.user);

export default app;
