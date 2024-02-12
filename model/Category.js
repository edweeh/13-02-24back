const mongoose=require("mongoose")
let sc=mongoose.Schema;
const CategorySchema = new sc({
    Categoryname: String,
    Status: String,
   
  });
  
  var categorymodel =mongoose.model("Category",CategorySchema)
  module.exports =categorymodel;