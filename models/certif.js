const mongo = require('mongoose');
const Joi = require('joi');


const certif_schema = new mongo.Schema({
    name: String,
    isAvalible:Boolean,
});

let certif_validator = Joi.object({
    name: Joi.string().min(3).required(),
    isAvalible: Joi.boolean().required()
});

const certif = mongo.model('Certif',certif_schema);

module.exports.Certif = certif;
module.exports.certif_validator=certif_validator;