import './LoginScreen.css';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getProfile, login, register } from '../redux/actions/authActions';




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
      /*   dispatch(getProfile()) */
      if(auth.isAuth){
        dispatch(getProfile())
    }
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

    /* success */
    const success_register = useSelector(state => state.auth.success_register) 

    return (
        <div className="container1">
            {/*   success */}
              <div className="alert__Register">
                {
                    success_register !== false ? (
                        <div className="succ__Register"  id="alert-success">
                            <p> {success_register} </p>
                           
                        </div>
                    ) : ''
                }
            </div>  
            <div className="d-flex justify-content-center h-100 h-10">
                {/* -------------------------------------REGISTER------------------------------------- */}
                <div className="card">
                    <div className="card-header">
                        <h3>Register</h3>

                    </div>
                    <div className="card-body">
                        <form id="signup" onSubmit={handleRegister}>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input className="form-control" required type="firstname" placeholder="First name" autofocus onChange={(e) => setInfo2({ ...info2, firstname: e.target.value })}></input>
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input className="form-control" required type="lastname" placeholder="Last name" onChange={(e) => setInfo2({ ...info2, lastname: e.target.value })}></input>
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input className="form-control" required type="email" placeholder="account@domain.ext" autofocus onChange={(e) => setInfo2({ ...info2, email: e.target.value })}></input>
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input className="form-control" required type="password" placeholder="***********" onChange={(e) => setInfo2({ ...info2, password: e.target.value })}></input>
                            </div>
                            <div className="form-group">
                                <button type="reset" className="btn float-right login_btn" >Reset</button>
                                <button type="submit" className="btn float-right login_btn btn_reg" >Register</button>    
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
                            <div className="d-flex justify-content-end social_icon">
                                <span><i class="fas fa-laptop"></i></span>
                                <span><i class="fas fa-watch"></i></span>{/* 
                                <span> <i class="fab fa-instagram"></i></span> */}
                            </div>
                        </div>
                        <div class="card-body">
                            <form id="signup" className="card-body__login" onSubmit={handleSubmit}>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input class="form-control" required type="email" placeholder="account@domain.ext" autofocus onChange={(e) => setInfo({ ...info, email: e.target.value })}></input>
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                                    </div>
                                    <input class="form-control" required type="password" placeholder="*********" onChange={(e) => setInfo({ ...info, password: e.target.value })}></input>
                                </div>

                                <div class="form-group">
                                    <button class="btn float-right login_btn" type="submit" href="#" >Login</button>
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

    )
}

export default LoginScreen
