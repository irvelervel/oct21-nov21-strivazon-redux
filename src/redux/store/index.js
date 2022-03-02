import { createStore } from 'redux'
import mainReducer from '../reducers'

export const initialState = {
  // let's create a carte "slice"
  cart: {
    products: [],
  },
}

export const configureStore = createStore(
  mainReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// 1) the main reducer function
// 2) the initial state for the redux store
// 3) any enhancer/middleware function
