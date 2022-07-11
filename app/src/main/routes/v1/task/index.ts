
import express from 'express';
import { adaptRoute } from '../../../adapters/express-route-adapter';
import { makeDelTaskController } from '../../../factories/task/del-task';
import { makeGetAllTaskController } from '../../../factories/task/get-all-task';
import { makeGetTaskController } from '../../../factories/task/get-task';
import { makeAddTaskController } from '../../../factories/task/save-task';
import { verifyJWT } from '../../../middlewares/authentication/authentication';

const router = express.Router();

router.get('/', [verifyJWT], adaptRoute(makeGetAllTaskController()));
router.get('/:task', [verifyJWT], adaptRoute(makeGetTaskController()));
router.post('/', [verifyJWT], adaptRoute(makeAddTaskController()));
router.put('/:task', [verifyJWT], adaptRoute(makeAddTaskController()));
router.delete('/:task', [verifyJWT], adaptRoute(makeDelTaskController()));

export default router;