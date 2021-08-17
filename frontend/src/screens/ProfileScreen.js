 import React from 'react'
 import './ProfilsScreen.css';
  import { useSelector} from 'react-redux';
/*
import ProductHistory from '../components/ProductHistory';
import {getProfile, logout } from '../redux/actions/authActions' */
/* import { getProducts } from '../redux/actions/productActions'; */
/* import {Redirect} from 'react-router-dom';
 import AddPost from '../components/AddPost' */

/* import Post from '../components/Post'; */


//Actions
/* import { getProducts as listProducts } from "../redux/actions/productActions"; */

const ProfileScreen = ({ imageUrl, description, price, name, productId }) => {

     const auth =useSelector(state => state.auth) 
     /* const posts =useSelector(state => state.posts)  */

    /*  const dispatch = useDispatch()
     useEffect(() => {
         dispatch(getProfile())
         dispatch(getProducts())
     }, [dispatch]) */
  


    /* const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;
    useEffect(() => {
        dispatch(listProducts());
      }, [dispatch]); */
    return (
       <div className="container">
          <h1>***Profile page for {auth.user && auth.user.firstname}</h1>

                  
          {/* {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <ProductHistory
            
              key={product._id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )} */}


        {/* <AddPost></AddPost> */}
        <div>{/* {posts.postList.length && posts.postList.map((post,index)=><Post key={index} post={post}></Post>)  } */}</div>
          
       </div> 

        
    )
}

export default ProfileScreen
