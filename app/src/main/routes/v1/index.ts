
import express from 'express';
import account from './account';
import upload from './upload';

const router = express.Router();

router.use('/account', account);
router.use('/upload', upload);

export default router;
