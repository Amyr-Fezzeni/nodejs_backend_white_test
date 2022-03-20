const router = require('express').Router();
const {reservation, reservation_validator} = require('../models/reservation');

// get all reservations
router.get('/all',async (req,res)=>{
    res.send(await reservation.find());
});
//get all Avalible reservations
router.get('/avalible',async (req,res)=>{
    res.send(await reservation.find({isAvalible:true}));
});

// get reservation by id
router.get('/:id',async (req,res)=>{
    res.send(await reservation.findById(req.params.id));
});
// get reservation by name
router.get('/:name',async (req,res)=>{
    res.send(await reservation.findByName(req.params.name));
});

//add new reservation
router.post('',async (req,res)=>{

    let result_valid= reservation_validator.validate(req.body);
    if(result_valid.error)
        return res.status(400).send(result_valid.error.details[0].message);
    
    let _reservation = new reservation(req.body);   
    try {
        res.send(await _reservation.save());
    } catch (error) {
        res.status(400).send(error.message);
    }
    
});

// modify reservation
router.put('/:id', async (req,res)=> {
    let result_valid= reservation_validator.validate(req.body);
    if(result_valid.error)
        return res.status(400).send(result_valid.error.details[0].message);
    
    await reservation.updateOne({_id: req.params.id}, req.body);
    res.send(await reservation.findById(req.params.id));
});

// delete reservation
router.delete('/:id', async (req,res)=> {
    let _reservation = await reservation.findByIdAndRemove(req.params.id);
    if(! _reservation )
        return res.status(404).send('Reservation id is not found');
    res.send(_reservation);
});










module.exports=router;