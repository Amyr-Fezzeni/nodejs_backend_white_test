const mongo = require('mongoose');
const Joi = require('joi');

let reservation_schema = new mongo.Schema({
    certification:String,
    user:String,
    date:Date
});

let reservation_validator = Joi.object({
    certification: Joi.string().required(),
    user: Joi.string().required(),
    date: Joi.date().required()
});


let reservation = mongo.model('reservation', reservation_schema);

module.exports.reservation = reservation;
module.exports.reservation_validator = reservation_validator;