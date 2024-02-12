const app = require('express').Router()
const petmodel = require("../model/Pet");
const multer = require('multer');

const storage = multer.memoryStorage(); // Store images in memory
const upload = multer({ storage: storage });

// For saving petdetails
app.post('/petnew', upload.single('Image'), async (request, response) => {
  console.log(request.body)
  try {
              const {  
                Petcode,
                PetName,
                cid,
                Species,
                Age,
                Gender,
                Breed,
                Color,
                Description,
                Status
               } = request.body
              const newdata = new petmodel({
                Petcode,
                PetName,
                cid,
                Species,
                Age,
                Gender,
                Breed,
                Color,
                Description,
                Status,
                Image: {
                      data: request.file.buffer,
                      contentType: request.file.mimetype,
                  }
              })
              await newdata.save();
              response.status(200).json({ message: 'pet added successfully' });
      }
  catch (error) 
  {
              response.status(500).json({ error: 'Internal Server Error' });
  }
}
)


app.get('/tfetch', async (request, response) => {
  const result = await petmodel.aggregate([
    {
      $lookup: {
        from: 'categories', // Name of the other collection
        localField: 'cid', // field of pet
        foreignField: '_id', //field of category
        as: 'pet',
      },
    },
  ]);

  response.send(result)
}
  );

//For update status of pet -delete
app.put('/updatestatus/:id',async(request,response)=>{
  let id = request.params.id
  await petmodel.findByIdAndUpdate(id,{$set:{Status:"INACTIVE"}})
  response.send("Record Deleted")
})

//For modifing the details pet
app.put('/pedit/:id',async(request,response)=>{
  let id = request.params.id
  await petmodel.findByIdAndUpdate(id,request.body)
  response.send("Record updated")
})

module.exports = app