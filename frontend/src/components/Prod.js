import React from 'react'
import './Prod.css';
import "./Product.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useState } from "react";
import { deleteProduct, updateProduct } from "../redux/actions/productActions";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from "react-bootstrap";
import swal from 'sweetalert';


const Prod = ({ imageUrl, description, price, name, productId, product }) => {


    /*  ----------------DELETE-----------------------  */
    const dispatch = useDispatch()
    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(deleteProduct(productId))
        swal("Product deleted with success" );
    };


    /*  ------ editer price-----*/
    const [edit, setEdit] = useState(true)
    const [newPrice, setNewPrice] = useState(price);


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateProduct(productId, newPrice))
       
        swal("Price edited with success" );
         
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const user = useSelector(state => state.auth.user)


    return (
        <div className="product">
            <div className="img-wrapper">
                <img src={imageUrl && imageUrl.url} alt={name} />
                <h2>{name}</h2>

                {/* ----------------------------------------------------Modal price----------------------------------------------------------- */}
                {edit ? (<>
                    < p className="info__price"  > {price} TND</p>

                    <Modal className="modal " show={show} onHide={handleClose}  >
                        <Modal.Body className="my-modal">
                            <Modal.Header >
                                <Modal.Title style={{ color: '#f37f77',fontWeight:"bold", marginBottom:'-10px', fontFamily: "'Montserrat', sans-serif", fontSize: '20px' }} closeButton> Edit Price</Modal.Title>
                            </Modal.Header>
                            <div class="login-box" show={show} onHide={handleClose} >
                                <form>
                                        <div class="user-box">
                                            <input className="input_Change"
                                                type="text"
                                                value={newPrice}
                                                onChange={(e) => setNewPrice(e.target.value)}
                                            />
                                        </div>
                                            <a href="#" onClick={handleSubmit}>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                Save
                                            </a>                                  
                                    </form>
                                    </div>
                                </Modal.Body>

                            </Modal>
                        </>) :
                        (
                        <ul>
                            <li>
                                < p className="info__price" > {price} TND</p>
                            </li>
                        </ul>
                        )
                }
                        {/* -----------------------------------------End Modal Price------------------------------------------- */}

                        {/* --------------------------------------------Button ---------------------------------------------------- */}
                        <ul>
                            <li className="Link__Detail">
                                <Link to={`/product/${productId}`} className="info__button">
                                    Details
                                </Link>
                            </li>

                            <li className="icon_instagram"><a href="https://www.instagram.com/atulkprajapati2000/" rel="noreferrer" target="_blank"><i class="fab fa-instagram"></i></a></li>

                            <li className="icon_facebook"><a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><i class="fab fa-facebook-square"></i></a></li>

                            <li style={{ background: "transparent" }}>
                                {user && user.role === 'admin' &&
                                    <ul>
                                        <li>
                                            <EditOutlined className="EditOutlined" style={{ background: "tomato" }} onClick={handleShow} />
                                        </li>
                                        <li>
                                            <DeleteOutlined className="DeleteOutlined" style={{ background: "tomato" }} onClick={handleDelete} />
                                        </li>
                                    </ul>
                                }

                            </li>
                            {/* ************************************* */}



                        </ul>
                    </div>
                </div>
                )
}

                export default Prod
