
import express from 'express';
import { adaptRoute } from '../../../adapters/express-route-adapter';
import { makeSaveSpeakerSurgeryController } from '../../../factories/speaker-surgeries/save-speaker-surgerie';
import { verifyJWT } from '../../../middlewares/authentication/authentication';

const router = express.Router();

router.post('/', [verifyJWT], adaptRoute(makeSaveSpeakerSurgeryController()));

export default router;