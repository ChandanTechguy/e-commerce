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

      <section className="pagination p-3">
        <div className="container-xxl">
          <div className="row ">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      {/* <span class="sr-only">Previous</span> */}
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      {/* <span class="sr-only">Next</span> */}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
