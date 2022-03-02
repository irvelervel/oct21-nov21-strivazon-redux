import Button from 'react-bootstrap/Button'
import { FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

// the goal of mapStateToProps is defining which new props your component is going to receive
// every property of the object mapStateToProps is returning will be a new prop for CartIndicator!
const mapStateToProps = (state) => ({
  // every property in this object will be a prop for CartIndicator
  cartLength: state.cart.products.length,
})

const CartIndicator = (props) => {
  const navigate = useNavigate()

  return (
    <div className='ml-auto mt-2'>
      <Button color='primary' onClick={() => navigate('/cart')}>
        <FaShoppingCart />
        <span className='ml-2'>{props.cartLength}</span>
      </Button>
    </div>
  )
}

export default connect(mapStateToProps)(CartIndicator)
// connect creates a HOC -> Higher Order Component
// connect can take up to 2 arguments
// the first argument will allow CartIndicator to READ from the store
// the second argument will allow CartIndicator to WRITE to the store
// CartIndicator just needs to READ from the redux store

// how can we connect CartIndicator to the Redux Store?
// with the connect function!
