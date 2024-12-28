const express = require('express')

const app = express();

app.use('/user',(req,res,next)=>{
    const isAdmin=false;
    if(isAdmin){
        next()
    }else{
        res.json({
            status: 401,
            message: 'unauthorized'
        })
    }
})

app.get('/user',(req,res,next)=>{
    next()
    //res.send("response")
    console.log("Hi")
},(req,res,next)=>{
    //res.send('2nd response')
    next();
})  

app.get('/user',(req,res)=>{
    res.send("3rd response")
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