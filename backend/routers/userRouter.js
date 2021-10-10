const express = require("express");
const bcrypt = require("bcryptjs");
const data = require("../data.js");
const User = require("../models/userMode.js");
const generateToken = require("../utils.js")
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

userRouter.post(
    '/signin',
    expressAsyncHandler(async (req, res)=>{
        const user = await User.findOne({email: req.body.email});
        console.log(user)
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){
                res.send({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: generateToken(user),
                });
                return;
            }
        }
     
        res.status(401).send({message: "Invalid email or password"});
    })
);

module.exports = userRouter;