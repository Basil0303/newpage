const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, {  useUnifiedTopology: true,useNewUrlParser: true });

module.exports = mongoose;
