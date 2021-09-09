import "./Product.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
/* import { DeleteOutlined,EditOutlined } from '@ant-design/icons'; */
import { useState } from "react";
import { deleteProduct, getProducts, updateProduct } from "../redux/actions/productActions";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, DropdownButton, Dropdown } from "react-bootstrap";

const Product = ({ imageUrl, description, price, name, productId, product }) => {

    /*  ----------------DELETE-----------------------  */
    const dispatch = useDispatch()
    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(deleteProduct(productId))
        dispatch(getProducts())
    };


    /*  ------ editer price-----*/
    const [edit, setEdit] = useState(true)
    const [newPrice, setNewPrice] = useState(price);

   /*  const startedit = () => {
        setEdit(false)
        setNewPrice({
            ...newPrice,
            price: price
        })
    } */

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateProduct(productId,))
        dispatch(getProducts())

        setNewPrice({
            ...newPrice,
            price: ""
        })
        setEdit(true)
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const user = useSelector(state => state.auth.user)
    return (

        <div className="product">

            {user && user.role === 'admin' &&
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item href="#/action-1" onClick={handleDelete}>delete</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={handleShow}  >edit</Dropdown.Item>
                </DropdownButton>

              /*   <DeleteOutlined style={{width:"20px", height:"20px"}} onClick={handleDelete} />
      */       }


            <img src={imageUrl && imageUrl.url} alt={name} />
            <div className="product__info">

                <p className="info__name">{name}</p>
                <p className="info__description">
                    {description.substring(0, 100)}...
                </p>

                {/* EDIT PRICE */}

                {edit ? (<>


                    < p className="info__price"  > {price} TND</p>
                    <Modal className="modal" show={show} onHide={handleClose}  >
                        <Modal.Body className="my-modal"  >
                            <Modal.Header >
                                <Modal.Title style={{ color: 'white', marginBottom: '20px', fontSize: '50px' }} closeButton>Edit a task</Modal.Title>
                            </Modal.Header>

                            <div class="col px-1 m-1 d-flex align-items-center">
                                <input className="input_Change"
                                    type="text"
                                    value={newPrice}
                                    onChange={(e) => setNewPrice(e.target.value)}
                                />
                            </div>
                            <div>
                                <Button className="task-button btnSve" variant="primary" onClick={handleSubmit}>
                                    Save
                                </Button>
                            </div>
                        </Modal.Body>

                    </Modal>
                </>) :
                    (
                        < p className="info__price" > {price} TND</p>
                    )

                }



                <Link to={`/product/${productId}`} className="info__button">
                    Details
                </Link>
            </div>

        </div>
    )
}

export default Product
