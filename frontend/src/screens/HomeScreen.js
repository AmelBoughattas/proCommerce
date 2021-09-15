import './HomeScreen.css';
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../components/Prod";


//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

//reactBootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';


const HomeScreen = () => {

    const dispatch = useDispatch();


    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
 
   
    return (
        <div className="homescreen">
            
             <Carousel fade className="carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgPro"
                        src="https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                      
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>MAYCOLL</h3>
                        <p>Welcome in website MAYCOLL</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgPro"
                        src="https://images.unsplash.com/photo-1545112719-ce81d7de0b71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=811&q=80"

                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Welcom Maycoll</h3>
                        <p>We have best technology</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgPro"
                        src="https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>MayColl is an e-commerce</h3>
                        <p>Which has stores of different technology</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgPro"
                        src="https://images.unsplash.com/photo-1618227897914-804b8ba7809a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=998&q=80"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>MAYCOLL</h3>
                        <p>We have best technology</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgPro"
                        src="https://images.unsplash.com/photo-1598432920368-efd9c1523f3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1786&q=80"         alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>MayColl is an e-commerce</h3>
                        <p>Best technology with the best price</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> 

 
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
