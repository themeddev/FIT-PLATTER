// CartProduct.jsx
import { FaTimes } from "react-icons/fa";
import { removeFromCart } from "../../../redux/CartSlice"; 
import { useDispatch } from "react-redux";

const CartProduct = ({ el }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(el));
  };

  return (
    <div className="flex justify-between items-center border-b border-gray-300 py-2">
      <div className="flex items-center gap-4">
        <img className="h-[90px] object-cover w-[130px] rounded" src={el.image} alt={el.category} />
        <div>
          <h3 className="font-medium">{el.category}</h3>
          <p className="text-gray-600">{el.quantity} x {el.price} MAD</p>
        </div>
      </div>
      <div onClick={handleRemove} className="text-gray-400 hover:text-myBlue cursor-pointer">
        <FaTimes />
      </div>
    </div>
  );
};

export default CartProduct;