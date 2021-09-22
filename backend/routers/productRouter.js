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
productRouter.get(
    '/',
    expressAsyncHandler(async(req,res)=>{
        const productList = await Product.find({});
        res.send({productList})
    })
);
productRouter.get(
    '/:id',
    expressAsyncHandler(async(req,res)=>{
        const product = await Product.findById(req.params.id)
        if(product){
            res.send(product);
        }else{
            res.status(404).send({message: "Product Not Found"})
        }
    })
)

module.exports = productRouter;