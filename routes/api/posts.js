const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

const Post = require('../../models/Posts')

router.post('/add',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const newPost = new Post({
      text:req.body.text,
     key:req.body.key
    })
    newPost.save((err,post)=>{
        if(err){
            return res.json({msg:'failed'+ err})
        }
        return res.json({msg:'Success'})
    })
    })

router.get('/posts',passport.authenticate('jwt',{session:false}), (req, res) => {
    Post.find()
    .then(posts => {
       return res.json({msg:'Fteched all'})
    })
})

module.exports = router;