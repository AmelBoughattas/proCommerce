import './CartScreen.css';
import CartItem from '../components/CartItem';
import { useSelector, useDispatch } from "react-redux";
import { Link /*1 useHistory  */ } from "react-router-dom";
import GooglePayButton from '@google-pay/button-react';

/*1 import {useState} from 'react'; */

// Actions
import { addToCart,/* 1 clearCart,  */removeFromCart } from "../redux/actions/cartActions";
import { addCommand } from '../redux/actions/commandActions';
import { useState } from 'react';

/* 1 import Paypal from '../components/Paypal'; */
const CartScreen = () => {


  const dispatch = useDispatch();
  /*1 const history=useHistory() */ /*1 clear */
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

  //Payement
  /*1    const [payement, setPayement] = useState(false) */

  /*1 const handlePayment = ()=>{
    localStorage.clear()
    dispatch(clearCart())
    history.push('/')
  } */
 
 

  return (
    <>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
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
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </div>
          
          <div>
            {/*  <Link /> */}
              <button onClick={newCommand}>Payement</button>
            {/* </Link> */}

            {/* Google Pay */}
            <GooglePayButton
              environment="TEST"
              paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                  {
                    type: 'CARD',
                    parameters: {
                      allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                      allowedCardNetworks: ['MASTERCARD', 'VISA'],
                    },
                    tokenizationSpecification: {
                      type: 'PAYMENT_GATEWAY',
                      parameters: {
                        gateway: 'example',
                        gatewayMerchantId: 'exampleGatewayMerchantId',
                      },
                    },
                  },
                ],
                merchantInfo: {
                  merchantId: '12345678901234567890',
                  merchantName: 'Demo Merchant',
                },
                transactionInfo: {
                  totalPriceStatus: 'FINAL',
                  totalPriceLabel: 'Total',
                  totalPrice: '2',
                  currencyCode: 'USD',
                  countryCode: 'US',
                },
                shippingAddressRequired: true,
                callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
              }}
              onLoadPaymentData={paymentRequest => {
                console.log('Success', paymentRequest);
              }}
              onPaymentAuthorized={paymentData => {
                console.log('Payment Authorised Success', paymentData)
                return { transactionState: 'SUCCESS' }
              }
              }
              onPaymentDataChanged={paymentData => {
                console.log('On Payment Data Changed', paymentData)
                return {}
              }
              }
              existingPaymentMethodRequired='false'
              buttonColor='black'
              buttonType='Buy'
            />

            {/* 1 {payement ? (
                  <Paypal />
                ) : (
                <button  onClick={()=>setPayement(true)} >Payement</button>
                )} */}
          </div>
        </div>

      </div>
    </>
  );
};

export default CartScreen
