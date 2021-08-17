const mongoose = require("mongoose");
const moment = require('moment-timezone');

const CommandSchema = mongoose.Schema({
    cartId:String,
 
  imageUrl:{
    type:mongoose.Schema.Types.Mixed,
},
name: {
    type: String,
    required: true, 
  },
  price: {
    type: Number,
    required: true,
  },
  
  qty:{
     type:Number,
     required:true,
  },
   
  owner:{
    type:mongoose.Types.ObjectId,
    ref:'user'
},
isValidate:{
    type:Boolean,
    default:true
},
createdAt: {
    type: Date,
}
});

module.exports = mongoose.model("command", CommandSchema);

