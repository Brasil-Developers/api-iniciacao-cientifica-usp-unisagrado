
import express from 'express';
import { adaptRoute } from '../../../adapters/express-route-adapter';
import { makeGetSpeakerSurgeryController } from '../../../factories/speaker-surgeries/get-speaker-surgerie';
import { makeSaveSpeakerSurgeryController } from '../../../factories/speaker-surgeries/save-speaker-surgerie';
import { verifyJWT } from '../../../middlewares/authentication/authentication';

const router = express.Router();

router.get('/', [verifyJWT], adaptRoute(makeGetSpeakerSurgeryController()));
router.get('/:task', [verifyJWT], adaptRoute(makeGetSpeakerSurgeryController()));
router.post('/', [verifyJWT], adaptRoute(makeSaveSpeakerSurgeryController()));
router.put('/:task', [verifyJWT], adaptRoute(makeSaveSpeakerSurgeryController()));
router.delete('/:task', [verifyJWT], adaptRoute(makeSaveSpeakerSurgeryController()));

export default router;