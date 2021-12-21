import express from 'express';
import v1 from './src/routes/index';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());   

app.use('/api/v1', v1.v1);   
app.use('/api/version', (req, res) => {
    res.send({
        'ok': true
    })
});

export default app;
