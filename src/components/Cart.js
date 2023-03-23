import { useDispatch, useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";
import AllCartItems from "./AllCartItems";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += (item.price * item.quantity) / 100;
    });
    return { totalPrice, totalQuantity };
  };
  const getTotalALL = getTotal();

  return (
    <div className="flex flex-col">
      {/*  <h1 className="font-bold ">Cart Items {cartItems.length}</h1> */}

      {cartItems.length === 0 ? (
        <div className="flex flex-row justify-center mt-16">
          <div className="">
            <div className="align-middle">
              <img
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2"
                className="h-56 w-auto rounded-md"
              />
            </div>
            <div className="text-xl text-center my-2 text-gray-500">
              <strong> Your cart is empty</strong>
            </div>
            <div className="text-sm text-center my-2 text-gray-500">
              <small>You can go to home page to view more restaurants</small>
            </div>
            <div className="text-center py-2 bg-amber-600 text-white">
              <Link to="/">
                <button>SEE RESTAURANTS NEAR YOU</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row justify-center space-x-10 mt-5">
          <div className="flex flex-col">
            {cartItems.map((item) => (
              <CartItemCard key={item.id} {...item} />
            ))}
          </div>
          <div>
            <AllCartItems />
            <hr />
            <div className="flex flex-row justify-between">
              <p>
                <small>Sub Total({getTotalALL.totalQuantity} items)-</small>
              </p>
              {console.log(getTotalALL.totalPrice)}
              <p className="text-right">
                <strong>
                  <small>₹{getTotalALL.totalPrice}</small>
                </strong>
              </p>
            </div>
            <div className="flex mt-10">
              <Link to="/" className="w-full">
                <button className="w-full bg-green-700 text-white py-[5px] px-[10px]">
                  PAY
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
