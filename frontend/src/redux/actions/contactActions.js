import axios from "axios"
import { prefixe } from "../../helpers/constants"
import {  ADD_CONTACT_FAILED, ADD_CONTACT_REQUEST, ADD_CONTACT_SUCCESS } from "../constants/contactConstants"


export const addContact = (newContact)=> async (dispatch) =>{

    dispatch({type:ADD_CONTACT_REQUEST})

    try {
       
        const {data} =await axios.post(`${prefixe}/api/contact`, newContact)
        dispatch({
            type:ADD_CONTACT_SUCCESS ,
            payload:data
        })
        
    }
    catch (err){
     
        dispatch({
            type:ADD_CONTACT_FAILED,
            payload: err.response.data.errors
        })

    }
    
}
