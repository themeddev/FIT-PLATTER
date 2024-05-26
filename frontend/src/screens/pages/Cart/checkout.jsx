import { motion } from "framer-motion";
import orderImg from '../../../images/order.webp';

const Checkout = ({ isCheckout, setIsCheckout, cartList, cartTotalPrice }) => {
  return (
    <div
      className={`fixed inset-0 z-20 ${isCheckout ? "bg-black bg-opacity-50" : "hidden"} flex sm:items-center items-end justify-center`}
      onClick={() => setIsCheckout(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="sm:max-w-md sm:h-auto w-full bg-white flex flex-col rounded-t-lg sm:rounded-lg overflow-hidden shadow-lg p-5 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <svg
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setIsCheckout(false)}
          width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="white"></rect>
          <path d="M7 17L16.8995 7.10051" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M7 7L16.8995 16.8995" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        
        <div className="grow">
          <h2 className="font-Outfit text-center text-xl text-black uppercase mb-3">Order Summary</h2>
          <div className="mb-4">
            <img
              className="w-full h-full sm:h-48 object-cover rounded"
              src={orderImg}
              alt="Order"
            />
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-3">
            <p className="font-Poppins text-l uppercase">Total items: {cartList.length}</p>
            <p className="font-semibold text-myOrange">{(cartTotalPrice + 10).toFixed(2)} MAD</p>
          </div>
          <div className="text-center">
            <button className="btn-secondary w-full mb-2">Order</button>
            <span className="text-gray-500 text-sm">Shipping, taxes, and discounts apply at checkout</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Checkout;
