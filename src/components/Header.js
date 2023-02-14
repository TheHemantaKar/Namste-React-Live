import { useEffect, useState } from "react";
import Logo from "../assets/img/helloFood.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Shimmer from "./Shimmer";

export const Title = () => (
  <a href="/">
    <img
      className="h-14 p-2"
      alt="logo"
      src={Logo}
      /*  src="http://innov8tiv.com/wp-content/uploads/2014/07/z13.png" */
      /* src="https://babumoshai.org/wp-content/uploads/2022/03/babumoshai-logo-top.png" */
      /* src="https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" */
    />
  </a>
);

/*   const userLogedIn = ()=>{
   
    return true
  } */
const Header = () => {
  const [isLogedIn, setLogedIn] = useState(false);

  const isOnline = useOnline();

  useEffect(() => {
    /* console.log("useeffect"); */
  }, [isLogedIn]);

  /* console.log("Render"); */
  return (
    <div className="flex justify-between bg-pink-100 drop-shadow-md">
      <Title />
      <div className="nav-items">
        <ul className="flex py-5 mr-3">
          <li className="px-2">
            <Link to="/">Home </Link>
          </li>
          <li className="px-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">
            <Link to="/">Cart</Link>
          </li>
        </ul>
      </div>
      <div className="nav-btn-items flex justify-between">
        <h2 className="m-3 p-3 align-middle">
          {isOnline ? "You are online" : "You are offline"}
        </h2>
        {/* Login and Logout toggle by click */}
        {/* {isLogedIn ? (
          <button
            type="button"
            onClick={() => setLogedIn(false)}
            style={isOnline ? { background: "green" } : { background: "red" }}
          >
            Logout
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setLogedIn(true)}
            style={isOnline ? { background: "green" } : { background: "red" }}
          >
            Login
          </button>
        )} */}
        {/*  // Login and Logout by internet Connection */}
        {isOnline ? (
          <button
            className="m-5 p-1 px-2 align-middle text-white rounded-md"
            type="button"
            onClick={() => setLogedIn(true)}
            style={{ background: "green" }}
          >
            Login
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setLogedIn(false)}
            style={{ background: "red" }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
