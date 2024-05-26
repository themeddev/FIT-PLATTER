import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const FoodDetail = ({ showDetail, setShowDetail, item }) => {
  return (
    <div
      className={`fixed inset-0 z-20 ${
        showDetail ? "bg-black bg-opacity-50" : "hidden"
      } flex items-center justify-center`}
      onClick={() => setShowDetail(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="max-w-sm w-full bg-white rounded overflow-hidden shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img className="w-full h-60 object-cover" src={item?.image} alt={item?.category} />
          <FaTimes
            className="text-[24px] absolute top-4 right-4 hover:text-gray-500 cursor-pointer"
            onClick={() => setShowDetail(false)}
          />
        </div>

        <div className="px-6 py-4">
          <div className="flex flex-row justify-between mb-2 items-center">
            <span className="font-Outfit text-xl text-myBlue">{item?.category}</span>
            <p className="bg-myOrange text-white px-3 rounded-2xl font-Poppins text-base font-semibold">
              {item?.meal_price} MAD
            </p>
          </div>
          <p className="text-gray-700 text-base">
            {item?.calories} calories, {item?.protein} g protein, {item?.carbs} g
            carbs, {item?.fat} g fat
          </p>
        </div>

        <div className="px-6 pt-2 pb-6">
          {item?.elements.map((ing) => (
            <span
              key={ing.id}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {ing.name + ` (${ing.pivot.size})` }
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FoodDetail;
