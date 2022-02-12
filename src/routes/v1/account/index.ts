import { login, getData } from '../../../controllers/user';
import express from 'express';
const router = express.Router();
const verifyJWT = require('../../../middleware/authentication');

router.post('/login', login);

router.get('/info-user', verifyJWT, getData);

export default router;
