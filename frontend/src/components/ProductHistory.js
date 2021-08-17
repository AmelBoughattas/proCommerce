import "./ProductHistroy.css";
const ProductHistory = ({ imageUrl, description, price, name, productId }) => {
    return (
        <div className="product_his">
            <img src={imageUrl} alt={name} />

            <div className="product__info">
                <p className="info__name">{name}</p>
              
                <p className="info__price">${price}</p>

               
            </div>
        </div>
    )
}

export default ProductHistory
