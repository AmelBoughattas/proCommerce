import { ADD_COMMAND_FAILED, ADD_COMMAND_REQUEST, ADD_COMMAND_SUCCESS } from "../constants/commandConstants"
import axios from "axios";
import { prefixe } from '../../helpers/constants';
import { setToken } from '../../helpers/helpers';

export const addCommand = (newCommand)=> async (dispatch) =>{

    dispatch({type:ADD_COMMAND_REQUEST})
  
    try {
        setToken()
        const {data} =await axios.post(`${prefixe}/api/command/addcommand`, newCommand)
        dispatch({
            type:ADD_COMMAND_SUCCESS ,
            payload:data
        })
    }
    catch (err){
        console.log(err)
        dispatch({
             type:ADD_COMMAND_FAILED,
            payload: err.response.data.errors
        })
  
    }
    
  }