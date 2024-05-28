import React, { useEffect, useState } from "react";
import { BiSolidCartAdd } from "react-icons/bi";
import { addToCart } from "../../../../redux/CartSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { MdFileDownloadDone } from "react-icons/md";


const FoodItem = ({ item, setSelectedItem, setShowDetail }) => {
  const dispatch = useDispatch();
  const [showNotification, setShowNotification] = useState(false);

  const handleAdd = (item) => {
    dispatch(addToCart(item));
    setShowNotification(true);

    // Hide the notification after a delay (e.g., 3 seconds)
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div
      onClick={() => {
        setSelectedItem(item);
        setShowDetail(true);
      }}
      className="card card-compact cursor-pointer h-80 lg:h-96 w-64 lg:w-80 bg-white hover:shadow-lg shadow-md"
    >
      <figure>
        <img
          className="hover:scale-105 duration-300"
          src={item.image}
          alt={item.category}
        />
      </figure>
      <div className="card-body text-myBlue">
        <h2 className="card-title">{item.category}</h2>
        <p>
          {item.calories} calories, {item.protein} g protein, {item.carbs} g carbs, {item.fat} g fat
        </p>
        <div
          onClick={(e) => e.stopPropagation()}
          className="card-actions py-3 justify-between items-center"
        >
          <p
            onClick={() => {
              setSelectedItem(item);
              setShowDetail(true);
            }}
            className="text-myOrange font-Poppins text-sm font-semibold underline"
          >
            View Detail
          </p>
          <span
            className="mr-2 hover:text-myOrange active:scale-95 hover:scale-105 duration-100"
            onClick={() => handleAdd(item)}
          >
            <BiSolidCartAdd size={30} />
          </span>
        </div>
      </div>

      {/* Notification */}
      {showNotification && (
        <motion.div 
            className="flex justify-center z-40 fixed top-20 right-0 w-full h-4"
            initial={{opacity: 0, y: -10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: .2, ease: [.64,.04,.08, .98]}}
        >
          <div className="p-2 w-auto py-5 bg-myOrange items-center text-white leading-none rounded-full flex justify-between " role="alert">
            <MdFileDownloadDone className="ml-2 mr-2" size={20} />
            <span className="font-Poppins mr-2 text-left flex-auto ">Added to cart successfully!</span>
          </div>  
        </motion.div>
      )}
    </div>
  );
};

export default FoodItem;
