const express = require('express')
const app = express();

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')

const keys = require('./config/keys')
const users = require('./routes/api/users') 
const posts = require('./routes/api/posts') 


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send({hi:'Hello'})
})


app.get('/home',(req,res)=>{
    res.send({has:'Hey from express'})
})

mongoose.connect(keys.mongoURI)
.then(()=>console.log('Database is on'))

passport.use(passport.initialize())
require('./config/passport')(passport)


app.use('/api/users/',users)
app.use('/api/posts/',posts)

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(PORT + 'Server is listening')
})


//Server up and running
//Now just 