
import express from 'express';
import { adaptRoute } from '../../../adapters/express-route-adapter';
import { makeGetDetailController } from '../../../factories/account/get-detail';
import { makeResetAccountController } from '../../../factories/account/reset';
import { makeSignInController } from '../../../factories/account/signin';
import { makeSignUpController } from '../../../factories/account/signup';
import { verifyJWT } from '../../../middlewares/authentication/authentication';
const router = express.Router();

router.post('/signin', adaptRoute(makeSignInController()));
router.post('/signup', adaptRoute(makeSignUpController()));
router.get('/detail', verifyJWT, adaptRoute(makeGetDetailController()));
router.post('/reset',  adaptRoute(makeResetAccountController()))

export default router;