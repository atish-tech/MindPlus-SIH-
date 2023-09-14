const express = require('express');
const {loginController , registerController , fetchAllUsersController} = require('../Controllers/userControllers')
const Route = express.Router();
const {protect} = require("../Middleware/authMiddleware")

Route.post('/login' , loginController);
Route.post('/register' , registerController);
Route.get('/fetchUsers' , protect , fetchAllUsersController);

module.exports = Route; 