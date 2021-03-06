import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import swal from 'sweetalert'
import { addContact } from '../redux/actions/contactActions'
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RoomIcon from '@material-ui/icons/Room';
import myImage from '../Images/watchBlack.png';
import myeccouteur from '../Images/ecoutteur.png';
import labtop_2 from '../Images/labtop_2.png';
import back from './back.png'
import './Contact.css';
import manetteJeu from '../Images/manetteJeu.png';
import watchWhite from '../Images/watchWhite.png';

const Contact = () => {
    const [input, setInput] = useState({})
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addContact(input))
        swal("Success, Email sent ! ")

    }

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })

    }

    return (
        <div className="container_contact">
            <div className="contact">
                <div className="section over-hide">
                    <div className="container">
                        <div className="row full-height justify-content-center">
                            <div className="col-12 text-center align-self-center py-5">
                                <div className="section text-center py-5 py-md-0">
                                    <input className="pricing" type="checkbox" id="pricing" name="pricing" />
                                    <label for="pricing"><span className="block-diff">CONTACT US<span className="float-right">  &    ABOUT US</span></span></label>
                                    <div className="card-3d-wrap mx-auto">
                                        <div className="card-3d-wrapper">
                                            <div className="card-front">
                                                <div className="pricing-wrap">
                                                    <h4 className="mb-5 tit-5">RED WATCH</h4>
                                                    <h2 className="mb-2"><sup></sup> <sup></sup></h2><br />
                                                    <p className="mb-4"><AddIcCallIcon />      T??l??phone: +216 99 99 99 99</p>
                                                    <p class="mb-1"><i class="uil uil-location-pin-alt size-22"></i></p>
                                                    <p className="mb-4"><MailOutlineIcon />      Email: maycoll@gmail.com</p>
                                                    <p className="mb-4"><RoomIcon />   SOUSSE</p>
                                                    <p className="mb-4"><RoomIcon />   TUNIS</p>
                                                    <div className="img-wrap img-2">
                                                        <img className="Back" src={back} alt="ba" />   </div>
                                                    <div className="img-wrap img-1">

                                                        <img className="watch" src={myImage} alt="img" />
                                                        <i className="fas fa-watch"></i>  </div>
                                                    <div className="img-wrap img-3">
                                                        <img src="https://assets.codepen.io/1462889/water.png" alt="" />
                                                    </div>
                                                    <div className="img-wrap img-6">
                                                        <img className="ecoutteur" src={myeccouteur} alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-back">
                                                <div className="pricing-wrap">
                                                    <h4 className="mb-5">LAPTOP</h4>
                                                    <h2 className="mb-2"><sup></sup><sup></sup></h2>
                                                    <p className="mb-4">MayColl est une entreprise de commerce en ligne et la principale marque des Technologies de mode de la soci??t?? Tunisienne, qui poss??de des Boutique des diferentes technologies</p>
                                                    <p className="mb-1"><i className="uil uil-location-pin-alt size-22"></i></p>
                                                    <p className="mb-4">Sousse-Tunis</p>

                                                    <div className="img-wrap img-2">

                                                        <img src={labtop_2} alt="pc" />
                                                    </div>
                                                    <div className="img-wrap img-4">
                                                        <img src={manetteJeu} alt="img" />

                                                    </div>
                                                    <div className="img-wrap img-5">

                                                    </div>
                                                    <div class="img-wrap img-7">
                                                        <img src={watchWhite} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form__contact">
                <form className="form" onSubmit={handleSubmit} >
                    <div className="margin">
                        <div className="inputGroup">
                            <input type="text" name="name" className="input_contact" onChange={handleChange} required />
                            <span className="inputBar"></span>
                            <label>Name</label>
                        </div>
                        <div className="inputGroup email">
                            <input type="email" name="email" className="input_contact" onChange={handleChange} required />
                            <span className="inputBar"></span>
                            <label>Email</label>
                        </div>
                        <div className="inputGroup">
                            <input type="text" name="subject" className="input_contact" onChange={handleChange} required />
                            <span className="inputBar"></span>
                            <label>Subject</label>
                        </div>
                        <div className="inputGroup">
                            <textarea type="textarea" name="message" onChange={handleChange} required></textarea>
                            <span className="inputBar"></span>
                            <label>Message</label>
                        </div>
                        <button className="btn__contact">Send</button>
                    </div></form></div>
        </div>
    )
}

export default Contact
