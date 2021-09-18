const express = require("express");
const data = require("../data.js");
const User = require("../models/userMode.js");
const expressAsyncHandler = require("express-async-handler")

const userRouter = express.Router();
userRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res)=>{
        await User.remove({});
        const createUser = await User.insertMany(data.users);
        res.send({createUser})
    })
);

module.exports = userRouter;