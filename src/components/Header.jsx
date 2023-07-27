import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/apna-Dukaan.webp";
import { HiOutlineInboxIn } from "react-icons/hi";
import {VscAccount} from "react-icons/vsc"
import {CgShoppingCart} from "react-icons/cg"

const Header = () => {
  const location = useLocation();
  return (
    <>
      <header className="header-top-strip p-1 px-4 shadow-sm">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-6">
              <p>The trending outfit at 60% off</p>
            </div>
            <div className="col-6 d-flex justify-content-between">
              <div>
                <a href="tel:+21345678901">Call us +21345678901 </a>
              </div>
              <div>
                <Link>
                  <BiPhoneCall className="fs-3 mx-4" />
                </Link>
                <Link>
                  <AiOutlineMail className="fs-3 mx-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper px-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2 text-center">
              <Link to={"/"}>
                {" "}
                <img src={logo} className="img-fluid logo" />
              </Link>
            </div>
            <div className="col-3 d-flex align-items-center mt-3 m-auto">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  All
                </span>
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="search here..."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <button className="input-group-text" id="basic-addon2">
                  Search
                </button>
              </div>
            </div>
            <div className="nav-links col-4 d-flex align-items-center justify-content-between text-center m-auto">
              <Link to={"home"} className={location.pathname === "/home" ? "active" : "inactive"}><strong>Home</strong></Link>
              <Link to={"shop"} className={location.pathname === "/shop" ? "active" : "inactive"}><strong>Shop</strong></Link>
              <Link to={"blog"} className={location.pathname === "/blog" ? "active" : "inactive"}><strong>Blog</strong></Link>
              <Link to={"contact"} className={location.pathname === "/contact" ? "active" : "inactive"}><strong>Contact</strong></Link>
              <Link to={"about"} className={location.pathname === "/about" ? "active" : "inactive"}><strong>About</strong></Link>
            </div>
            <div className="nav-links-nav col-3 d-flex align-items-center justify-content-around">
              <Link to={"wishlist"} className={location.pathname === "/wishlist" ? "inactive" : "active"}>
                <div></div>
                <div className="d-flex">
                <span><HiOutlineInboxIn className="fs-2 mx-auto"/></span>
                {/* <p><strong>Wishlist</strong></p> */}
                </div>
                </Link>
                <Link to={"login"} className={location.pathname === "/login" ? "inactive" : "active"}>
                  <div className="d-flex">
                  <span><VscAccount className="fs-2 mx-auto"/></span>
                {/* <p><strong>Account</strong></p> */}
                  </div>
                  
                </Link>
                <Link to={"cart"} className={location.pathname === "/cart" ? "inactive" : "active"}>
                  <div className="d-flex">
                  <span><CgShoppingCart className="fs-2 mx-auto"/></span>
                {/* <p><strong>Cart</strong></p> */}
                  </div>
                </Link>
              </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
