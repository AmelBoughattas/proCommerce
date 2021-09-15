import React, { useEffect } from 'react';
import './ProfileAdminScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../redux/actions/authActions'
import { getProducts } from '../redux/actions/productActions';
 import AddProducts from '../components/AddProducts'; 
const ProfileAdminScreen = () => {

    const auth = useSelector(state => state.auth)
  

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProfile())
        dispatch(getProducts())
    }, [dispatch])

    return (
        <div className="profileAdmin" >
            
            <div className="profileAdmin__form">
                <div className="h1_">
                    <h1>
                        Profile admin {auth.user && auth.user.firstname}
                    </h1>
                </div>
               <AddProducts></AddProducts> 
            </div>

        </div>


    )
}

export default ProfileAdminScreen

