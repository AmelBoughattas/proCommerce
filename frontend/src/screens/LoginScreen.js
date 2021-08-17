import './LoginScreen.css';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getProfile, login, register } from '../redux/actions/authActions'

const LoginScreen = () => {
      
    //Partie Login
    const [info, setInfo] = useState({
        email: "",
        password: ""
    })
  
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(info))
    }


    const history = useHistory() // contient les fontions de navigationqui permet de naviguer entre les pages
    useEffect(() => {
        dispatch(getProfile())
        if (auth.isAuth &&  auth.user && auth.user.role === 'admin')
            history.push('/profileAdmin')
        else if (auth.isAuth && auth.user &&  auth.user.role === 'user')
            history.push('/profile')
        
    }, [dispatch,history,auth.isAuth,auth.user])

    //Partie Register

    const [info2, setInfo2] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    }) 
    
    const handleRegister =(e) =>{
        e.preventDefault()
       dispatch(register(info2)) 
    }


      
    return (
        <div class="container1">
            <div class="container_Login">
            <form id="signup" onSubmit={handleSubmit}>
                <div class="header">
                    <h3>Sign Up</h3>
                 <p>You want to fill out this form</p>
                </div>
                <div class="sep"></div>

                <div class="inputs">
                    
                    <input type="email" placeholder="account@domain.ext" autofocus onChange={(e) => setInfo({ ...info, email: e.target.value })}></input>
                    <input type="password" placeholder="*********" onChange={(e) => setInfo({ ...info, password: e.target.value })}></input>
                    <button className="submit" type="submit" href="#" >Submit Now</button>
                    <button className="submit" type="reset" href="#" >Reset</button>
                    {/*   <button type="reset" style={{ alignSelf: 'flex-end', color: "black" }}>Reset</button> */}
                   {/*  <div class="checkboxy">
                        <input name="cecky" id="checky" value="1" type="checkbox" /><label class="terms">I accept the terms of use</label>
                    </div> */}
                </div>
            </form>           
            </div>

            <div className="vertical-line"><span ></span></div>

            <div class="container_Register">
            <form id="signup" onSubmit={handleRegister}>
                <div class="header">
                    <h3>Register</h3>
                 <p>You want to register now !</p>
                </div>
                <div class="sep"></div>
               
                <div class="inputs">
                    {/*   <form className="flex-column-center" onSubmit={handleSubmit}> */}
                    <input type="firstname" placeholder="First name" autofocus onChange={(e) => setInfo2({ ...info2, firstname: e.target.value })}></input>
                    <input type="lastname" placeholder="Last name" onChange={(e) => setInfo2({ ...info2, lastname: e.target.value })}></input>
                    <input type="email" placeholder="Email" autofocus onChange={(e) => setInfo2({ ...info2, email: e.target.value })}></input>
                    <input type="password" placeholder="Password" onChange={(e) => setInfo2({ ...info2, password: e.target.value })}></input>
                   
                    <button className="submit" type="submit"  href="#" >Register Now</button>
          
                    {/*   <button type="reset" style={{ alignSelf: 'flex-end', color: "black" }}>Reset</button> */}
                   {/*  <div class="checkboxy">
                        <input name="cecky" id="checky" value="1" type="checkbox" /><label class="terms">I accept the terms of use</label>
                    </div> */}
                </div>
            </form>           
            </div>
        </div>


    )
}

export default LoginScreen
