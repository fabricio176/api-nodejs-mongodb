const express = require('express');
const AuthController = require('./controller/AuthController');

const PORT = 3000;
const app = express();

app.use(express.json());

app.use('/auth', AuthController);

app.listen(3000, ()=>{
    console.log(`Server is running on the port:${PORT}`);
});