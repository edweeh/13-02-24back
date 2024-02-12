const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://edwinksunny:12345@cluster0.xdutnjl.mongodb.net/petstore?retryWrites=true&w=majority")
    .then(() => {
        console.log("Db connected");
    })
    .catch(err => console.log(err));
