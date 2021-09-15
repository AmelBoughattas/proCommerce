import React, { useState } from 'react'
import './AddProducts.css';  
import { useDispatch, useSelector, } from 'react-redux';
import { addProduct } from '../redux/actions/productActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import chariotLogo from "../Images/chariotLogo.png"

const AddProducts = () => {
    const [value,setvalue]=useState()
    const [selectedImage, setSelectedImage] = useState("");
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
         setvalue("")
    }


    const success = useSelector(state => state.getProducts.success)
    
    return (
        <div className="container_Register register">
            <div className="alert_Adding">
                {
                    success !== false ? (
                        <div className="succ_Adding" style={{ color: "#68283b", background: "#f7d7da", fontWeight: "bold" }} id="alert-success">
                            <h3> {success} </h3>
                        </div>
                    ) : ''
                }
            </div>
            <div class="row">
                <div class="col-md-3 register-left">
                    <img src={chariotLogo} alt="" />
                    <h1>MAYCOLL</h1>
                    <br />
                </div>
                <div class="col-md-9 register-right">

                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h3 class="register-heading">Ajouter Article</h3>
                            <div class="row register-form">

                                <div class="col-md-6">
                                    <div class="form-group inputpro">
                                        <img name="preview" style={{ height: "100px", marginTop: "-99px", marginLeft: "130px" }} src={selectedImage || "images/product_default.png"} alt="preview" />
                                        <input className="inputImg" accept="image/*" type="file" name="imageUrl" onChange={handleImageChange} required  ></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Nom Article *" onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} value={value}  required/> 
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Categorie *" onChange={(e) => setNewProduct({ ...newProduct, categorie: e.target.value })}   value={value}   required />
                                    </div>
                                    <div class="form-group">
                                        <input type="number" class="form-control" placeholder="Prix *" onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}  value={value} required />
                                    </div>
                                    <div class="form-group">
                                        <input type="number" class="form-control" placeholder="Stocke *" onChange={(e) => setNewProduct({ ...newProduct, countInStock: e.target.value })}  value={value}  required />
                                    </div>
                                </div>
                                <div class="col-md-6 input__desc">
                                    <div class="form-group form_g_dec">
                                        <textarea cols="6" rows="8" type="text" value={value} class="form-control form_g_dec" placeholder="Votre Description *..." onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} required />
                                    </div>
                                    <button type="submit" className="glow-on-hover " onClick={handleSubmit}>Save </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddProducts
