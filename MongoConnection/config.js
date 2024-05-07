const mongoose = require('mongoose');
require("dotenv").config()
 // mongoose.connect("mongodb://localhost:27017/Techtitans");
  mongoose.connect(process.env.MONGODB_URL)
