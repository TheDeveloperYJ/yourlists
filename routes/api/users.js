const express = require('express')
const router = express.Router()

const User = require('../../models/User')
const brcypt = require('bcryptjs')
const passport = require('passport')

const jwt = require('jsonwebtoken')
const keys = require('../../config/keys')
router.get('/test',(req,res)=>{
    res.json({mgs:'This works'})
})


router.post('/register',(req,res)=>{
User.findOne({email:req.body.email})
  .then(user =>{
      if(user){
          res.status(400).json({email:'Email already exists'})
      }else{
          const newUser = new User({
              name:req.body.name,
              email:req.body.email,
              password:req.body.password
          })

          brcypt.genSalt(10,(err,salt) =>{
              brcypt.hash(newUser.password,salt,(err,hash)=>{
                  if(err) throw err;
                  newUser.password = hash;
                  newUser.save()
                  .then(user =>{
                      res.json(user)
                  })
                  .catch(err =>{
                      console.log(err)
                  })
                      
              })
          })
      }
  })
})

router.post('/login',(req,res)=>{
   const email = req.body.email
   const password = req.body.password

   User.findOne({email:email})
   .then(user=>{
     if(!user){
         res.status(404).json({email:'Email not found'})
     }

     brcypt.compare(password,user.password)
     .then(isMatch => {
         if(isMatch){
            //  res.json({msg:'Success'})

            const payload = {id:user.id,name:user.name}
            jwt.sign(payload,keys.SecretKey,{expiresIn:3600},(err,token)=>{
                res.json({
                  success:true,
                  token:'Bearer '+token
                })
            })
         }else{
             res.status(400).json({password:'Password incorrect'})
         }
     })
   })

})


router.get('/current', passport.authenticate('jwt', { session: false}),(req,res)=>{
    res.json({mgs:'Success'})
})
module.exports = router;