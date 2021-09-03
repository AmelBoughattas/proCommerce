import React, { useState } from 'react';
import './AddPost.css';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions/productActions';
import 'bootstrap/dist/css/bootstrap.min.css';


const AddProduct = () => {

    const [selectedImage, setSelectedImage] = useState("")
    const [newProduct, setNewProduct] = useState({
        imageUrl: '',
        name: '',
        description: '',
        price: '',
        countInStock: '',
        categorie: ''

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
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addProduct(newProduct))

    }
    return (
        <div>
            <div className="container_profile">
                <form className="form" onSubmit={handleSubmit} >
                    <div className="margin">
                        <div className="ImageUrl imgpro">
                            <img name="preview" className="inputpro" style={{ height: "200px" }} src={selectedImage || "images/product_default.png"} alt="preview" />
                            <input className="inputImg" accept="image/*" type="file"  name="imageUrl" onChange={handleImageChange} required  ></input>
                        </div><br/>
                        <div className="inputGroup">
                            <input type="text" name="name" className="input_contact inputpro" onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} value={newProduct.name}  required />
                            <span className="inputBar"></span>
                            <label>Name Product</label>
                        </div>
                        
                        <div className="inputGroup">
                        <textarea type="textarea" cols="10" rows="4"  name="description" onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}  value={newProduct.description} required></textarea>
                        <span className="inputBar"></span>
                        <label>Description</label>
                    </div><br/>
                        <div className="inputGroup">
                            <input type="text" name="categorie" className="input_contact" onChange={(e) => setNewProduct({ ...newProduct, categorie: e.target.value })} value={newProduct.categorie} required />
                            <span className="inputBar"></span>
                            <label>Catégorie</label>
                        </div><br/>
                        <div className="inputGroup">
                            <input type="number" name="price" className="input_contact"  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}  value={newProduct.price}  required />
                            <span className="inputBar"></span>
                            <label>Price</label>
                        </div><br/>
                        <div className="inputGroup">
                            <input type="number" name="stocke" className="input_contact"  onChange={(e) => setNewProduct({ ...newProduct, countInStock: e.target.value })} value={newProduct.countInStock} required />
                            <span className="inputBar"></span>
                            <label>Stocke</label>
                        </div>

                        <button className="btn_contact">Add Product</button>
                    </div></form>
            </div>
          {/*   <form onSubmit={handleSubmit}>
                <h1>Contact Form :</h1>
                <img name="preview" style={{ height: "200px" }} src={selectedImage || "images/product_default.png"} alt="preview" />
                <input accept="image/*" type="file" name="imageUrl" onChange={handleImageChange}   ></input>
                <textarea rows="5" cols="70" name="description" onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} placeholder="description" value={newProduct.description} type="text"></textarea>


                <label>
                    <span>Name Product</span><input className="input_admin" type="text" onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} value={newProduct.name} name="namepro" />
                </label>
                <label>
                    <span>price</span><input className="input_admin" onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} type="number" value={newProduct.price} name="price" />
                </label> <label>
                    <span>categorie</span><input className="input_admin" onChange={(e) => setNewProduct({ ...newProduct, categorie: e.target.value })} value={newProduct.categorie} type="text" name="categorie" />
                </label>

                <label>
                    <span>Stocke</span><input className="input_admin" name="countInStock" onChange={(e) => setNewProduct({ ...newProduct, countInStock: e.target.value })} value={newProduct.countInStock} type="number" />
                </label>

                <button className="btn_save_article" type="submit">save</button>


            </form> */}

        </div>
    )
}

export default AddProduct;