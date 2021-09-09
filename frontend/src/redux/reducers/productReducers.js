import * as actionTypes from "../constants/ProductConstants";



export const getProductsReducer = (state = { products: [], success:false }, action) => {
    switch (action.type) {
      case actionTypes.GET_PRODUCTS_REQUEST:
        return {
          loading: true,
          products: [],
          };
      case actionTypes.GET_PRODUCTS_SUCCESS:
        return {
          products: action.payload,
          loading: false, 
        };

      case actionTypes.GET_PRODUCTS_FAILED:
        return {
          loading: false,
          error: action.payload,
        };
        case actionTypes.SUCCESS:
          return {
            ...state,
            success:action.payload
          }
      
       
      default:
        return state;
    }
  };

  export const getProductDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
      case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
        return {
          loading: true,
        };
      case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
        return {
          loading: false,
          product: action.payload,
        };
      case actionTypes.GET_PRODUCT_DETAILS_FAILED:
        return {
          loading: false,
          error: action.payload,
        };
      case actionTypes.GET_PRODUCT_DETAILS_RESET:
        return {
          product: {},
        };
     

      default:
        return state;
    }
  };
   
/*   export  const ProductReducer = (state = { product: {} }, {type,payload}) =>{
    switch (type) {
      case actionTypes.UPDATE_PRODUCT_SUCCESS:
        return {
          ...state,
          product:state.product.map(el=>el.id===payload.id? payload : el)
        }             

       default: 
      return state;
    }
  }    */