import React from "react";
import ShopItem from "../components/ShopItem";

const Shop = () => {
  return (
    <>
      <section className="shop-banner p-2">
        <div className="container-xxl">
          <div className="row justify-content-center">
            <div className="repair-details text-center d-flex flex-column align-items-center mt-4">
              <div>
                <h1 className="text-white">
                  <span className="text-danger">
                    <b>#85% </b>
                  </span>
                  off on All Products
                </h1>
              </div>
              <div>
                <p className="text-white">Make Your Orders We Will Deliver</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="shop-products p-5">
        <div className="container-xxl">
          <div className="row">
            <ShopItem />
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
