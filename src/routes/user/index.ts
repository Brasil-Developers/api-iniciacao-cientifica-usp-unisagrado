import expRoute from '../route-express/index';

import login from '../../controllers/user';

// const verifyJWT = require('../../authentication');

expRoute.post('/login', login);

export default expRoute;
