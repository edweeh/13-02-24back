const app = require('express').Router()
const categorymodel = require("../model/Category");

//save data
app.post('/cnew', (request, response) => {
    console.log("Saved")
    new categorymodel(request.body).save();
    response.send("Record saved Successfully");
});

//retrieve data
app.get('/cfetch', async (request, response) => {
    try {
      const categories = await categorymodel.find();
      response.json(categories);
    } 
    catch (error) {
      console.error('Error fetching category data:', error);
      response.status(500).send('Internal Server Error');
    }
  });

//For update status of student -delete
app.put('/updatestatus/:id',async(request,response)=>{
    let id = request.params.id
    await categorymodel.findByIdAndUpdate(id,{$set:{Status:"INACTIVE"}})
    response.send("Record Deleted")
})

//For modifing the details student
app.put('/cedit/:id',async(request,response)=>{
    let id = request.params.id
    await categorymodel.findByIdAndUpdate(id,request.body)
    response.send("Record updated")
})

module.exports = app