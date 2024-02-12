
const mongoose=require("mongoose")
let sc=mongoose.Schema;
const loginSchema = new sc({
    Email: String,
    Password: String,
    
  });
  
  var loginmodel =mongoose.model("Login",loginSchema)
  module.exports =loginmodel;

