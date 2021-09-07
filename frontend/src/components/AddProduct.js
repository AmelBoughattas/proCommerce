import React, { useState } from 'react';
import './AddProduct.css';
import { useDispatch, useSelector, } from 'react-redux';
import { addProduct } from '../redux/actions/productActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import chariotLogo from "../Images/chariotLogo.png"

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

    const success = useSelector(state => state.getProducts.success)

    return (
        <div>
            <div>
                {
                    success !== false ? (
                        <div className="msg-succ" style={{ color: "black", backgroundColor: "green"}} id="alert-success">
                            <h3> {success} </h3>
                        </div>
                    ) : ''
                }
            </div>
            
            <div class="container register">
                <div class="row container__row">
                    <div class="col-md-3 register-left">
                       {/*  <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" /> */}
                       <img src={chariotLogo} alt=""/>
                        <h3>MAYCOLL</h3>
                       {/*  <p>You are 30 seconds away from earning your own money!</p> */}
                        {/* <input type="submit" name="" value="Login" /><br /> */}
                    </div>
                    <div class="col-md-9 register-right">

                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Ajouter Aritcle</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <form className="form" onSubmit={handleSubmit} >
                                            <div className="margin">
                                                <div className="ImageUrl imgpro">
                                                    <img name="preview" className="inputpro" style={{ height: "100px", marginTop:"-100px", marginLeft:"130px" }} src={selectedImage || "images/product_default.png"} alt="preview" />
                                                    <input className="inputImg" accept="image/*" type="file" name="imageUrl" onChange={handleImageChange} required  ></input>
                                                </div>
                                                <div className="Add">
                                                    <div className="inputGroup">
                                                        <input type="text" name="name" className="input_contact inputpro" onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} value={newProduct.name} required />
                                                        <span className="inputBar"></span>
                                                        <label>Name Product</label>
                                                    </div>

                                                    <div className="inputGroup">
                                                        <input type="text" name="categorie" className="input_contact" onChange={(e) => setNewProduct({ ...newProduct, categorie: e.target.value })} value={newProduct.categorie} required />
                                                        <span className="inputBar"></span>
                                                        <label>Catégorie</label>
                                                    </div>
                                                    <div className="inputGroup">
                                                        <input type="number" name="price" className="input_contact" onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} value={newProduct.price} required />
                                                        <span className="inputBar"></span>
                                                        <label>Price</label>
                                                    </div>
                                                    <div className="inputGroup">
                                                        <input type="number" name="stocke" className="input_contact" onChange={(e) => setNewProduct({ ...newProduct, countInStock: e.target.value })} value={newProduct.countInStock} required />
                                                        <span className="inputBar"></span>
                                                        <label>Stocke</label>
                                                    </div>

                                                    <div className="inputGroup">
                                                        <textarea type="textarea" cols="10" rows="4" name="description" onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} value={newProduct.description} required></textarea>
                                                        <span className="inputBar"></span>
                                                        <label>Description</label>
                                                    </div>
                                                </div>

                                                <button className="btn_contact">Add Product</button>
                                            </div></form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AddProduct;