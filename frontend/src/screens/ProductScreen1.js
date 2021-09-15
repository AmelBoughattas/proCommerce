import React, { useEffect, useState } from 'react'
import './ProductScreen1.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../redux/actions/cartActions";
import { getProductDetails } from "../redux/actions/productActions";


const ProductScreen1 = ({ match, history }) => {
    
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.getProductDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id));
        }
    }, [dispatch, match, product]);

    //button add product to cart back
    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push(`/cart`);
    };

    return (
        <div className="productscreen1">
               {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                <>  
            <div className="proScreen__">
                
                <div id="containerDetails">

                    <div class="product-details">
                       <div className="product-details-desc">
                        <h1 className="left__name">{product.name}</h1>
                        <p class="information">Description: <span> {product.description}</span></p>
                        <p class="information information_qty">  Qty
                                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                    {[...Array(product.countInStock).keys()].map((x,i) => (
                                        <option key={"oprtion2" + i} value={x + 1}>
                                            {x + 1}
                                        </option>
                                    ))}
                                </select>
                        </p>
                        </div>

                        <div class="control">
          
                             <button class="btnn" type="button"   onClick={addToCartHandler}>
                               <span class="pricePro" style={{ padding: "10px 20px"}}>{product.price}TND</span>
                                <span class="shopping-cart" style={{ padding: "12px 20px"}}><i class="fa fa-shopping-cart char" aria-hidden="true"></i></span>
                                <span class="buy" style={{marginTop:"10px", marginLeft:"-8px", paddingRight:"15px"}}> Add to cart</span>
                            </button> 
                         
                        </div>  
                   
                     
                    </div>

                    <div class="product-image product_img_res">

                        <img className="product_image__" src={product.imageUrl && product.imageUrl.url} alt={product.name} /> 

                        <div class="info">
                            <h2>Détails</h2>
                            <ul>
                                <li><strong>Title : </strong>{product.name}</li>
                                <li><strong>Catégorie : </strong>{product.categorie}</li>
                                <li><strong>Stocke : </strong>  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}</li>
                                <li><strong>Prix : </strong>{product.price} TND</li>
                            </ul>
                        </div>
                    </div>

                </div>




            </div>
            </>
            )}
        </div>
    )
}

export default ProductScreen1
