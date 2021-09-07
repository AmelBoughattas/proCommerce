const Product = require("../models/Product");
const cloudinary = require('../helpers/cloudinary')

const addProduct = async (req, res) => {
  try {
    const {  name,imageUrl,description, price,countInStock, categorie } = req.body
    const newProduct = new Product({
      name,
      imageUrl,
      description,
      price,
      countInStock,
      categorie,
      /* owner : req.userId */
    })
    if (imageUrl) {
      const savedImage = await cloudinary.uploader.upload(imageUrl, {
        timeout: 60000,
        upload_preset: "galery"
      })
      newProduct.imageUrl = {
        url: savedImage.url,
        public_id: savedImage.public_id
      }

    }
    const savedProduct = await newProduct.save()
    /* console.log(savedProduct) */
    res.json(savedProduct)
  } catch (err) {
    res.status(400).json({ err: err.message })
  }
}

//// get product
const getProducts = async (req, res) => {
  try 
  {  
    const products = await Product.find({})
    res.json(products);

  } 
  catch (err) {
    res.status(400).json({ message: "Server Error" });
  }
};


const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  }catch(err){
    res.status(400).json({errors:[{msg: err.message}]})
  }
};


const getMyProduct =async (req,res) =>{
  try{
      const posts =  await Product.find({owner:req.userId})
      res.json({products})

  }catch(err){
    res.status(400).json({errors:[{msg: err.message}]})
  }
  
}

const deleteProduct = async(req, res)=>{
  try{
   const deleteProduct = await Product.findByIdAndDelete(req.params.id)
   await cloudinary.uploader.destroy(deleteProduct.imageUrl.public_id)
    res.json(deleteProduct)
  }
  catch(err)
  {
    res.status(400).json({errors:[{msg: err.message}]})
  }
}

const updateProduct = async(req, res)=>{
  try{
   const updateProduct = await Product.findByIdAndUpdate(req.params.id,{...req.body})
    res.json(updateProduct)
    
  }
  catch(err)
  {
    res.status(400).json({errors:[{msg: err.message}]})
  }
}

/* const getProductsCount = async (req, res) =>{
  try{
     const count = await Product.find().countDocuments()
     res.json({count})
  }
  catch(err)
  {
     res.status(400).json({errors:[{msg: err.message}]})
  }
} */
module.exports = { addProduct, getProducts, getProductById, getMyProduct, deleteProduct, updateProduct }
