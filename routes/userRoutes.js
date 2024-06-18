import express from 'express';
import { formLogin, formRegister, formForgetPassword } from '../controllers/userController.js';

const router=express.Router();

// Routing
router.get('/',formLogin)
router.get('/register',formRegister)
router.get('/forget-password',formForgetPassword)

export default router