import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import cartImg from "../assets/images/shopping-cart.png";
const Header = () => {
  const cartQuant = useSelector((state) => state.carts);
  const userInfo = useSelector((state) => state.user);
  const total = cartQuant.reduce((total, card) => total + card?.amount, 0);
  return (
    <header className="w-full bg-teal-500 relative h-20 mb-14">
      <div className="w-12/12 sm:w-11/12 lg:w-10/12 bg-white m-auto bg-opacity-20 absolute p-4 md:p-6 top-2/4 left-0 right-0 rounded-3xl backdrop-blur-md flex justify-between ">
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            className="max-h-8 sm:max-h-11 cursor-pointer transform transition duration-300 hover:scale-105 active:translate-y-1 rounded"
          />
        </Link>
        <div className="flex">
          <ul className="hidden md:flex items-center justify-between lg:space-x-2 mr-4">
            <li>
              <Link
                className="w-full font-semibold tracking-wide px-2 lg:px-3 py-2 hover:border-b-4 hover:border-teal-600 hover:text-stale-200 transition hover:ease-in-out"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="w-full font-semibold tracking-wide px-3 py-2 hover:border-b-4 hover:border-teal-600 hover:text-stale-200 transition hover:ease-in-out"
                to="/add"
              >
                Add Product
              </Link>
            </li>

            <li>
              <Link
                to="/cart"
                className="flex bg-slate-200 gap-1 items-center border rounded-md px-2 py-1"
              >
                <img src={cartImg} alt="shopping cart" className="w-6" />
                <span className="text-teal-600 text-xl font-semibold">
                  {total}
                </span>
              </Link>
            </li>
          </ul>
          {userInfo?.username ? (
            <button className="bg-teal-600 text-white font-medium md:font-semibold px-4 md:px-5 py-1 rounded-lg transform transition duration-300 md:hover:scale-110 active:translate-y-1 ">
              Logout
            </button>
          ) : (
            <button className="bg-teal-600 text-white font-medium md:font-semibold px-4 md:px-5 py-1 rounded-lg transform transition duration-300 md:hover:scale-110 active:translate-y-1 ">
              <Link to={"/login"}>Login</Link>
            </button>
          )}
          {/* <img className="md:hidden" src="" alt="" /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
