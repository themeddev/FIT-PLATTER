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
  Select,
} from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export function Elements() {
    const [elements, setElements] = useState([]);
    const [toggel, setToggel] = useState(false)
    const [image, setImage] = useState(null)
    const [ID, setID] = useState(null);
    const [togglDel, setTogglDel] = useState(false);
    const [inputs, setInputs] = useState({
        name: "",
        calories: "",
        carbs: "",
        fat: "",
        measurementUnit: "",
        price: "",
        protein: ""
    })


    const handelEdite = (id) =>{
        setID(id);
        setToggel(true);
        axios.get(`${import.meta.env.VITE_APP_BACKEND_HOST}/api/elements/${id}`)
            .then(({data}) => setInputs(data))
            .catch(err => console.log(err))
    }

    const handleFileChange = (event) => {
        const image = event.target.files[0];
        setImage(image)
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        const token = JSON.parse(localStorage.getItem('user')).token
        console.log(image)
        axios.put(`${import.meta.env.VITE_APP_BACKEND_HOST}/api/elements/${ID}`, {inputs, image}, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
            .then((data)=> console.log(data))
            .catch(err=> console.log(err));

    }
    const handleChange = (e)=> {
        console.log(e)
        setInputs(prev => ({...prev, [e.target.name]:e.target.value}))
    }
    
    const handelDelete = ()=>{
        const token = JSON.parse(localStorage.getItem('user')).token
        axios.delete(`${import.meta.env.VITE_APP_BACKEND_HOST}/api/elements/${ID}`, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
            .then(()=> window.location.reload())
            .catch(err=> console.log(err));

    }
    const handelDeleteToggl = (id) =>{
        setID(id);
        setTogglDel(true);
        console.log(id)
    }

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
                        className="w-72"
                        // size="md"
                        label="Search"
                        // icon={<MagnifyingGlassIcon className="h-5 w-5" />}
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
                    <Button className="bg-myOrange rounded-r-none" onClick={() => handelEdite(element.id)}>Edit</Button>
                    <Button className="bg-[#f00] rounded-l-none" onClick={() => handelDeleteToggl(element.id)} >Delete</Button>
                </ButtonGroup>
            </Card>
            ))}
        </div>
        {toggel && (
            <>
                <div
                    className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <Card className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div >
                            <Typography variant="h4" color="blue-gray" className="p-3">
                            Modify Ingrediant
                            </Typography>
                            <div className="flex items-center justify-center md:bg-gray-50">
                                <form  className="mt-4 px-5">
                                    <Input
                                        label="name"
                                        name="name"
                                        value={inputs.name}
                                        onChange={handleChange}
                                    />
                                    <div className="flex gap-5 mt-5">
                                        <Input
                                            label="calories"
                                            name="calories"
                                            value={inputs.calories}
                                            onChange={handleChange}
                                            type="number"
                                        />
                                        <Input
                                            label="carbs"
                                            value={inputs.carbs}
                                            name="carbs"
                                            onChange={handleChange}
                                            type="number"
                                        />
                                    </div>
                                    <div className="flex gap-5 my-3">
                                        <Input
                                            label="fat"
                                            value={inputs.fat}
                                            onChange={handleChange}
                                            name="fat"
                                            type="number"
                                        />
                                        <Input
                                            label="protein"
                                            value={inputs.protein}
                                            onChange={handleChange}
                                            name="protein"
                                            type="number"
                                        />
                                    </div>
                                    <div className="flex gap-5 my-3">
                                        <div class="relative h-10 w-72 min-w-[200px]">
                                            <select
                                                value={inputs.measurementUnit}
                                                onChange={handleChange}
                                                name="measurementUnit"
                                                class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                                                <option value="Gram">Gram</option>
                                                <option value="Liter">Liter</option>
                                                <option value="Unit">Unit</option>
                                                <option value="Cup">Cup</option>
                                                <option value="TableSpoon">TableSpoon</option>
                                            </select>
                                            <label
                                                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                Measurement Unit
                                            </label>
                                        </div>
                                        <Input
                                            label="Image"
                                            onChange={(e) => handleFileChange(e)}
                                            type="file"
                                        />
                                    </div>
                                    <div className="mb-5 flex justify-center items-center gap-5 float-left">
                                        <Input 
                                            label="Price"
                                            name="price"
                                            onChange={handleChange}
                                            value={inputs.price}
                                            type="number"
                                        />
                                        <Typography variant="h6" className="fw-bold">
                                            MAD
                                        </Typography>
                                    </div>
                                    <div className="flex items-center justify-center">
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-3 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setToggel(false)}
                        >
                            Close
                        </button>
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={handleSubmit}
                        >
                            Save Changes
                        </button>
                        </div>
                    </div>
                    </Card>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        )}
        {togglDel && (
            <>
                <div
                    className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <Card className="relative w-auto my-6 mx-auto max-w-3xl">
                            <Typography variant="h4" color="blue-gray" className="p-3">
                                Confirmed
                            </Typography>
                            <Typography className="m-5">
                                Are You Sure You Want To Delete This Element ?
                            </Typography>

                        <div className="flex items-center justify-end p-3 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setTogglDel(false)}
                        >
                            Close
                        </button>
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={handelDelete}
                        >
                            Save Changes
                        </button>
                        </div>
                    </Card>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        )}
    </div>

  );
}
