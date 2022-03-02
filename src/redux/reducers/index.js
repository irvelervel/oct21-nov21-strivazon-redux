import { ADD_TO_CART, REMOVE_FROM_CART, SET_USER_NAME } from '../actions'
import { initialState } from '../store'

// let's write our reducer! :)
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
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

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          // FILTER WORKS!
          //   products: state.cart.products.filter(
          //     (book, i) => i !== action.payload
          //   ),
          // ALSO SLICE :D
          products: [
            ...state.cart.products.slice(0, action.payload),
            ...state.cart.products.slice(action.payload + 1),
          ],
          // SPLICE DOESN'T THOUGH, IT MUTATES THE CART :(
        },
      }

    case SET_USER_NAME:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload,
        },
      }

    default:
      return state
  }
}

export default mainReducer
