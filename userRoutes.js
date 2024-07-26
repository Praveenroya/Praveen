const express = require('express')
const router = express.Router();

const usercontroller = require('../controllers/usercontroller');
 router.post('/user', usercontroller.createUser);
 router.get('/data', usercontroller.getAllUsers);
 router.put('/update/:id', usercontroller.userUpdateByID);