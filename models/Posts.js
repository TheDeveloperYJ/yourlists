const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = new Schema({
    
      text:{
                type:String,
        },
        key:{
            type:Date,
            default:Date.now(),
            required:true
        }
})

module.exports = Post = mongoose.model('posts',PostSchema)