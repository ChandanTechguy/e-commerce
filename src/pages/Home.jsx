import React from "react";
import { Link } from "react-router-dom";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import NewArrival from "../components/NewArrival";
import img1 from "../assets/banner/b17.jpg";
import img2 from "../assets/banner/b10.jpg";
import Blogs from "../components/Blogs";

const Home = () => {
  return (
    <>
      <section className="banner mb-3">
        <div className="container-xxl">
          <div className="row">
            <div className="banner-details d-flex flex-column align-items-start justify-content-center">
              <span className="shadow-lg p-3 mt-3 text-white">
                Trade in offer !!
              </span>
              <h1>Super Value Deal</h1>
              <h2>On all products</h2>
              <p>Save more with apna dukaan </p>
              <Link className="button-link mb-3 ">Shop Now</Link>
            </div>
          </div>
        </div>
      </section>
      <Hero />
      <section className="featured-products p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center">
              <h1>Our Featured Products</h1>
              <p>All Weather Modern Designs</p>
            </div>
            <FeaturedProducts />
          </div>
        </div>
      </section>

      <section className="repair">
        <div className="container-xxl">
          <div className="row">
            <div className="repair-details text-center d-flex flex-column align-items-center p-2">
              <span className="text-white mt-1">Repair Services</span>
              <h2 className="text-white">
                On{" "}
                <span className="text-danger">
                  <b>70% </b>
                </span>
                off on All Products and Accessories
              </h2>
              <div className="mt-1">
                <button className="button-repair">Explore Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="new-products p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center">
              <h1>New Arrivals</h1>
              <p>Your Best Designer Outfit</p>
            </div>
            <NewArrival />
          </div>
        </div>
      </section>

      <section className="deals p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6 p-4">
              <div className="card row">
                <div className="d-flex">
                  <div className="col-md-4">
                    <img
                      src={img1}
                      alt=""
                      className="img-fluid rounded-start h-100 p-2"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <span className="text-danger">Hot Deals 🤩</span>
                      <h3 className="card-title">Buy One Get One Free</h3>
                      <h6>
                        The latest best collection in our closet Feel Cute with
                        our outfits
                      </h6>
                      <button className="button-deals mt-4">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 p-4">
              <div className="card row">
                <div className="d-flex">
                  <div className="col-md-4">
                    <img
                      src={img2}
                      alt=""
                      className="img-fluid rounded-start h-100 p-2"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <span className="text-danger">Season-in 👕</span>
                      <h3 className="card-title">All Weather Attire</h3>
                      <h6>
                        It never matter which season it is , We got you covered
                      </h6>
                      <button className="button-deals mt-4">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs p-3 mb-2">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center mb-3">
              <h1>Whats Our Customers Say</h1>
              <p>Our customer never miss a bit on providing feedbacks</p>
            </div>
            <Blogs />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
