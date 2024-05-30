// Cart.jsx
import { FaTimes } from "react-icons/fa";
import CartProduct from "./CartProduct";
import { motion } from "framer-motion";
import EmptyCart from "../../../images/emptyCart.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = ({ showCart, setShowCart }) => {
  const { cartList, totalPrice } = useSelector((state) => state.Cart);

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${showCart ? "bg-black bg-opacity-50" : "opacity-0 pointer-events-none"}`}
      onClick={() => setShowCart(false)}
    >
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: showCart ? 1 : 0, x: showCart ? 0 : 200 }}
        transition={{ duration: 0.2 }}
        className="max-w-[400px] w-full h-full bg-white fixed right-0 top-0 p-6 shadow-lg transform"
        onClick={(e) => e.stopPropagation()}
      >
        <FaTimes
          className="absolute right-0 top-0 m-6 text-[24px] text-gray-400 hover:text-gray-500 cursor-pointer"
          onClick={() => setShowCart(false)}
        />
        <h3 className="text-lg font-medium text-gray-600 uppercase mb-4">
          Your Cart
        </h3>
        <p className="text-gray-600">Total Items: {cartList.length}</p>
        <p className="text-gray-600">Total Price: {totalPrice.toFixed(2)} MAD</p>

        <div className="mt-6">
          {cartList.length > 0 ? (
            cartList.map((el) => (
              <CartProduct key={el.category} el={el} />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center gap-6">
              <img src={EmptyCart} className="w-300" alt="Empty Cart" />
              <p className="text-xl text-textColor font-semibold">
                Add some items to your cart
              </p>
            </div>
          )}
        </div>

        {cartList.length > 0 && (
          <div className="flex justify-between mt-6">
            <Link to='/shopping-cart' className="btn-blue">View Cart</Link>
            <button className="btn-blue">Checkout</button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Cart;