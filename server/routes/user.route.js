import express from 'express';
import upload from '../middlewares/fileUpload.js';
//import { login, logout, scorer, signup } from '../controllers/user.controller.js';
import { createOrUpdateUser, getUserByEmail, scorer } from '../controllers/user.controller.js';

const router =  express.Router();
router.route('/users').get(getUserByEmail);
router.route('/users').post(createOrUpdateUser);
// router.route('/scorer').post(upload.single('file'), scorer);

//Auth ke routes the, temporary removing them since abhi sirf G-auth se kr rha
// router.route('/signup').post(signup);
// router.route('/login').post(login);
// router.route('/logout').post(logout);
export default router;