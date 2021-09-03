import expRoute from './route-express/index';

import inserInfo from '../controllers/getData';

const verifyJWT = require('../authentication');

expRoute.post('/getData', verifyJWT, inserInfo);

export default expRoute;
