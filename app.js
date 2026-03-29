const express=require('express');
const authRouter=require('./routes/authRoutes');

const cookieparser=require('cookie-parser');

const errorRoute=require('./middlewares/errorRoute');
const logger=require('./middlewares/logger');
const companyRouter = require('./routes/companyRoutes');
 


const app=express();

app.use(express.json());

app.use(cookieparser());

app.use(logger);

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/companies',companyRouter);




app.use(errorRoute);

module.exports=app;
