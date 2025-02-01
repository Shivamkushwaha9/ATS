import express from 'express';
import { login, logout, scorer, signup } from '../controllers/user.controller.js';

const router =  express.Router();

router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/logout').post(logout);
router.route('/scorer').post(scorer);

export default router;