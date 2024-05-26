import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Alert = ({ showAlert, setShowAlert, isEmailAvailable }) => {
  useEffect(() => {
    const timer = setTimeout(() => setShowAlert(false), 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [showAlert]);

  return (
    <div
      className={`fixed inset-0 z-20 ${showAlert ? "bg-black bg-opacity-50" : "hidden"}`}
      onClick={() => setShowAlert(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="max-h-[60px] w-full h-full bg-white fixed left-0 top-0 p-4 items-center transform"
        onClick={(e) => e.stopPropagation()}
      >
        <FaTimes
          className="absolute right-0 top-0 m-4  text-[24px] hover:text-gray-500 cursor-pointer"
          onClick={() => setShowAlert(false)}
        />
        <h3 className={`text-lg font-medium ${isEmailAvailable ? 'text-green-600' : 'text-gray-600'}`}>
          {isEmailAvailable ? 'Reset Successful! Please check your email.' : 'Error! This email is not registered.'}
        </h3>
      </motion.div>
    </div>
  );
};

export default Alert;
