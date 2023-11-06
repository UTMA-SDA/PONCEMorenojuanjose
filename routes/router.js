import express from 'express';
import auth from './auth.js';
import verifyApiKey from "../middlewares/verifyApiKey.js";
const router = express.Router();

router.use('/auth', auth);

router.use(verifyApiKey);
router.use('/ponmor', ponmor);

export default router;