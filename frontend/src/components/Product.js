import "./Product.css";
import { Link } from "react-router-dom";
import {   useSelector } from "react-redux";
/* import { EditOutlined , DeleteOutlined  } from '@ant-design/icons';  */
/* import { useState } from "react"; */
/*  import { deleteProduct } from "../redux/actions/productActions";  */
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownButton,Dropdown } from 'react-bootstrap';

const Product = ({ imageUrl, description, price, name, productId,product}) => {

 /*    const auth = useSelector(state => state.auth) */
    

/*   const dispatch = useDispatch()
   const handleDelete =(e)=>{
       e.preventDefault()
       dispatch(deleteProduct(product._id)) 
   } */
 
const user = useSelector(state=> state.auth.user)
    return (
        <div className="product">
             {/* <DeleteOutlined onClick={handleSubmit}/>
                 <EditOutlined />  */}
           {/*  <button onClick={handleDelete}>Delete</button> */}

           
           
                {user && user.role=== 'admin' &&
                       
                       <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                          <Dropdown.Item href="#/action-1" /* onClick={handleDelete} */>delete</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">edit</Dropdown.Item>
                      </DropdownButton>
                }
           
           {/* {user && user.role=== 'admin' &&
                       
                       <EditOutlined />  
                        } */}
           <img src={imageUrl && imageUrl.url} alt={name} />
            <div className="product__info">

                <p className="info__name">{name}</p>
                <p className="info__description">
                    {description.substring(0, 100)}...
                </p>
                <p className="info__price">${price}</p>

                <Link to={`/product/${productId}`} className="info__button">
                    View
                </Link>
            </div>

        </div>
    )
}

export default Product
