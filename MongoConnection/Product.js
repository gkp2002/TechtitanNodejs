const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
    Name:String ,
    Company:String,
    Email:String,
    Phone:String ,
    Address:String,
})

module.exports = mongoose.model('TectitansData',ProductSchema);