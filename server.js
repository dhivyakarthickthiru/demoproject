const mongoose=require('mongoose');


const { MONGODB_URI } = require('./utils/config');
mongoose.connect(MONGODB_URI)
.then(()=>{
    console.log("connected to Database");
}).catch((err)=>{
    console.log('Error connection to Database:',err.message);
});
