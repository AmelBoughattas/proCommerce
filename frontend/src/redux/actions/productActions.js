import * as actionTypes from "../constants/ProductConstants";
import axios from "axios";
import { prefixe } from '../../helpers/constants';
import { setToken } from '../../helpers/helpers';
import { ADD_PRODUCTS_REQUEST, ADD_PRODUCTS_SUCCESS, ADD_PRODUCTS_FAILED , GET_MY_PRODUCT_REQUEST, GET_MY_PRODUCT_SUCCESS,GET_MY_PRODUCT_FAILED} from '../constants/ProductConstants'


export const addProduct = (newProduct)=> async (dispatch) =>{

  dispatch({type:ADD_PRODUCTS_REQUEST})

  try {
      setToken()
      const {data} =await axios.post(`${prefixe}/api/product/addproduct`, newProduct)
      dispatch({
          type:ADD_PRODUCTS_SUCCESS ,
          payload:data
      })
  }
  catch (err){
      dispatch({
           type:ADD_PRODUCTS_FAILED,
          payload: err.response.data.errors
      })

  }
  
}

export const getProducts = () => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });
  
      const { data } = await axios.get("/api/products");
  
      dispatch({
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_PRODUCTS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  
export const getMyProduct = () => async (dispatch) => {
  dispatch({type:GET_MY_PRODUCT_REQUEST})
try {
    setToken()
    const { data } = await axios.get(`${prefixe}/api/post/myproduct`)
    dispatch({
        type: GET_MY_PRODUCT_SUCCESS,
        payload: data
    }) 
  }
catch (err) {
    dispatch({
        type:GET_MY_PRODUCT_FAILED,
        payload: err.response.data.errors
    })
}
}
  
export const getProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/products/${id}`);
  
      dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const removeProductDetails = () => (dispatch) => {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });
  };
  