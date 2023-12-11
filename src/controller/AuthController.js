const express = require('express');
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require('../config/auth.json');

const UserModel = require('../models/User');

const router = express.Router();

router.post('/register', async (req,res) =>{

    const {email} = req.body;

    if(await UserModel.findOne({email})){
        return res.status(400).json({
            error: true,
            message: "Email already registered"
        })
    }

    const User = await UserModel.create(req.body);

    User.password = undefined;
   
    return res.json({
        error: false,
        message: "Registered sucefull!",
        data: User
    })
})

router.post("/authenticate", async(req, res)=>{
    const {email, password} = req.body;

    const user = await UserModel.findOne({email}).select("password");
    console.log(user);

    if(!user){
        return res.status(400).json({
            error:true,
            message: 'User not found'
        })
    }

    if(!await bcryptjs.compare(password, user.password)){
        return res.status(400).send({
            error: true,
            message:'Invalid password'
        })
    }

    user.password = undefined;

    const token = jwt.sign({
        id: user.id,
        name: user.name
    }, authConfig.secret ,{});

    return res.json({
        user,
        token
    });
})

module.exports = router;