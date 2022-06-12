
import express from 'express';
import { adaptRoute } from '../../../adapters/express-route-adapter';
import { makeSaveSpeakerController } from '../../../factories/speaker/save-speaker';
import { verifyJWT } from '../../../middlewares/authentication/authentication';

const router = express.Router();

router.post('/add', [verifyJWT], adaptRoute(makeSaveSpeakerController()));

export default router;