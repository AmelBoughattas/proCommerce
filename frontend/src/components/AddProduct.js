import React, { useState } from 'react';
import './AddPost.css';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions/productActions';

const AddProduct = () =>  {

    const [selectedImage, setSelectedImage] = useState("")
    const [newProduct, setNewProduct] = useState({
        imageUrl:'',
        name:'',
        description: '',
        price:'',
        countInStock:'',
        categorie:''
        
    })

    const handleImageChange = (e) => {
    if (e.target.files.length) {
        //display image
        const myImage = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(myImage)
        reader.onloadend = () => {
            setSelectedImage(reader.result)
            setNewProduct({ ...newProduct, imageUrl: reader.result })
        }
    }

}

const dispatch = useDispatch()
const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(addProduct(newProduct))
 
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Contact Form :</h1>
                <img name="preview" style={{ height: "200px" }} src={selectedImage || "images/product_default.png"} alt="preview" />
                <input accept="image/*" type="file" name="imageUrl" onChange={handleImageChange}   ></input>
                <input name="description" onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} placeholder="description" value={newProduct.description} type="text"></input>
               
                   {/*  <div> */}
                        <label>
                            <span>Name Product</span><input /* id="name" */  type="text" onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} value={newProduct.name} name="name" />
                        </label>
                        <label>
                            <span>price</span><input /* id="price" */ onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} type="number" value={newProduct.price} name="price" />
                        </label> <label>
                            <span>categorie</span><input /* id="categorie" */ onChange={(e) => setNewProduct({ ...newProduct, categorie: e.target.value })} value={newProduct.categorie} type="text" name="categorie" />
                        </label>

                        <label>
                            <span>Stocke</span><input name="countInStock" /* id="countInStock" */ onChange={(e) => setNewProduct({ ...newProduct, countInStock: e.target.value })} value={newProduct.countInStock} type="number"  />
                        </label>
                       

                        <button className="btn_save_article" type="submit">save</button>
                       {/*  <label>
                            <span>Subject</span><input id="subject" type="text" name="subject" />
                        </label> */}

                     {/*    <label>
                            <span>Message</span><textarea id="feedback" name="feedback"></textarea>
                            <input type="button" value="Submit Form" />
                        </label> */}

                 {/*    </div> */}
            
            </form>
            
        </div>
    )
}

export default AddProduct;