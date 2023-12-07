const mongoose = require('mongoose');
require('dotenv').config();

DBPASSWORD = process.env.DBPASSWORD;

mongoose.connect(`mongodb+srv://fabricio176:${DBPASSWORD}@auth-api.gjlauri.mongodb.net/?retryWrites=true&w=majority`, {}, (error)=>{
    if(error){
        console.log('Falha ao autenticar com mongodb');
        console.log(error);
        return;
    }

    console.log('Conexão com mongodb Estável');
} );

mongoose.Promise = global.Promise;

module.exports = mongoose;