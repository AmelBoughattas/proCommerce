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
        if (auth.isAuth && auth.user && auth.user.role === 'admin')
            history.push('/profileAdmin')
        else if (auth.isAuth && auth.user && auth.user.role === 'user')
            history.push('/cart')

    }, [dispatch, history, auth.isAuth, auth.user])

    //Partie Register

    const [info2, setInfo2] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    })

    const handleRegister = (e) => {
        e.preventDefault()
        dispatch(register(info2))
    }



    return (
        <div className="container1">
             <div className="d-flex justify-content-center h-100 h-10"> 
                       {/* -------------------------------------REGISTER------------------------------------- */}
                    <div className="card">
                        <div className="card-header">
                            <h3>Sign In</h3>
                            <div className="d-flex justify-content-end social_icon">
                                <span><i className="fab fa-facebook-square"></i></span>
                                <span><i className="fab fa-google-plus-square"></i></span>
                                <span><i className="fab fa-twitter-square"></i></span>
                            </div>
                        </div>
                        <div className="card-body">
                            <form id="signup" onSubmit={handleRegister}>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    {/* <input type="text" className="form-control" placeholder="username" /> */}
                                    <input   className="form-control" required type="firstname" placeholder="First name" autofocus onChange={(e) => setInfo2({ ...info2, firstname: e.target.value })}></input>
                

                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                  
                                    </div>
                                    {/* <input type="password" className="form-control" placeholder="password" /> */}
                                    <input className="form-control" required  type="lastname" placeholder="Last name" onChange={(e) => setInfo2({ ...info2, lastname: e.target.value })}></input>
                  
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                  
                                    </div>
                                    {/* <input type="password" className="form-control" placeholder="password" /> */}
                                    <input  className="form-control" required type="email" placeholder="account@domain.ext" autofocus onChange={(e) => setInfo2({ ...info2, email: e.target.value })}></input>
                                   
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    {/* <input type="password" className="form-control" placeholder="password" /> */}
                                     <input  className="form-control" required type="password" placeholder="***********" onChange={(e) => setInfo2({ ...info2, password: e.target.value })}></input>
                   
                                </div>
                                   
                                <div className="form-group">
                                    <input type="submit" value="Login" className="btn float-right login_btn" />
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">

                            </div>
                            <div className="d-flex justify-content-center">

                        </div>
                    </div> 
                       
                   
                  </div>      
                       {/* -------------------------------------LOGIN------------------------------------- */}
                        
             <div class="d-flex justify-content-center h-100"> 
                        <div class="card">
                            <div class="card-header">
                                <h3>Sign In</h3>
                                <div class="d-flex justify-content-end social_icon">
                                    <span><i class="fab fa-facebook-square"></i></span>
                                    <span><i class="fab fa-google-plus-square"></i></span>
                                    <span><i class="fab fa-twitter-square"></i></span>
                                </div>
                            </div>
                            <div class="card-body">
                                <form id="signup" onSubmit={handleSubmit}>
                                    <div class="input-group form-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="fas fa-user"></i></span>
                                        </div>
                                       {/*  <input type="text" class="form-control" placeholder="username" /> */}
                                       <input  class="form-control" required type="email" placeholder="account@domain.ext" autofocus onChange={(e) => setInfo({ ...info, email: e.target.value })}></input>
                 

                                    </div>
                                    <div class="input-group form-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="fas fa-key"></i></span>
                                        </div>
                                     {/*    <input type="password" class="form-control" placeholder="password" /> */}
                                     <input  class="form-control" required  type="password" placeholder="*********" onChange={(e) => setInfo({ ...info, password: e.target.value })}></input>
             
                                    </div>

                                    <div class="form-group">
                                       {/*  <input type="submit" value="Register" class="btn float-right login_btn" /> */}
                                       <button class="btn float-right login_btn"  type="submit" href="#" >Login</button>
                                          
                                    </div>
                                </form>
                            </div>
                            <div class="card-footer">
                                <div class="d-flex justify-content-center links">

                                </div>
                                <div class="d-flex justify-content-center">

                                </div>
                            </div>
                      </div>
                    </div>
                </div>
            </div>
                /*  <div class="container1">
            <div class="container_Login">
            <form id="signup" onSubmit={handleSubmit}>
                <div class="header">
                    <h3>Sign Up</h3>
                 <p>You want to fill out this form</p>
                </div>
                <div class="sep"></div>

                <div class="inputs">
                    
                    <input className="input_login" required type="email" placeholder="account@domain.ext" autofocus onChange={(e) => setInfo({ ...info, email: e.target.value })}></input>
                    <input  className="input_login" required  type="password" placeholder="*********" onChange={(e) => setInfo({ ...info, password: e.target.value })}></input>
                    <button className="submit" type="submit" href="#" >Submit Now</button>
                   
                </div>
            </form>           
            </div>

            <div className="vertical-line"><span ></span></div>

            <div className="container_Register">
            <form id="signup" onSubmit={handleRegister}>
                <div class="header">
                    <h3>Register</h3>
                 <p>You want to register now !</p>
                </div>
                <div class="sep"></div>
               
                <div class="inputs">
                    <input  className="input_login" required type="firstname" placeholder="First name" autofocus onChange={(e) => setInfo2({ ...info2, firstname: e.target.value })}></input>
                    <input  className="input_login" required  type="lastname" placeholder="Last name" onChange={(e) => setInfo2({ ...info2, lastname: e.target.value })}></input>
                    <input  className="input_login" required type="email" placeholder="account@domain.ext" autofocus onChange={(e) => setInfo2({ ...info2, email: e.target.value })}></input>
                    <input  className="input_login" required type="password" placeholder="***********" onChange={(e) => setInfo2({ ...info2, password: e.target.value })}></input>
                   
                    <button className="submit" type="submit"  href="#" >Register Now</button>
                
                </div>
            </form>           
            </div>
    </div> */

            
            )
}

            export default LoginScreen
