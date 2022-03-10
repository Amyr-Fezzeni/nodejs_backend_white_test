const mongoose = require('mongoose');
const Joi = require('joi');

let user_schema = new mongoose.Schema({
    FirstName : {
        type : String,
        require : true,
    },
    LastName : {
        type : String,
        require : true,
    },
    email : {
        type : String,
        require : true,
        unique: true
    },
    password : {
        type : String,
        require : true,
    },
    role : {
        type : String,
        require : true,
    }
});

let validation_user = Joi.object({
    FirstName : Joi.string().min(3).required(),
    LastName : Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

    repeat_password: Joi.ref('password'),
    role: Joi.string()
});

let validation_user_login = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
});

let validation_update_user = Joi.object({
    FirstName : Joi.string().min(3).required(),
    LastName : Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    repeat_password: Joi.ref('password'),
    role: Joi.string()
});

let User = mongoose.model('User',user_schema);

module.exports.User = User;
module.exports.validation_user = validation_user;
module.exports.validation_update_user = validation_update_user;
module.exports.validation_user_login = validation_user_login;