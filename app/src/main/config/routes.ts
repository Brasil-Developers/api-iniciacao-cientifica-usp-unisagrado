import { Express, Router } from 'express'
import v1 from '../routes/index';

export default (app: Express): void => {
    console.log('[ROUTER] Iniciando rotas...');
    const router = Router()
    app.use('/api', router)

    app.use('/api/v1', v1.v1);
    app.use('/api/version', (req, res) => {
        res.send({
            'currentVersion': 1,
        });
    });

}