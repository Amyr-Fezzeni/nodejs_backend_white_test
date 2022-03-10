const mongo = require('mongoose');

mongo.connect('mongodb+srv://amyr123:amyr123@mydb.9qked.mongodb.net/jarvis?retryWrites=true&w=majority')
.then(()=> console.log('Mongo is UP.'))
.catch(err => console.log('Mongo is Down , raison : ',err.message));