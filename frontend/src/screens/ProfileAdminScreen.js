import React, { useEffect } from 'react';
import './ProfileAdminScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, logout } from '../redux/actions/authActions'
import { Link, Redirect } from 'react-router-dom';
/* import AddPost from '../components/AddPost' */
import { getProducts } from '../redux/actions/productActions';
import AddProduct from '../components/AddProduct';
/* import Post from '../components/Post'; */

const ProfileAdminScreen = () => {

    const auth = useSelector(state => state.auth)
    /*  const posts =useSelector(state => state.posts)  */

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProfile())
        dispatch(getProducts())
    }, [dispatch])

    return (
        <div style={{margin:"160px"}}>
            <Link to="/"><h1 >Profile page for admin {auth.user && auth.user.firstname}</h1></Link>
          {/*   <AddPost></AddPost> */}
          <AddProduct></AddProduct>
            <div>
                {/*    {posts.postList.length && posts.postList.map((post,index)=><Post key={index} post={post}></Post>)  } */}
               
            </div>

        </div>


    )
}

export default  ProfileAdminScreen

