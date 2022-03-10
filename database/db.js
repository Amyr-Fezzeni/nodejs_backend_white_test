const mongo = require('mongoose');

mongo.connect('mongodb+srv://<username>:<password>@mydb.9qked.mongodb.net/<dataBaseName>?retryWrites=true&w=majority')
.then(()=> console.log('Mongo is UP.'))
.catch(err => console.log('Mongo is Down , raison : ',err.message));
