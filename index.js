const express = require('express')
const app = express();
const keys = require('./config/keys')
const users = require('./routes/api/users') 
const posts = require('./routes/api/posts') 


app.get('/',(req,res)=>{
    res.send({hi:'Hello'})
})


app.get('/home',(req,res)=>{
    res.send({has:'Hey from express'})
})

mongoose.connect(keys.mongoURI)
.then(()=>console.log('Database is on'))

app.use('/api/users/',users)
app.use('/api/posts/',posts)

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(PORT + 'Server is listening')
})


//Server up and running
//Now just 