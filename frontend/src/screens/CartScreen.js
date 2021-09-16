import './CartScreen.css';
import CartItem from '../components/CartItem';
import { useSelector, useDispatch } from "react-redux";
import { Link   } from "react-router-dom";

/* Paypal */
import { PayPalButton } from "react-paypal-button-v2";

// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import { addCommand } from '../redux/actions/commandActions';


import swal from 'sweetalert'

const CartScreen = () => {


  const dispatch = useDispatch();


  const cart = useSelector((state) => state.cart);


  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };
    
  const newCommand=()=>{
   dispatch(addCommand(cart.cartItems)) 
   
  
  }
 
 const auth = useSelector((state) => state.auth);
  return (
    <>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Panier</h2>

          {cartItems.length === 0 ? (
            <div className="cartscreen__back"> 
             <img className="cartscreen__back__img" src="https://i.imgur.com/dCdflKN.png" alt="" width="200" height="200"  />
             Your Cart Is Empty<br/> <Link to="/"><span style={{fontWeight:'bold'}}>Go Back</span></Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem item={item} qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeHandler} />
            ))
          )}

        </div>
        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Total ({getCartCount()}) article</p>
            <p> {getCartSubTotal()} TND</p>
          </div>
          
          <div>
          { !auth.isAuth  ?  
              <Link to='/login'>  
             <button onClick={newCommand}>Payement</button>
               </Link>  :  <button onClick={newCommand}>Payement</button>}


     { auth.isAuth && auth.user.role==="user"  ?  
     <div className="paypalBtn">
      <PayPalButton  
       options={
      {   clientId:"ARsMDdQNm2aFqqTnK14krc7MeTxzCZfu2Bn-jeICWUhObBzKGno7QBzKifoK8ZUdRi5s28TVhACVZuuL",
         currency:"USD",}
        }
         amount={getCartSubTotal()}
          onSuccess={(details, data) => {
         
          swal("Success, Transaction completed by " + details.payer.name.given_name);
         

         console.log({details: data})
        }}
      /></div>
      :<Link to="/login" />  }
         
                
          </div>
        </div>

      </div>
    </>
  );
};

export default CartScreen
