const router = require('express').Router();
const {User, validation_user,validation_user_login} = require('../models/user');

// create new account
router.post('/signup', async (req,res)=>{
    let result_valid= validation_user.validate(req.body);
    if(result_valid.error)
        return res.status(400).send(result_valid.error.details[0].message);
    
    try{
        let user = new User(req.body);
        await user.save();
        res.status(201).send('Registration Success!!')
 
    }catch(err){
 
        res.status(400).send('Error in registration : '+err.message)
    }
    
});
// connect 
router.post('/signin', async (req,res)=>{
    
    let result_valid= validation_user_login.validate(req.body);
    
    if(result_valid.error)
        return res.status(400).send(result_valid.error.details[0].message);
    try{
        let user = await User.findOne({email : req.body.username});
        if( ! user )
            return res.status(400).send('Email or password is incorrect');
        
        let bool = req.body.password == user.password;
        if(!bool)
            return res.status(400).send('Email or password is incorrect');
        res.send('Login Success');

    }catch(err){
        res.status(400).send('Error in registration : '+err.message)
    }
    
});



module.exports=router