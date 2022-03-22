
import express from 'express';
import { adaptRoute } from '../../../adapters/express-route-adapter';
import { makeUploadController } from '../../../factories/upload/upload';
import { verifyJWT } from '../../../middlewares/authentication/authentication';
import { upload } from '../../../middlewares/upload/upload';

const router = express.Router();

router.post('/single', [verifyJWT, upload] , adaptRoute(makeUploadController()));

export default router;