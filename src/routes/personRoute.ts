import expRoute from './route-express/index';

import postt from '../controllers/person.controller';

expRoute.get('/', postt);

export default expRoute;
