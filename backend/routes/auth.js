const express = require('express');
const User = require('../models/User');
const router = express.Router(); 
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const user = require('../models/User');
const fetchUser = require('../middleWare/fetchUser')

const jwt_sign = 'This%String%Is%For%Signing'
// Creating a User and Sending Authentication token in response:
router.post('/createUser',[
    body('name', 'Enter a Valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid Email').isEmail(),
  body('password', 'Enter a valid password').isLength({ min: 5 }),
], async (req, res)=>{ 
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    try {
    let user = await User.findOne({email: req.body.email})
    if(user) {
        return res.status(400).json({success,error:'Sorry! a user with this email already exists'})
    }

    const salt = await bcrypt.genSalt(10);
    const securedPass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
        name: req.body.name,
        password: securedPass,
        email: req.body.email
      })

      const data = {
        user:{
            id: user.id
        }
      }

      const token = jwt.sign(data, jwt_sign);
      success = true;
      res.json({success, token})
    } catch (error) {
        
    }
} )

//User Login and Sending Authentication token in response:
router.post('/login',[
    body('email', 'Enter a valid Email').isEmail(),
  body('password', 'Enter a valid password').exists()
], async (req, res)=>{
  let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;
    try {
    let user = await User.findOne({email});
    if(!user) {
      success = false;
        return res.status(400).json('Please enter correct Credentials.')
    }

    const passCompare = await bcrypt.compare(password, user.password);
    if(!passCompare) {
      success = false;
       return res.status(400).json({success,error:'Please enter correct Credentials.'})
    }

    const data = {
        user:{
            id: user.id
        }
    }

    const token = jwt.sign(data, jwt_sign);
    success = true;
      res.json({success,token})

} catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
}

})

//Getting User details using Auth-Token:
router.post('/getUser', fetchUser, async (req, res)=>{
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select('-password')
        res.json(user)
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
}
})

module.exports = router