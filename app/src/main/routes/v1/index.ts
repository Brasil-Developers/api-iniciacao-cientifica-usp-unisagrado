
import express from 'express';
import account from './account';
import upload from './upload';
import speaker from './speaker';
const router = express.Router();

router.use('/account', account);
router.use('/upload', upload);
router.use('/speaker', speaker);

export default router;
