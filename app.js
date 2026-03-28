const express=require('express');
const authRouter=require('./routes/authRoutes');
const cookieparser=require('cookie-parser');
 


const app=express();

app.use(express.json());

app.use(cookieparser());

app.use('/api/v1/auth',authRouter);

module.exports=app;
