const loginmodel = require('../model/Login');

const app = require('express').Router()
// // const loginmodel = require('../model/Login');

// // const usermodel= require("./model/user");



// // const app = new express();

// // app.use(express.urlencoded({ extended: true }))
// // app.use(express.json());
// // app.use(cors());



// // app.get('/', (request, response) => {
// //     response.send("hi database")
// // })

// // app.post('/logins', async (request, response) => {
// //     const { hrid, password } = request.body;
  
// //     try {
// //       const user = await usermodel.findOne({ username, password });
  
// //       if (user) {
// //         response.json({ success: true, message: 'Login successful' });
// //       } else {
// //         response.json({ success: false, message: 'Invalid HR ID or Password' });
// //       }
// //     } catch (error) {
// //       response.status(500).json({ success: false, message: 'Error during login' });
// //     }
// //   });

// // // app.post('/login', (request, response) => {
// // //     console.log(request.body)
// // //     new usermodel(request.body).save()
// // // })
// // // app.use("/logins", LoginRouter)
// // app.post('/logins',async(request,response)=>{
// //     var data = await usermodel.find();
// //     response.send(data)
// // })


// // app.listen(4005, (request, response) => {
// //     console.log("port is running in 4005")
// // })
// const app = require('express').Router()
// const loginmodel = require('../model/Login');


// // signupRoute.js
// app.get('/Bnew', (request, response) => {
//     new loginmodel(request.body).save();
//     response.send("Record saved Successfully");
// });

// app.post('/Dnew', (request, response) => {
//         new loginmodel(request.body).save();
//         response.send("Record saved Successfully");
// });


app.post('/login', async (request, response) => {
    const {Email, Password } = request.body;
  
    try {
      const Login = await loginmodel.findOne({Email,Password });
  
      if (Login) {
        response.json({ success: true, message: 'Login successful' });
      } 
      else {
        response.json({ success: false, message: 'Invalid HR ID or Password' });
      }
    } catch (error) {
      response.status(500).json({ success: false, message: 'Error during login' });
    }
  });
//login retrieving
app.get('/Login',async(request,response)=>{
    var data = await loginmodel.find();
    response.send(data)
})



module.exports = app