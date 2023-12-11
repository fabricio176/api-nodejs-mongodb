const express = require('express');
const AuthController = require('./controller/AuthController');
const AdminController = require('./controller/AdminController');

const authenticateMiddleware = require('./middleware/authenticate');

const PORT = 3000;
const app = express();

app.use(express.json());

app.use('/auth', AuthController);
app.use('/admin',authenticateMiddleware , AdminController);

app.listen(3000, ()=>{
    console.log(`Server is running on the port:${PORT}`);
});