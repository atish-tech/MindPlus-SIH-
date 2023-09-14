const express = require('express');
const userModel = require("../Modals/userModels");
const expressAsyncHandler = require('express-async-handler');
const generateToken = require("../Confing/generateToken");

// login
const loginController = expressAsyncHandler(async (request, response) => {
    const { name, password } = request.body;
    const user = await userModel.findOne({ name });  // find email in data base

    console.log("fetched data", user);
    console.log(await user.matchPassword(password));

    if (user && (await user.matchPassword(password))) {
        const DBresponse = {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        };
        console.log(DBresponse);
        response.json(DBresponse)
    }
    else {
        response.status(401);
        throw new Error("Envalid username passwotd");
    }
})

// register
const registerController = expressAsyncHandler(async (request, response) => {
    console.log(".........");

    const { name, email, password } = request.body;
    // console.log(request.body.name);
    // check all the fields
    if (!name || !email || !password) {
        response.send(400);
        throw new Error("All the fields are complsury");
    }
    // check user already exist or not
    const userExist = await userModel.findOne({ email });
    if (userExist) {
        throw new Error("Email already exist");
    }
    // check user name availible or not
    const userNameExist = await userModel.findOne({ name });
    if (userNameExist) {
        throw new Error("User Name already exist");
    }

    // create a new entry in DB
    const user = await userModel.create({ name, email, password });
    if (user) {
        response.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
        console.log(user);
    }
    else {
        response.status(400);
        throw new Error("Registration error");
    }
    // response.send(user);
})

// get all user
const fetchAllUsersController = async (request, response) => {
    const keyword = request.query.search
        ? {
            $or: [
                { name: { $regex: request.query.search, $options: "i" } },
                { email: { $regex: request.query.search, $options: "i" } },
            ],
        }
        : {};

    const users = await userModel.find(keyword).find({
        _id: { $ne: request.user._id },
    });
    response.send(users);
}

module.exports = { loginController, registerController, fetchAllUsersController };