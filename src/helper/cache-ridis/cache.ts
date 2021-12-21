import redis from 'redis';

const cache = redis.createClient({ url: 'redis://redis:6379' });

const getCache = (id:number) =>
  new Promise((resolve, reject) =>
    cache.get(String(id), (e, data:any) => resolve(JSON.parse(data))));

const setCache = (id:number, data:object) =>
  new Promise(() =>
    cache.set(String(id), JSON.stringify(data), 'EX', 60));

export {
  getCache,
  setCache,
};
