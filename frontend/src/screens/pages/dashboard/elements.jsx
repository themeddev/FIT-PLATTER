import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Chip,
  Button,
  Input,
  ButtonGroup,
} from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export function Elements() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/elements")
      .then(({ data }) => setElements(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none mb-3">
            <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                <div>
                    <Typography variant="h5" color="blue-gray">
                    Elements
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                    These are details about Elements
                    </Typography>
                </div>
                <div className="flex w-full shrink-0 gap-2 md:w-max">
                    <div className="w-full md:w-72">
                    <Input
                        label="Search"
                        icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                    />
                    </div>  
            </div>
            </div>
        </CardHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {elements.map((element) => (
            <Card key={element.id} className="w-full">
                <CardHeader color="blue-gray" className=" shadow-none relative h-56">
                    <img
                        src={element.image}
                        alt={element.name}
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" className="mb-2">
                        {element.name}
                    </Typography>
                    <div className="flex flex-wrap gap-2 mb-2">
                        <Chip variant="outlined" color="blue" value={`Calories: ${element.calories}`} />
                        <Chip variant="outlined" color="green" value={`Protein: ${element.protein}g`} />
                        <Chip variant="outlined" color="yellow" value={`Carbs: ${element.carbs}g`} />
                        <Chip variant="outlined" color="red" value={`Fat: ${element.fat}g`} />
                    </div>
                    <Typography variant="small" className="mb-4">
                        {`Price: ${element.price} MAD`}
                    </Typography>
                </CardBody>
                <ButtonGroup size="sm" fullWidth>
                    <Button className="bg-myOrange rounded-r-none">Edit</Button>
                    <Button className="bg-[#f00] rounded-l-none">Delete</Button>
                </ButtonGroup>
            </Card>
            ))}
        </div>
    </div>
  );
}
