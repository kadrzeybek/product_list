import express from 'express';

import { getAllProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.get("/", getAllProduct);

export default router;