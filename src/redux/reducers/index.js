import { initialState } from '../store'

// let's write our reducer! :)
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        // let's return the new state object!
        ...state,
        cart: {
          ...state.cart,
          // products: state.cart.products.push(action.payload)
          // SUPER WRONG, push() alters the original array, and that is forbidden in a pure function
          // push is not allowed because MUTATES cart.products
          products: [...state.cart.products, action.payload],
          // THE ABOVE ONE IS ALLOWED
          // products: state.cart.products.concat(action.payload)
          // ALSO THIS ONE
        },
      }

    default:
      return state
  }
}

export default mainReducer
