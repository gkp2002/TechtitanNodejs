const express = require('express');
const mongoose = require('./MongoConnection/config');
const Product = require('./MongoConnection/Product');
const Admin = require("./MongoConnection/Admin.js");
const cors = require('cors');
const app = express();
require('./MongoConnection/config.js')
require('dotenv').config();
app.use(cors())
app.use(express.json());
let user;
app.get('/',(req,res)=>{
    res.send("Server Runing SucessFul");
})
app.post('/auth', async (req,res)=>{
    console.log(req.body);
  user=req.body.Username;
    try{
            const check = await Admin.findOne({Username:req.body.Username,Password:req.body.Password});
            console.log(check)
            
                if(check){
                res.json("exist")
            }else{
                res.json("noexit");
            }
    }catch(e){
                res.json("notexist")
                console.log(e)
    }
})

app.get('/dashboard',async (req,res)=>{
    let result = await Admin.find({Username:user});
    console.log(result)
    res.send(result)
})

app.post('/Create',async (req,res)=>{
    console.log(req.body);
    let data =  new  Product(req.body);
    let result =await data.save();
    res.send(result);
})
app.get('/list',async (req,res)=>{
    let result = await Product.find();
    res.send(result);
})
app.put('/update/:_id',async (req,res)=>{
       console.log(req.params);
       let data = await Product.updateOne(
        {_id:req.params},
        {$set:req.body}
       )
       res.send(data);
})
app.delete('/delete/:_id',async (req,res)=>{
    console.log(req.params);
    let data = await Product.deleteOne({_id:req.params});
    res.send(data);

})
app.listen(process.env.PORT,()=>{
    console.log("Port listenin on ",process.env.PORT);
})