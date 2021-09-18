const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:{type:String,required: true},
    category:{type:String},
    image:{type:String},
    price:{type:Number},
    countInStock:{type:Number},
    brand:{type:String},
    rating:{type:Number},
    numReviews:{type:Number},
    description:{type:String}
},{timestamps:true});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;