const express = require('express')

const app = express();

app.use('/test',(req,res)=>{
    res.send('Hello')
})  

app.use('/',(req,res)=>{
    res.send('Namaste from the dashboard')
}) 



app.listen(3000,()=>{
    console.log("Server is listening on port 3000")
});