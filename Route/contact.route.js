// route/contact.route.js
import express from 'express';
import { submitContactForm } from '../Controller/contact.controller.js';

const router = express.Router();

router.post("/contact", submitContactForm);

export default router;
