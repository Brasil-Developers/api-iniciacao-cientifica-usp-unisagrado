
import express from 'express';
import account from './account';
import upload from './upload';
import speaker from './speaker';
import speakerSurgery from './speaker-surgery';
import task from './task';
const router = express.Router();

router.use('/account', account);
router.use('/upload', upload);
router.use('/speaker', speaker);
router.use('/speakerSurgery', speakerSurgery);
router.use('/task', task);
export default router;
