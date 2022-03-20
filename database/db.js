const mongo = require('mongoose');
<<<<<<< HEAD
const {login, password, dbName} = require('../consts/const');
mongo.connect('mongodb+srv://'+login+':'+password+'@mydb.9qked.mongodb.net/'+dbName+'?retryWrites=true&w=majority')
=======

mongo.connect('mongodb+srv://<username>:<password>@mydb.9qked.mongodb.net/<dataBaseName>?retryWrites=true&w=majority')
>>>>>>> 889cbfbf604b20de2c919cf13864e79d507b7162
.then(()=> console.log('Mongo is UP.'))
.catch(err => console.log('Mongo is Down , raison : ',err.message));
