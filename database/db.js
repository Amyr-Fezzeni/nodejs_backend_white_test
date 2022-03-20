const mongo = require('mongoose');
const {login, password, dbName} = require('../consts/const');
mongo.connect('mongodb+srv://'+login+':'+password+'@mydb.9qked.mongodb.net/'+dbName+'?retryWrites=true&w=majority')
.then(()=> console.log('Mongo is UP.'))
.catch(err => console.log('Mongo is Down , raison : ',err.message));