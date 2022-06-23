
import express from 'express';
import { adaptRoute } from '../../../adapters/express-route-adapter';
import { makeGetAllSpeakerController } from '../../../factories/speaker/get-all-speaker';
import { makeSaveSpeakerController } from '../../../factories/speaker/save-speaker';
import { verifyJWT } from '../../../middlewares/authentication/authentication';

const router = express.Router();

router.post('/', [verifyJWT], adaptRoute(makeSaveSpeakerController()));
router.get('/', [verifyJWT], adaptRoute(makeGetAllSpeakerController()));
router.get('/:id', [verifyJWT], adaptRoute(makeSaveSpeakerController()));

export default router;