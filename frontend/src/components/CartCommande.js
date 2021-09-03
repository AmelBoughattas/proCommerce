import React from 'react';
import './CartCommands.css';

const CartCommande = ({command}) => {
 
    return (
        <div>
      
           <div className="product__infoCmd">
               <div className="imageUrlCmd">
                  <img /* c */ src={command.imageUrl && command.imageUrl.url} alt={command.name} />
               </div>
                <p className="infoCmd__name">{command.name}</p>
                <p className="infoCmd__price">${command.price}</p>
                <p className="infoCmd__qty">{command.qty}</p>  
                
            </div>
        </div>
    )
}

export default CartCommande
