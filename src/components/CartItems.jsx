import React from "react";
import { useContext } from "react";
import {ShopContext} from "./ShopContext";

const CartItems = (props) => {
  const { id, name, image, price, brand } = props.data;
  const { viewProductDetails, addToCart, cartItems } = useContext(ShopContext);
  return <>
  <section className="cart-item p-5">
    <div className="container-xxl">
      <div key={id} className="row">
        <table>
          <thead>
            <th>Product Image</th>
            <th>Product Details</th>
            <th>Edit</th>
            <th>Coupons</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={image} alt="" className="img-fluid"/>
              </td>
              <td>
                <p>{brand}</p>
                <p>{name}</p>
                <p>{price}</p>
              </td>
              <td>
              <button className="add-btn" onClick={() => {addToCart(id)}}>
                +
              </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  </>;
};

export default CartItems;
