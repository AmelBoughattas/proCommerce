import {LOGOUT, GET_PROFILE_FAILED, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_REQUEST, REGISTER_FAILED, REGISTER_SUCCESS, SUCCESS_REGISTER } from "../constants/authConstants"
import axios from 'axios';
import { prefixe } from "../../helpers/constants";
import {setToken}from '../../helpers/helpers'
import { getMyCommand } from "./commandActions";




export const login = (info) => async (dispatch) =>{
   dispatch({type:LOGIN_REQUEST})
   try{
   const res = await axios.post(`${prefixe}/api/user/login`,info)
   dispatch({
       type: LOGIN_SUCCESS,
       payload : res.data
   })  
   dispatch (getProfile())
} catch (err) {
    dispatch({
        type:LOGIN_FAILED,
        payload :err.response.data.errors
    })

   }
}

export const getProfile = () => async (dispatch)=> {
    dispatch({type:GET_PROFILE_REQUEST})
    try{
        setToken()
        const {data} =await axios.get(`${prefixe}/api/user/getProfile`)
        dispatch({
            type:GET_PROFILE_SUCCESS,
            payload: data
        })
       
    dispatch(getMyCommand())
    }
    catch (err){
        dispatch({
            type:GET_PROFILE_FAILED,
            payload: err.response.data.errors
        })

    }
}

export const register = (info) => async (dispatch) =>{
    dispatch({ type:REGISTER_REQUEST })
    try{
        const res = await axios.post(`${prefixe}/api/user/register`,info)
        dispatch({
            type :REGISTER_SUCCESS,
            payload : res.data
        })
      
      setTimeout(() => {
        dispatch({
            type: SUCCESS_REGISTER,
            payload: 'Register added with success',
          
        })
    }, 1000)
    
    setTimeout(() => {
      dispatch({
          type: SUCCESS_REGISTER,
          payload: false
      })
  }, 4000)
  
    } catch (err) {
        dispatch({
            type:REGISTER_FAILED,
            payload: err.response.data.errors
        })
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}