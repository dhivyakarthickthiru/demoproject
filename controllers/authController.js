const User=require('../models/user');
const bcrypt=require('bcrypt');
//const sendEmail= require('../utils/email');


const authController={
  register: async(req,res)=>{

    try{
        const { name,email,password}=req.body;

        const existingUser= await User.findOne({email})

        if(existingUser){
            res.status(400).json('user already exist')
        }

        const hashedPassword=await bcrypt.hash(password,10);

        const newUser=new User({
            name,
            email,
            password:hashedPassword
        })
         await newUser.save();

         // email oru person anupura content user register panna pinnadi vera user mail-id ku welcome content anupurathu
         // await sendEmail (email,'Welcome to our app','Thank you for registering');
    
        res.status(200).json({message:'user registerd successfully'});

    }catch(error){
        res.status(500).json({message:'Error registering user',error: error.message});
    }
  }
    

}

module.exports=authController;