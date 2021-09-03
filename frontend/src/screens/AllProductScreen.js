import './AllProductScreen.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../components/Product";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";


const AllProductScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  
  return (
    <div className="homescreenPro" >
        <h2 className="homescreenPro__title">All products</h2>
       
        <div className="homescreenPro__products">

          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h3>{error}</h3>
          ) : (
            products.map((product) => (
              <Product
                key={product._id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
                productId={product._id}
              />
            ))/* .reverse() */
          )}
        </div>
      </div>
  
  )
}

export default AllProductScreen
