const Command = require("../models/Command");
const cloudinary = require('../helpers/cloudinary');
const uuid = require('uuid')
const moment = require('moment-timezone');
const User=require('../models/User')

const addCommand = async (req, res) => {
  try {
  
    var owner=req.userId
    var newCommand
    const cart = req.body
const createdAt= moment(Date.now()).tz('Europe/Paris').format('LLLL')
    var cartId=uuid.v4()
    cart.map(elm=>{
      newCommand= new Command({...elm,cartId,owner,createdAt})
       newCommand.save()
      return elm
    })
     const user=await User.findById(owner)
    user.commandeList.push(cartId)
     await user.save()
  
    /* console.log(savedProduct) */
    res.json(cart)
  } catch (err) {
    res.status(400).json({ err: err.message })
  }
}

const getCommande = async(req, res)=>{
  try{
  /*   var result={}
    const owner=req.userId
     const user= await User.findOne({_id:owner})
     console.log(user)
     user.commandeList.map(async(elm)=>{
       var list= await Command.find({cartItem:elm}) 
      result={...result,[elm]:list}
    })
    console.log(result) */
    const owner=req.userId
    const commandes= await Command.find({owner:owner})
    
    res.json(commandes)
     }
  catch (err) {
    res.status(400).json({ err: err.message })
  
  }
}

const getAsynCommade = (owner)=>{
  return new Promise(async (resolve,reject)=>{
    var result={}
    
     
     console.log(user)
     user.commandeList.map(async(elm)=>{
       var list= await Command.find({cartId:elm}) 
      console.log(list)
      result={...result,[elm]:list}
    })
    resolve(result)
  })
}


module.exports = { addCommand, getCommande}