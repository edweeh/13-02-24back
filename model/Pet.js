
const mongoose=require("mongoose")
let sc=mongoose.Schema;
const PetSchema = new sc({
    Petcode: String,
    PetName: String,
    cid:{type:mongoose.Schema.Types.ObjectId,ref:'categories'},
    Species: String,
    Age: Number,
    Gender: String,
    Breed: String,
    Color: String,
    Description: String,
    Status: String,
    Image: {
        data : Buffer,
        contentType:String,
    }, 
     
  });
  
  var petmodel =mongoose.model("Pet",PetSchema)
  module.exports =petmodel;

