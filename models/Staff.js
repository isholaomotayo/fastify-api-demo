// External Dependancies
const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  gender: String,
  age: Number,
  dept: String,
  
});

module.exports = mongoose.model("Staff", staffSchema);
