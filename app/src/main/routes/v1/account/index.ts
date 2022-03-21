
import express from 'express';
import { adaptRoute } from '../../../adapters/express-route-adapter';
import { makeSignInController } from '../../../factories/account/signin';
import { makeSignUpController } from '../../../factories/account/signup';
const router = express.Router();

router.post('/signin', adaptRoute(makeSignInController()));
router.post('/signup', adaptRoute(makeSignUpController()));

export default router;
