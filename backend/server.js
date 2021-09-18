const express =  require("express")
const app = express()
const port  = 5000 

app.get('/',(req,res)=>{
    res.send("Express Here")
});
app.listen(port,()=>{
    console.log("App is listing "+port)
})