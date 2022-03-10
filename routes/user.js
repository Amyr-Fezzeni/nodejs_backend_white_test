const router = require('express').Router();
const { User, validation_user, validation_update_user } = require('../models/user');


router.get('/all',async (req,res)=>{
    res.send(await User.find());
});

router.get('/admins',async (req,res)=>{
    res.send(await User.find({role:"admin"}));
});

router.get('/etudiants',async (req,res)=>{
    res.send(await User.find({role:"etudiant"}));
});

router.get('/:id',async (req,res)=>{
    res.send(await User.findById(req.params.id));
});


router.post('/add',async (req,res)=>{

    let result_valid= validation_user.validate(req.body);
    if(result_valid.error)
        return res.status(400).send(result_valid.error.details[0].message);
    
    let _user = new User(req.body);   
    try {
        res.send(await _user.save());
    } catch (error) {
        res.status(400).send(error.message);
    }
    
});


router.put('/:id', async (req,res)=> {
    let result_valid= validation_update_user.validate(req.body);
    if(result_valid.error)
        return res.status(400).send(result_valid.error.details[0].message);
    
    await User.updateOne({_id: req.params.id}, req.body);
    res.send(await User.findById(req.params.id));
});


router.delete('/:id', async (req,res)=> {
    let _user = await User.findByIdAndRemove(req.params.id);
    if(! _user )
        return res.status(404).send('User id is not found');
    res.send(_user);
});










module.exports=router;