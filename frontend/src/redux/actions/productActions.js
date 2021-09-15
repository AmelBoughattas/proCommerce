
import axios from "axios";
/* import { prefixe } from '../../helpers/constants'; */
import { setToken } from '../../helpers/helpers';
import {UPDATE_PRODUCT_SUCCESS, ADD_PRODUCTS_REQUEST, ADD_PRODUCTS_SUCCESS, ADD_PRODUCTS_FAILED , GET_MY_PRODUCT_REQUEST, GET_MY_PRODUCT_SUCCESS,GET_MY_PRODUCT_FAILED,GET_PRODUCT_DETAILS_REQUEST,GET_PRODUCT_DETAILS_SUCCESS,GET_PRODUCT_DETAILS_FAILED, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_REQUEST, GET_PRODUCTS_FAILED, GET_PRODUCT_DETAILS_RESET, GET_PRODUCTS_COUNT_REQUEST, GET_PRODUCTS_COUNT_SUCCESS, GET_PRODUCTS_COUNT_FAILED, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_FAILED, DELETE_PRODUCT_FAILED, SUCCESS} from '../constants/ProductConstants'



export const addProduct = (newProduct)=> async (dispatch) =>{

  dispatch({type:ADD_PRODUCTS_REQUEST})

  try {
      setToken()
      const {data} =await axios.post(`/api/product/addproduct`, newProduct)
      dispatch({
          type:ADD_PRODUCTS_SUCCESS ,
          payload:data
      })
      setTimeout(() => {
        dispatch({
            type: SUCCESS,
            payload: 'Article ajouté avec success ! '
        })
    }, 1000)
    
    setTimeout(() => {
      dispatch({
          type: SUCCESS,
          payload: false
      })
  }, 3000)
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
      dispatch({ type:GET_PRODUCTS_REQUEST });
 
      const { data } = await axios.get("/api/products");
  
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: data,
      });

    }
     catch (error) {

      dispatch({
        type: GET_PRODUCTS_FAILED,
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
    const { data } = await axios.get(`/api/product/myproduct`)
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

 export const getProductCount = () => async (dispatch) => {
  dispatch({type:GET_PRODUCTS_COUNT_REQUEST})
try {
    
    const { data } = await axios.get(`/api/product/productcount`)
    dispatch({
        type: GET_PRODUCTS_COUNT_SUCCESS,
        payload: data
    }) 
  
  }
catch (err) {
  dispatch({
    type:GET_PRODUCTS_COUNT_FAILED ,
    payload: err.response.data.errors
})
  
}
}  
export const getProductDetails = (id) => async (dispatch) => {
 
    try {
   
      dispatch({ type: GET_PRODUCT_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/products/${id}`);
  
      dispatch({
        type: GET_PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });

     
    } 
    catch (error) {
     
      dispatch({
        type: GET_PRODUCT_DETAILS_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const removeProductDetails = () => (dispatch) => {
    dispatch({ type:GET_PRODUCT_DETAILS_RESET });
  };
  
  /* Delete product */
  export const deleteProduct = (id) => async (dispatch) => {
    dispatch({type:DELETE_PRODUCT_REQUEST})
    try{
      console.log(id)
      setToken()
      const {data} =await axios.delete(`/api/product/deleteproduct/${id}`)
          dispatch({
          type:DELETE_PRODUCT_SUCCESS ,
          payload:data
      })
      dispatch(getProducts())
  
     
     setTimeout(() => {
      dispatch({
          type: SUCCESS,
          payload: 'Article a été supprimé avec success !'
      })
  }, 1000)
  
  setTimeout(() => {
    dispatch({
        type: SUCCESS,
        payload: false
    })
}, 4000)
    }
    catch(err) {
        dispatch({
        type:DELETE_PRODUCT_FAILED,
        payload: err.response.data.errors
      })
    }
  }

   /* update product */
   export const updateProduct = (_id,newPrice) => async (dispatch) => {
    dispatch({type:UPDATE_PRODUCT_REQUEST})
    try{
      setToken()
      const {data} =await axios.put(`/api/product/updateProduct/${_id}`,{price:newPrice})
      dispatch({
        type:UPDATE_PRODUCT_SUCCESS,
        payload:data
      })
      dispatch(getProducts())
      console.log(data);
        setTimeout(() => {
      dispatch({
          type: SUCCESS,
          payload: 'operation successfully !'
      })
  }, 1000)
  
  setTimeout(() => {
    dispatch({
        type: SUCCESS,
        payload: false
    })
}, 4000)
    
    }
      catch(err){
        dispatch({
          type:UPDATE_PRODUCT_FAILED,
          payload: err.response.data.errors
        })
      }
      
    }
  
   
 
     
   