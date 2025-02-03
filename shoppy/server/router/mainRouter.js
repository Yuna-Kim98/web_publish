import express from 'express';
import * as controller from '../controller/mainContreller.js';

const router = express.Router();

router.get('/', controller.getMain);

export default router;