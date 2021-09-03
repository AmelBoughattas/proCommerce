import './HomeScreen.css';
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../components/Product";


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
            
            {/*  <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image_Carousel"
                        src="https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image_Carousel"
                        src="https://images.unsplash.com/photo-1545112719-ce81d7de0b71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=811&q=80"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image_Carousel"
                        src="https://images.unsplash.com/photo-1545112719-ce81d7de0b71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=811&q=80"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
             <Carousel fade className="carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgPro"
                        src="https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                      
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgPro"
                        src="https://images.unsplash.com/photo-1545112719-ce81d7de0b71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=811&q=80"

                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgPro"
                        src="https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgPro"
                        src="https://images.unsplash.com/photo-1618227897914-804b8ba7809a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=998&q=80"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgPro"
                        src="https://images.unsplash.com/photo-1598432920368-efd9c1523f3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1786&q=80"         alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> 

            {/* <div class="section full-height over-hide px-4 px-sm-0">
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
                </div>  */}

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
                    ))  /* .reverse() */
                )}


            </div>
        </div>
    )
}

export default HomeScreen
