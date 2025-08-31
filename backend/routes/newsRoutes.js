import express from 'express';
import { news } from '../controllers/newsController.js';

const router = express.Router();

router.get('/news', news);

export default router;
