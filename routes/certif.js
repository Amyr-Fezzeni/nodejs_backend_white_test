const router = require('express').Router();
const {certif,certif_validator} = require('../models/certif');

// get all certifications
router.get('/all',async (req,res)=>{
    res.send(await certif.find());
});
// get all avalible certifications
router.get('/avalible',async (req,res)=>{
    res.send(await certif.find({isAvalible:true}));
});
// search by id
router.get('/:id',async (req,res)=>{
    res.send(await certif.findById(req.params.id));
});
// search by name
router.get('/:name',async (req,res)=>{
    res.send(await certif.findByName(req.params.name));
});
// add new certification
router.post('',async (req,res)=>{

    let result_valid= certif_validator.validate(req.body);
    if(result_valid.error)
        return res.status(400).send(result_valid.error.details[0].message);
    
    let certif = new Certif(req.body);   
    try {
        res.send(await certif.save());
    } catch (error) {
        res.status(400).send(error.message);
    }
    
});

// modify certification
router.put('/:id', async (req,res)=> {
    let result_valid= certif_validator.validate(req.body);
    if(result_valid.error)
        return res.status(400).send(result_valid.error.details[0].message);
    
    await certif.updateOne({_id: req.params.id}, req.body);
    res.send(await certif.findById(req.params.id));
});

// delete certification
router.delete('/:id', async (req,res)=> {
    let _certif = await certif.findByIdAndRemove(req.params.id);
    if(! _certif )
        return res.status(404).send('Certification id is not found');
    res.send(_certif);
});










module.exports=router;