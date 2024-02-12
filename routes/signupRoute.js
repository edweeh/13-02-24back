const app = require('express').Router()
const signupmodel = require("../model/Signup");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// signupRoute.js
app.get('/dnew', (request, response) => {
    new signupmodel(request.body).save();
    response.send("Record saved Successfully");
});

app.post('/snew', (request, response) => {
        new signupmodel(request.body).save();
        response.send("Record saved Successfully");
});

app.post('/login', async (request, response) => {
    const { username, password } = request.body;
  
    try {
      const user = await signupmodel.findOne({ username });
  
      if (!user || user.password !== password) {
        return response.status(401).json({ success: false, message: 'Invalid Username or Password' });
      }
  
      response.status(200).json({ success: true, message: 'Login successful' });
    } catch (error) {
      console.error(error);
      response.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  });


module.exports = app