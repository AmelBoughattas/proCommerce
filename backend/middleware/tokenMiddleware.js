const jwt =require('jsonwebtoken');
require("dotenv").config();
const Post =require("../models/Post");
const Product =require("../models/Product");
const User = require("../models/User");

const tokenMiddleware =async (req,res,next) => { 
    try{
        const token = req.header("auth-token")
        if(!token)
            return res.status(401).json({errors:[{msg:'UNTHORIZED OPERATION !'}]})
        const payload = await jwt.verify(token,process.env.SECRET)
        req.userId = payload.sub
        next()
    }
    catch(err) {
        res.status(401).json({errors:[{msg:err.message}]})
    }

}

const checkAdmin = async (req, res, next) =>{
    try{
        //const product = await Product.findOne({_id:req.params.id, owner:req.userId})
const user= User.findById(req.userId)
         if(!user)
             return res.status(401).json({err:'not authorized !'})

             next()
         
    }
    catch(err){
        return res.status(401).json()
    }

}


module.exports = {tokenMiddleware, checkAdmin}