const express = reqiure('express');
const mongoose = reqiure('mongoose');
app. user = express.json();
    const port = 3000
 const user=('mongoUrl')
 const mongoUrl='mongodb+srv://Bhanu:Bhanu@cluster0.2qa8mjy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
 
 mongoose.connect(mongoUrl,{});
 mongoose.connection.on('connection',() => {
 console.log("My server has connected to Mongoose" + port)
 })

 app.post('/User', (req, res) => {
    user(id , email)=req.boby;
    user[id]=(name, email);

    res.status(201).json({
        success:true,
        data:user
    })

 })

 app.get('/data',(req, res) => {
    res.status
    {
        Event:'Birthday'
        Date:7-9-2000
        age: 23
    }

    app.put('/update/:id',(req, res) => {
        user(name, email) = req.params
         [id]= (name, email)

         res.status(200).json({
            success:true,
            data:user
         })
    })
    }
)
 