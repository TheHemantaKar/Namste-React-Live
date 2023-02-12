import { useEffect, useState } from "react";
import Logo from "../assets/img/helloFood.png";
import { Link } from "react-router-dom";

export const Title = () => (
  <a href="/">
    <img
      className="logo"
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

  useEffect(() => {
    /* console.log("useeffect"); */
  }, [isLogedIn]);

  /* console.log("Render"); */
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            {" "}
            <Link to="/">Home </Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About Us</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Cart</Link>
          </li>
        </ul>
      </div>
      <div className="nav-btn-items">
        {isLogedIn ? (
          <button type="button" onClick={() => setLogedIn(false)}>
            Logout
          </button>
        ) : (
          <button type="button" onClick={() => setLogedIn(true)}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
