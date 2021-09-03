import {LOGOUT, GET_PROFILE_FAILED,GET_PROFILE_REQUEST,GET_PROFILE_SUCCESS, LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILED } from "../constants/authConstants"
import { GET_MY_COMMAND_SUCCESS,GET_MY_COMMAND_REQUEST, GET_MY_COMMAND_FAILED } from "../constants/commandConstants"


const initState ={
    token:localStorage.getItem('token'),
    isAuth:Boolean(localStorage.getItem('isAuth')), //si je suis authentifier ou nn
    user:{...JSON.parse(localStorage.getItem('user')),cmdList:[]},
    Loading:false,
    errors:null,
    //command
   
}

const authReducer = (state= initState, {type,payload}) =>{
    switch (type) {
        case GET_MY_COMMAND_REQUEST:
        case GET_PROFILE_REQUEST:
        case LOGIN_REQUEST:
            return{
                ...state,
                isLoading: true,
                
            }
            case LOGIN_SUCCESS:
                //localStorage c espace de stockage de mes memoires(espace de stockage qui contient des donnée si à chaque fois clic sur entrer les données ne perds pas ,stocke de forme key et value , n'est pas un fonction, )
                localStorage.setItem('token',payload.token)
                localStorage.setItem('isAuth',true)
                return{
                    ...state,
                    isLoading:false,
                    isAuth:true,
                    errors: null,
                    token:payload.token
                    
                }
            case GET_PROFILE_SUCCESS:
                localStorage.setItem('user', JSON.stringify(payload))
                return{
                    ...state,
                    user:payload
                }
            case LOGOUT:
                localStorage.clear()
                return {
                    ...state,
                    isAuth:false,
                    user:null,
                    token:null,
                }
            case GET_MY_COMMAND_SUCCESS:
                return{
                    ...state,
                    isLoading:false,
                    errors:null,
                    user:{
                        ...state.user,
                        cmdList:payload
                    }, 
                    //command
                    //cmdList:payload

                }

            case GET_MY_COMMAND_FAILED:
            case GET_PROFILE_FAILED:
            case LOGIN_FAILED:
               return{
                   ...state,
                   isLoading:false,
                   /* isAuth:false, */
                   errors: payload,
                  /*  token:null */
         }

         case REGISTER_REQUEST:
             return {
                 ...state,
                 isLoading:true
             } 
        case REGISTER_SUCCESS:
            
            return{
                ...state,
                isLoading:false,
                
                errors: null,
            } 
        
        case REGISTER_FAILED:
            return{
                ...state,
                isLoading:false,
                isAuth:false,
                errors: payload,
                token:null
            }

       
        
           
    default:
    return state
    }
}

export default authReducer