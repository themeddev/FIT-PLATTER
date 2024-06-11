import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

import axios from "axios";

const TABLE_HEAD = ["First Name", "Last Name", "Email", "Role", "Gender", "Phone", "Age", ""];

let ID;

export function Customer() {
  const [users, setUsers] = useState([]);
  const [toggel, setToggel] = useState(false);
  const [input, setInputs] = useState({
    email:"",
    role: "",
    phone: "",
  })


  const handleChange = (e)=>{
    setInputs(prev =>( {...prev, [e.target.name] : e.target.value}))
  }
  

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(ID)
    axios.post(`${import.meta.env.VITE_APP_BACKEND_HOST}/api/customer/${ID}`, input)
      .then(({data}) => window.location.reload())
      .catch((err) => console.log(err))
  }
  
  const handelTogel = (id)=>{
    ID = id;
    if(!id) return setToggel(prev => !prev);
    axios.get(`${import.meta.env.VITE_APP_BACKEND_HOST}/api/customer/${id}`)
      .then((({data}) => setInputs({
            email:data.customer.email,
            role: data.customer.role,
            phone: data.customer.phone
        })
      ))


      .catch((err) => console.log(err));

    setToggel(prev => !prev)
  }

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_BACKEND_HOST}/api/customer`)
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Customers
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Here are the details for all customers
            </Typography>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map(
              ({
                id,
                first_name,
                last_name,
                email,
                gender,
                role,
                phone,
                age,
              }, index) => {
                const isLast = index === users.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={id}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {first_name}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {last_name}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {email}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Chip className={`${role === "Admin" ? 'text-sky-900' : 'text-green-800'}`} value={role} />
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={gender}
                          color={
                            role === "Admin"
                              ? "green"
                              : role === "Customer"
                              ? "amber"
                              : "red"
                          }
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {phone ? phone : 'Unknown'}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {age ? `${age} yo` : 'Unknown'}
                      </Typography>
                    </td>
                    <td className={classes}>

                        <Tooltip content="Edit User">
                          <IconButton variant="text"
                            type="button"
                            onClick={() => handelTogel(id)}
                          className="flex justify-center items-center">
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                    </td>
                    
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
      
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button variant="outlined" size="sm">
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton variant="outlined" size="sm">
            1
          </IconButton>
          <IconButton variant="text" size="sm">
            2
          </IconButton>
          <IconButton variant="text" size="sm">
            3
          </IconButton>
          <IconButton variant="text" size="sm">
            ...
          </IconButton>
          <IconButton variant="text" size="sm">
            8
          </IconButton>
          <IconButton variant="text" size="sm">
            9
          </IconButton>
          <IconButton variant="text" size="sm">
            10
          </IconButton>
        </div>
        <Button variant="outlined" size="sm">
          Next
        </Button>
      </CardFooter>
    </Card>
    {toggel && (
      <>
        <div
            className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <Card className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div >
                    <Typography variant="h4" color="blue-gray" className="p-3">
                    Modify Customer
                    </Typography>
                    <div className="flex items-center justify-center md:bg-gray-50">
                        <form  className="mt-4 px-5">
                            <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={input.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                                className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
                            />
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                                Phone
                            </label>
                            <input
                                type="phone"
                                id="phone"
                                name="phone"
                                value={input.phone}
                                onChange={handleChange}
                                placeholder="Enter email"
                                className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
                            />
                            </div>
                            <div className="mb-4">
                            <div class="relative h-10 w-72 min-w-[200px]">
                                <select
                                    class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                                    <option value="Admin">Admin</option>
                                    <option value="Customer">Customer</option>
                                </select>
                                <label
                                    class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Role
                                </label>
                              </div>
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
    </>
  );
}
