import { BiSolidCartAdd } from "react-icons/bi";
import { addToCartMenu } from "../../../../redux/ElemCartSlice";
import { useDispatch } from "react-redux";
import defaultImage from '../../../../images/vege.webp'; // Placeholder image URL

const ElementItem = ({ elem, setShowMenu }) => {
  const dispatch = useDispatch();

  const handleAdd = (elem) => {
    dispatch(addToCartMenu(elem));
  };

  const handleRemove = (elem) => {
    dispatch(addToCartMenu(elem));
  };

  return (
    <div className="card card-compact cursor-pointer w-48 lg:w-64 bg-white hover:shadow-lg shadow-md">
      <figure>
        <img
          className="hover:scale-105 duration-300"
          src={elem.image ? elem.image : defaultImage} // Use default image if elem.image is not found
          alt={elem.name}
        />
      </figure>
      <div className="card-body text-myBlue">
        <h2 className="card-title text-sm lg:text-base">{elem.name}</h2>
        <p className="text-xs lg:text-sm truncate">
          {elem.calories} calories, {elem.protein} g protein, {elem.carbs}g carbs, {elem.fat} g fat
        </p>
        <div
          onClick={(e) => e.stopPropagation()}
          className="card-actions py-2 lg:py-3 justify-between items-center"
        >
          <p className="bg-myOrange text-white px-2 lg:px-3 flex-none rounded-2xl font-Poppins text-xs lg:text-sm">
            {elem?.price} MAD / {elem.measurementUnit === 'Gram' ? '100g' : elem.measurementUnit }
          </p>

          <span
            className="mr-1 lg:mr-2 hover:text-myOrange active:scale-95 hover:scale-105 duration-100"
            onClick={() => {
              handleAdd(elem);
              setShowMenu(true);
            }}
          >
            <BiSolidCartAdd size={24} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ElementItem;
