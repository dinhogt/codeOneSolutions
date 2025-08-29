import { Router } from 'express';
import { handleContactRequest } from '../controllers/contactController.js';

const router = Router();

router.post('/contact', handleContactRequest);

export default router;
