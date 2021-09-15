/* const Post = require('../models/Post');
const cloudinary = require('../helpers/cloudinary')



const addPost = async(req,res) =>{
    try{
        console.log(req.body)
        const {description, image}  = req.body 
        const newPost = new Post({
        description ,
        owner: req.userId
    })
     if(image){
        const savedImage = await cloudinary.uploader.upload(image,{
            timeout:6000,
            upload_preset:"galery"
        })
      
         newPost.image ={
             url:savedImage.url,
             public_id :savedImage.public_id
         }
     }
     const savedPost = await newPost.save()
     console.log(savedPost)
     res.json(savedPost)
    } catch(err)
    {
        res.status(400).json({err:err.message})
    }
}

const getAllPosts =async (req,res) =>{
    try{
        const posts =  await Post.find()
        res.json(posts)

    }catch(err){
       res.status(400).json({err:err.message})
    }
    
}

const getMyPosts =async (req,res) =>{
    try{
        const posts =  await Post.find({owner:req.userId})
        res.json({posts})

    }catch(err){
       res.status(400).json({err:err.message})
    }
    
}

const deletePost = async(req, res)=>{
    try{
     const deletePost = await Post.findByIdAndDelete(req.params.id)
      res.json(deletePost)
    }
    catch(err)
    {
        res.status(400).json({err:err})
    }
}

const updatePost = async(req, res)=>{
    try{
     const updatePost = await Post.findByIdAndUpdate(req.params.id,{...req.body})
      res.json(updatePost)
    }
    catch(err)
    {
        res.status(400).json({err:err})
    }
}

module.exports = {getAllPosts, getMyPosts, addPost, updatePost, deletePost} */