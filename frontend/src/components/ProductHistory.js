import "./ProductHistroy.css";

const ProductHistory = ({ imageUrl,  price, name}) => {
      

    return (
        <div className="command">
            <img src={imageUrl} alt={name} />

            <div className="product__info">
                <p className="info__name">{name}</p>
              
                <p className="info__price">${price}</p>
            
               
               
            </div>
        </div>
    )
}

export default ProductHistory
