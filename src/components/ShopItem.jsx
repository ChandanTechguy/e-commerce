import React from 'react'
import Prod from './Prod'
import {PRODUCTS, PRODUCTS1} from './Products'

const ShopItem = () => {
  return (
    <>
     <div className="row">
        {[...PRODUCTS, ...PRODUCTS1].map((product) => (
            <Prod key={product.id} data={product}/>
        ))}
        </div> 
    </>
  )
}
export default ShopItem
