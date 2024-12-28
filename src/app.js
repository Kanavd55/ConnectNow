const express = require('express')

const app = express();

app.get('/use?r',(req,res)=>{
    res.send({firstName:'Kanav',lastName:'Dahat'})
})  

app.post('/user',(req,res)=>{
    console.log("data added to db")
    res.send(req.body)
}) 

app.delete('/user',(req,res)=>{
    res.send('Deleted Successfully')
})

app.use('/test',(req,res)=>{
    res.send('Hello from the server')
})

app.listen(3000,()=>{
    console.log("Server is listening on port 3000")
});