const express  = require("express");
const data = require('../data');
const Product = require("../models/productModel");
const expressAsyncHandler = require("express-async-handler");

const productRouter = express.Router();
productRouter.get(
    '/seed',
    expressAsyncHandler(async(req,res)=>{
        await Product.remove({});
        const createProduct = await Product.insertMany(data.products);
        res.send({createProduct})
    })
);


module.exports = productRouter;