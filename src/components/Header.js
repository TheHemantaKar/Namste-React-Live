import { useEffect, useState, useContext } from "react";
import Logo from "../assets/img/swiggy-logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Title = () => (
  <a href="/">
    <img className="h-14 p-2 mt-[10px]" alt="logo" src={Logo} />
  </a>
);

/*   const userLogedIn = ()=>{
   
    return true
  } */
const Header = () => {
  const [isLogedIn, setLogedIn] = useState(false);

  const isOnline = useOnline();

  useEffect(() => {}, [isLogedIn]);

  const { user } = useContext(UserContext);

  // Subscribing the Redux store
  const cartItem = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-[#fff] drop-shadow-md sticky top-0">
      <Title />
      <div className="flex ">
        <ul className="flex justify-around py-5 mr-3">
          <li className="px-5 m-auto">
            <Link to="/">
              <div className="flex justify-between">
                <span className="static">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </span>
                <span>Home</span>
              </div>
            </Link>
          </li>
          {/* <li className="px-2">
            <Link to="/about">About</Link>
          </li> */}
          <li className="px-5 m-auto">
            <Link to="/contact">
              <div className="flex justify-between">
                <span className="static">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                    />
                  </svg>
                </span>
                <span>Help</span>
              </div>
            </Link>
          </li>
          {/* <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li> */}
          <li className="px-5 m-auto">
            <Link to="/cart">
              <div className="flex justify-between">
                <span>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </span>
                <span className="static">
                  Cart
                  {cartItem.length === 0 ? (
                    <span className="absolute ml-[8px] mt-[32px] text-[xx-small] top-[-1px] font-bold"></span>
                  ) : (
                    <span className="absolute px-[5px] ml-[2px]  text-[10px] top-[23px] font-bold text-green-700 border-orange-600  border rounded-[50%]">
                      {cartItem.length}
                    </span>
                  )}
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-btn-items flex justify-between">
        <div className="m-3 p-3 align-middle">
          <div className="flex justify-between m-auto">
            <span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </span>
            <span className="font-normal">
              {isOnline ? user.name : "Sign In"}
            </span>
          </div>

          {/* {isOnline ? "You are online" : "You are offline"} */}
        </div>
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
            className="m-5 p-1 px-2 align-middle text-red-700 rounded-md"
            type="button"
            onClick={() => setLogedIn(true)}
            title="Logout"
            /* style={{ background: "green" }} */
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </button>
        ) : (
          <button
            className="m-5 p-1 px-2 align-middle text-green-700 rounded-md"
            type="button"
            onClick={() => setLogedIn(false)}
            /*  style={{ background: "red" }} */
            title="Login"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
