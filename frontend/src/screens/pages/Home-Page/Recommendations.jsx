import { motion } from 'framer-motion';

const Recommendations = () => {
  const workoutMeals = {
    preMeal: {
      title: "Pre-Workout",
      calories: 525,
      protein: 38,
      carbs: 59,
      fat: 15,
      ingredients: [
        "4-6 egg whites with 2 whole eggs",
        "1 serving Cream of Wheat cereal",
        "1 banana",
      ],
      image: "https://images.unsplash.com/photo-1431536037963-5c282b753c25?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    afterMeal: {
      title: "After-Workout",
      calories: 600,
      protein: 40,
      carbs: 65,
      fat: 18,
      ingredients: [
        "Grilled chicken breast",
        "Quinoa",
        "Steamed vegetables",
      ],
      image: "https://images.unsplash.com/photo-1565848920056-906a21da8c70?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  };

  const renderMealCard = (meal) => (
    <motion.a
      href="#"
      className="mx-auto flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:shadow-xl transition-all duration-400"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <img
        src={meal.image}
        alt={meal.title}
        className="object-cover bg-cover w-96 rounded-t-lg h-64 md:h-64 md:w-48 md:rounded-none md:rounded-l-lg"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-headersBlue">
          {meal.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700">
          {meal.calories} calories, {meal.protein} g protein, {meal.carbs} g
          carbs, {meal.fat} g fat
        </p>
        <ul>
          {meal.ingredients.map((item, index) => (
            <li key={index} className="text-base text-myBlue">
              - {item}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-left mt-4">
          <button className="px-4 py-2 font-Outfit text-white bg-myOrange rounded-full hover:bg-orange-600">
            Order Now
          </button>
        </div>
      </div>
    </motion.a>
  );

  return (
    <div className="flex justify-center items-start mx-[10%] lg:mx-[8%] md:mx-[5%] flex-col lg:flex-row gap-4 my-10">
      {renderMealCard(workoutMeals.preMeal)}
      {renderMealCard(workoutMeals.afterMeal)}
    </div>
  );
};

export default Recommendations;
