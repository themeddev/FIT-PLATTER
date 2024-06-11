import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
  Button,
  Input,
  ButtonGroup,
} from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_BACKEND_HOST}/api/meals`)
      .then(({ data }) => setMeals(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(meals.length)
  return (
    <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none mb-3">
            <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                <div>
                    <Typography variant="h5" color="blue-gray">
                        Meals
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                    These are details about Meals
                    </Typography>
                </div>
                <div className="flex w-full shrink-0 gap-2 md:w-max">
                    <div className="w-full md:w-72">
                    <Input
                        label="Search"
                        
                    />
                    </div>  
                </div>
            </div>
        </CardHeader>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {meals.length !== 0 ? meals.map((meal) => (
          <Card key={meal.id} className="w-full">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={meal.image}
                alt={meal.category}
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody className="grow pb-2">
              <Typography variant="h5" className="mb-2">
                {meal.category}
              </Typography>
              <div className="flex flex-wrap gap-2 mb-2">
                <Chip variant="outlined" color="blue" value={`Calories: ${meal.calories}`} />
                <Chip variant="outlined" color="green" value={`Protein: ${meal.protein}g`} />
                <Chip variant="outlined" color="yellow" value={`Carbs: ${meal.carbs}g`} />
                <Chip variant="outlined" color="red" value={`Fat: ${meal.fat}g`} />
              </div>
              <Typography variant="small" className="mb-4">
                {`Price: ${meal.price} MAD`}
              </Typography>
              <Typography variant="small" color="blue-gray" className="font-bold">
                Ingredients:
              </Typography>
              <ul className="list-disc list-inside">
                {meal.elements.map((element) => (
                  <li key={element.id} className="text-gray-500 font-Poppins p-2 text-sm">
                    {element.name} - {element.calories} calories, {element.protein}g protein,{" "}
                    {element.carbs}g carbs, {element.fat}g fat
                  </li>
                ))}
              </ul>
            </CardBody>
            <ButtonGroup size="sm" fullWidth>
                <Button className="bg-myOrange rounded-r-none">Edit</Button>
                <Button className="bg-[#f00] rounded-l-none">Delete</Button>
            </ButtonGroup>
          </Card>
        )) : (
          
          <div className="h-[70vh] w-100 flex justify-center items-center p-5 ">
            <Typography variant="h3" style={{color:"#bbb"}}>
              No Meals Avilabel At this Moment
            </Typography>
          </div>
        )}
      </div>
    </Card>
  );
}
