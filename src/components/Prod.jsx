import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Prod = (props) => {
  const { id, name, image, price, brand } = props.data;
  const { viewProductDetails, addToCart, cartItems } = useContext(ShopContext);
  const CartItemCount = cartItems[id];
  return (
    <>
      <div key={id} className="col-3">
        <div className="card">
          <img src={image} alt="" className="img-fluid card-img-top" />
          <div className="card-details p-3">
            <span>{brand}</span>
            <h4 className="my-3">{name}</h4>
            <ReactStars
              count={5}
              edit={false}
              value={3}
              size={24}
              activeColor="#cca27e"
            />
            <p className="price mb-3">
              {price}
              <span className="text-danger">
                <strike> &nbsp;{price * 2}</strike>
              </span>
            </p>
            <div className="d-flex align-items-center justify-content-around mb-2">
              <Link
                classname="view-button"
                onClick={() => viewProductDetails(id)}
              >
                View Deatils
              </Link>
              <button className="add-btn" onClick={() => addToCart(id)}>
                Add To Cart {CartItemCount > 0 && `(${CartItemCount})`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prod;
