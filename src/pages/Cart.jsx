import React,{useContext} from 'react'
import {PRODUCTS, PRODUCTS1} from "../components/Products"
import CartItems from '../components/CartItems'
import shopcontext from '../components/ShopContext'

const Cart = () => {
  const { id, name, image, price, brand } = props.data;
  const { viewProductDetails, addToCart, cartItems } = useContext(ShopContext);
  return (
    <>
      <div className="row">
        {[...PRODUCTS, ...PRODUCTS1].map((product) => {
        if(cartItems[product.id] !== 0 ) {
        return  <CartItems key={product.id} data={product}/>
        }
      })}
        </div> 
    </>
  )
}

export default Cart
