import React from 'react'
import CartTable from '../components/Cart_Table'
import { useSelector } from 'react-redux'
const Cart = () => {
  const {cartItems} = useSelector(state=> state.Product_Slice)
 
  return (
    <div className='position-relative' style={{marginTop:"65px"}}> 
      <CartTable cartItems={cartItems}/>
    </div>
  )
}

export default Cart