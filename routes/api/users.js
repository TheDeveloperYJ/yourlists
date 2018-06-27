const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.json({mgs:'This works'})
})

module.exports = router;