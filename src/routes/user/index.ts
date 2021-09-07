import expRoute from '../route-express/index';

import { login, getData } from '../../controllers/user';

const verifyJWT = require('../../authentication');

expRoute.post('/login', login);

expRoute.get('/info-user', verifyJWT, getData);

export default expRoute;
