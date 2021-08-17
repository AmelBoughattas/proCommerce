const mongoose = require("mongoose");
const moment = require('moment-timezone');

const productSchema = mongoose.Schema({
  name: {
    type: String,/* 
    required: true, */
  },
  imageUrl:{
    type:mongoose.Schema.Types.Mixed,

},
  description: {
    type: String,
  /*   required: true, */
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
 
  categorie:{
    type:String,
    required:true
  },
  owner:{
    type:mongoose.Types.ObjectId,
    ref:'user'
},
isValidate:{
    type:Boolean,
    default:false
},
createdAt: {
    type: Date,
    default: moment(Date.now()).tz('Europe/Paris').format('LLLL')
},
});

module.exports = mongoose.model("product", productSchema);

/* module.exports = Product; */
