const mongoose = require('mongoose');
require('dotenv').config();

DBPASSWORD = process.env.DBPASSWORD;

mongoose.connect(`mongodb+srv://fabricio176:${DBPASSWORD}@auth-api.bchbvjm.mongodb.net/?retryWrites=true&w=majority`, {})
    .then(() =>{
        console.log('Conexão com MongoDB estabelecida');
    })
    .catch(error =>{
        console.log('Falha ao autenticar com MongoDB');
        console.error(error);
    });

mongoose.Promise = global.Promise;

module.exports = mongoose;