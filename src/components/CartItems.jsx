import React from "react";
import { useContext } from "react";
import { ShopContext } from "./ShopContext";

const CartItems = (props) => {
  const { id, name, image, price, brand } = props.data;
  const {
    viewProductDetails,
    addToCart,
    cartItems,
    removeToCart,
    updateCartItemCount,
  } = useContext(ShopContext);
  return (
    <>
      <section className="cart-item p-5">
        <div className="container-xxl">
          <div key={id} className="row">
            <table >
              <thead>
                <th className="col-3">Product Image</th>
                <th className="col-3">Product Details</th>
                <th className="col-3">Edit</th>
                <th className="col-3">Coupons</th>
              </thead>
              <tbody>
                <tr>
                  <td className="col-3">
                    <img src={image} alt="" className="img-fluid" />
                  </td>
                  <td className="col-3">
                    <p>{brand}</p>
                    <p>{name}</p>
                    <p>{price}</p>
                  </td>
                  <td>
                    <button
                      className="add-btn"
                      onClick={() => {
                        addToCart(id);
                      }}
                    >
                      +
                    </button>
                    <input
                      type="text"
                      value={cartItems[id]}
                      onChange={(e) =>
                        updateCartItemCount(NUumber(e.target.value), id)
                      }
                    />
                    <button
                      className="add-btn"
                      onClick={() => {
                        removeToCart(id);
                      }}
                    >
                      -
                    </button>
                  </td>
                  <td>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <span className="input-group-text" id="basic-addon2">
                        
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartItems;
