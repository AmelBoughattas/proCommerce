import React from 'react';
import './CartCommands.css';

const CartCommande = ({command}) => {
 
    return (
        <div className="containerCartCmd">     
                
           <div className="product__infoCmd">
               <li className="commandeCart">
                  <img className="picture"  style={{ height:"110px", width:"110px"}}   src={command.imageUrl && command.imageUrl.url} alt={command.name} />
             
                <div className="infoCmd__name">{command.name}</div>
                <div className="infoCmd__price"> {command.price} <span className="spanTnd">TND</span></div>
                <div className="infoCmd__qty">{command.qty}</div> 
                </li> 
                
            </div>
        </div>
    )
}

export default CartCommande
