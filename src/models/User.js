const mongoose = require('../db/conn');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    passsword: {
        type: String,
        required: true,
        select: false,
    }
});
