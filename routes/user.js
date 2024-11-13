import express from 'express';
import {
    loginUser,
    registerUser
} from '../app/controllers/UserController.js'
const router = express.Router();

//const userController = require('../app/controllers/UserController')

//newsController.index


router.post('/login', loginUser)
router.post('/register', registerUser)


export default router;