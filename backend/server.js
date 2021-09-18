const express = require("express")
const app = express()
const mongoose = require('mongoose');
const productRouter = require("./routers/productRouter");
const userRouter = require("./routers/userRouter");
const port = 5000
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/IIBSO')

app.use('/api/users', userRouter);
app.use('/api/products',productRouter);










app.use((err, req,res, next)=>{
    res.status(500).send({message: err.message});
})
app.get('/', (req, res) => {
    res.send("Express Here")
});
app.listen(port, () => {
    console.log("App is listing " + port)
})