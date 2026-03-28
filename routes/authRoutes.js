const express= require('express');
const { register , login, getme,logout } = require('../controllers/authController');
const { isAuthenticated } = require('../middlewares/auth');


const authRouter =express.Router();

authRouter.post('/register',register);
authRouter.post('/login',login);
authRouter.get('/getme',isAuthenticated, getme);
authRouter.post('/logout',isAuthenticated,logout);




module.exports=authRouter;
