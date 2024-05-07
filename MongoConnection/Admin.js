const mongoose = require('mongoose');
const admin = new mongoose.Schema({

    UserName:String,
    Password:String
})

module.exports = mongoose.model("admins",admin);