import { useState } from "react";
import { motion } from "framer-motion";
import orderImg from '../../../images/order.webp';
import axios from "axios";
import { useDispatch } from "react-redux";
import { clearCart } from '../../../redux/CartSlice'; // Adjust the path according to your project structure

const Checkout = ({ isCheckout, setIsCheckout, cartList, cartTotalPrice }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const Customer = JSON.parse(localStorage.getItem('user'));
  const dispatch = useDispatch();

  const handleOrder = async () => {
    if (cartList.length === 0) {
      setNotificationMessage('Cart is empty!');
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
      return;
    }

    setIsLoading(true);

    try {
      const customPlates = cartList.filter(item => item.category === 'Custom-Plate');

      if (customPlates.length > 0) {
        const addCustomPlatesPromises = customPlates.map(customPlate =>
          axios.post(`${import.meta.env.VITE_APP_BACKEND_HOST}/api/meals`, {
            category: customPlate.category,
            calories: customPlate.calories,
            carbs: customPlate.carbs,
            protein: customPlate.protein,
            fat: customPlate.fat,
            image: customPlate.image,
            price: customPlate.price,
            elements: customPlate.elements
          })
        );

        const addedCustomPlates = await Promise.all(addCustomPlatesPromises);

        console.log("Added custom plates:", addedCustomPlates);

        // Update cartList with IDs of newly added Custom-Plate items
        const updatedCartList = cartList.map(item => {
          if (item.category === 'Custom-Plate') {
            const addedCustomPlate = addedCustomPlates.find(addedPlate => addedPlate.data.data.category === item.category);
            if (addedCustomPlate) {
              return { ...item, id: addedCustomPlate.data.data.id };
            }
            console.error("Custom plate not found in added plates:", item);
          }
          return item;
        });

        // Create the order with updated cart list
        const response = await axios.post(`${import.meta.env.VITE_APP_BACKEND_HOST}/api/orders`, {
          customer_id: Customer.customer_id,
          total_price: cartTotalPrice + 10, // Pass the total price of the order + delivery
          confirmed: false,
          meals: updatedCartList.map(item => ({ id: item.id, quantity: item.quantity }))
        });

        console.log("Order created:", response.data);
        setNotificationMessage('Order was made successfully');
        setShowNotification(true);
        dispatch(clearCart());
        setTimeout(() => setShowNotification(false), 3000);

      } else {
        // If no custom plates, proceed with the order directly
        const response = await axios.post(`${import.meta.env.VITE_APP_BACKEND_HOST}/api/orders`, {
          customer_id: Customer.customer_id,
          total_price: cartTotalPrice + 10, // Pass the total price of the order + delivery
          confirmed: false,
          meals: cartList.map(item => ({ id: item.id, quantity: item.quantity }))
        });

        console.log("Order created:", response.data);
        setNotificationMessage('Order was made successfully');
        setShowNotification(true);
        dispatch(clearCart());
        setTimeout(() => setShowNotification(false), 3000);
      }
    } catch (error) {
      console.error("Error creating order:", error);
      setNotificationMessage('Error creating order');
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }

    setIsLoading(false);
    setIsCheckout(false);
  };

  const notificationDiv = () => {
    return (
      <motion.div 
        className="flex justify-center z-40 fixed top-20 right-0 w-full h-4"
        initial={{opacity: 0, y: -10}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: .2, ease: [.64,.04,.08, .98]}}
      >
        <div className="p-2 w-auto py-5 bg-myOrange items-center text-white leading-none rounded-full flex justify-between" role="alert">
          <span className="font-Poppins mx-2 text-left flex-auto">{notificationMessage}</span>
        </div>
      </motion.div>
    );
  };

  return (
    <div>
      {showNotification && notificationDiv()}
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
              <button 
                className="btn-secondary w-full mb-2" 
                onClick={handleOrder} 
                disabled={isLoading} 
              >
                {isLoading ? "Processing..." : "Order"}
              </button>
              <span className="text-gray-500 text-sm">Shipping, taxes, and discounts apply at checkout</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;
