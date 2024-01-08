const initialState = {
  isSignIn: false,
  id: null,
  userName: "",
  phoneNumber: "",
  dob:"",
  gender:"",
  avatar: "",
  cartId: "",
  cart: {
    cartId: "",
    products: [],
  },
  order: [],
  role:"",
  isActive:"",
  addressId: "",
  addresses:{
    addressId: "",
    addresses:[],
  }
};
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isSignIn: true,
                id: action.payload.id,
                userName: action.payload.userName,
                phoneNumber: action.payload.phoneNumber,
                dob: action.payload.dob,
                gender:action.payload.gender,
                avatar: action.payload.avatar,
                cartId: action.payload.cartId,
                cart: {
                    ...state.cart,
                    cartId: action.payload.cartId,
                },
                role: action.payload.role,
                isActive: action.payload.isActive,
            };
        case 'LOAD_CART':
            return {
                ...state,
                cart: {
                    ...state.cart,
                    products: action.payload,
                }
            }
            case "ADD_TO_CART":
                let init = true;
                const updateProducts = state.cart.products.map((product) => {
                  if (product.id == action.payload.id) {
                    init = false;
                    return {
                      ...product,
                      quantity: product.quantity + action.payload.quantity,
                    };
                  }
                  return product;
                });
                if (init) updateProducts.push(action.payload);
                return {
                  ...state,
                  cart: {
                    ...state.cart,
                    products: updateProducts,
                  },
                };
              
        case 'DELETE_PRODUCT_IN_CART':
            return {
                ...state,
                cart: {
                    ...state.cart,
                    products: state.cart.products.filter(product => product.id !== action.payload),
                }
            }
        case 'LOAD_ORDER':
            return {
                ...state,
                order: action.payload,
            }
        case "UPDATE_STATUS_ORDER":
            const orderUpdate = state.order.map(order => {
                if (order.id == action.payload.id) {
                    return { ...order, status: action.payload.status }
                }
                return order;
            })
            return {
                ...state,
                order: orderUpdate,
            }
        case "CLEAR_CART": {
            return {
                ...state,
                cart: {
                    ...state.cart,
                    products: [],
                }
            }
        }
        case "LOGOUT": {
            return {
                ...initialState,
                isSignIn: false,
            };
        }  
        case 'SAVE_ALL_ADDRESSES': {
            return {
                ...state,
                addresses: action.payload,
            };
        }
        case 'ADD_ADDRESS':{
            return {
                ...state,
                addresses: [...state.addresses, action.payload],
            };
        }
        case 'LOAD_ADDRESSES': {
            return {
                ...state,
                addresses: action.payload,
            };
        }
        default:
            return state;
    }
}
