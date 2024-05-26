// CartProduct.jsx
import { FaTimes } from "react-icons/fa";
import { addToCartMenu, removeFromCartMenu } from "../../../../redux/ElemCartSlice"; 
import { useDispatch } from "react-redux";

const CartMenuElem = ({ el }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center border-b border-gray-300 py-2">
      <div className="flex items-center gap-4">
        <img className="h-12 w-12 object-cover rounded" src={el.image} alt={el.category} />
        <div>
          <h3 className="font-normal text-sm">{el.name}</h3>
          <p className="text-gray-500 text-xs">{el.quantity} x {el.price} MAD</p>
        </div>
      </div>
      <div className="flex items-center">
        <button onClick={() => dispatch(removeFromCartMenu(el))} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-white">-</button>
        <input className="h-8 w-8 border border-gray-300 bg-white text-center text-sm outline-none mx-1" type="number" value={el.quantity} readOnly min="1" />
        <button onClick={() => dispatch(addToCartMenu(el))} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-white">+</button>
      </div>
    </div>
  );
};

export default CartMenuElem;