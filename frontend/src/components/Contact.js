import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import swal from 'sweetalert'
import { addContact } from '../redux/actions/contactActions'
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import './Contact.css'


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

                    <button className="btn_contact">Send</button>
                </div></form>
            <div className="style">
                <div class="words word-1">
                    <span>C</span>
                    <span>O</span>
                    <span>N</span>
                    <span>T</span>
                    <span>A</span>
                    <span>C</span>
                    <span>T</span>
                    <span></span>
                    <span>-</span>
                    <span></span>
                    <span>U</span>
                    <span>S</span>
                </div>

                <div class="words word-2">
                    <span>M</span>
                    <span>A</span>
                    <span>Y</span>
                    <span></span>
                    <span>C</span>
                    <span>O</span>
                    <span>L</span>
                    <span>L</span>
                </div>

           </div>
            <div className="contact">
                 <p> <AddIcCallIcon/>      Téléphone: +216 99 99 99 99 </p>
                <p><MailOutlineIcon/>      Email: maycoll@gmail.com</p>
            </div>
        </div>
    )
}

export default Contact
