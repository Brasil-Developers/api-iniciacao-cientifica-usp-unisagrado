import expRoute from '../route-express/index';

import login from '../../controllers/user';

expRoute.post('/login', login);

export default expRoute;
