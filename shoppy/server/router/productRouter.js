import express from 'express';
import * as controller from '../controller/productController.js';

const router = express.Router();

router.get('/all', controller.getAll);
router.get('/:pname', controller.getProductName);

export default router;