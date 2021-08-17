import './HomeScreen.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Slide.css'
// Components
import Product from "../components/Product";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";


const HomeScreen = () => {

    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts());
      }, [dispatch]);

    return (
        <div className="homescreen">

               <div class="section full-height over-hide px-4 px-sm-0">
                    <div class="container">
                        <div class="row full-height justify-content-center">
                            <div class="col-lg-10 col-xl-8 align-self-center padding-tb">
                                <div class="section mx-auto text-center slider-height-padding">
                                    <input class="checkbox frst" type="radio" id="slide-1" name="slider" checked />
                                    <label for="slide-1"></label>
                                    <input class="checkbox scnd" type="radio" name="slider" id="slider-2" />
                                    <label for="slider-2"></label>
                                    <input class="checkbox thrd" type="radio" name="slider" id="slider-3" />
                                    <label for="slider-3"></label>
                                    <input class="checkbox foth" type="radio" name="slider" id="slider-4" />
                                    <label for="slider-4"></label>
                                    <ul className="ul">
                                        <li className="li">
                                            <span>Ecoutteur</span>
                                        </li>
                                        <li  className="li">
                                            <span>Best Shopping</span>
                                        </li>
                                        <li className="li">
                                            <span>Laptop</span>
                                        </li>
                                        <li className="li">
                                            <span>Laptop</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
          
            <h2 className="homescreen__title">Welcome</h2>
            <div className="homescreen__products">
             
                
            {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
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
          )).reverse()
        )}

            </div>
        </div>
    )
}

export default HomeScreen
