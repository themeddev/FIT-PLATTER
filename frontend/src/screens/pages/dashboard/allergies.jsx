import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardHeader, Typography, CardBody, ButtonGroup, Button, Input } from "@material-tailwind/react";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/solid";

const TABLE_HEAD = ["ID", "Allergy"];

export function Allergies() {
  const [allergies, setAllergies] = useState([]);
  const [toggel, setToggel] = useState(false);
  const [ediOrAdd, setEdiOrAdd] = useState('');
  const [notification, setNotification] = useState(false);
  const [notifContent, setNotiContent] = useState("");
  const [ID, setID] = useState(null);
  const [togglDel, setTogglDel] = useState(false);
  const [name, setName] = useState('')


  const token = JSON.parse(localStorage.getItem('user')).token
  const config = {
    headers:{
      Authorization: `Bearer ${token}`
    }
  }

  const handelEdite = (id) =>{
    setID(id);
    setEdiOrAdd("Edite")
    setToggel(true);
    axios.get(`${import.meta.env.VITE_APP_BACKEND_HOST}/api/allergy/${id}`, config)
      .then(({data}) => setName(data.allergy))
      .catch(err => console.log(err))
  }

  
  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.put(`${import.meta.env.VITE_APP_BACKEND_HOST}/api/allergy/${ID}`, {allergy:name}, config)
      .then(({data})=> {
        // setToggel(false);
        // setNotiContent(data.message);
        // setNotification(true);
        // setTimeout(()=> setNotification(false), 3000)
        window.location.reload()
      })
      .catch(err=> console.log(err));
        
    }

  console.log(ediOrAdd)
  const handelDelete = ()=>{
    axios.delete(`${import.meta.env.VITE_APP_BACKEND_HOST}/api/allergy/${ID}`, config)
      .then(()=> window.location.reload())
      .catch(err=> console.log(err));

  }
  const handelDeleteToggl = (id) =>{
    setID(id);
    setTogglDel(true);
  }

  const handelAddSubmit = ()=>{
    axios.post(`${import.meta.env.VITE_APP_BACKEND_HOST}/api/allergy`,{allergy: name}, config)
      .then(() => window.location.reload())
      .catch((err) => console.log(err))
  }
  const handelAdd = ()=>{
    setToggel(true);
    setEdiOrAdd("Add")
    setName('')
  }


  useEffect(() => {
    axios
    .get(`${import.meta.env.VITE_APP_BACKEND_HOST}/api/smallTable`)
    .then(({ data }) => setAllergies(data.allergy))
    .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <Card className="h-full w-full p-4">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
                Type Of Allergies
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Here are the details for all allergies
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
            <Input
                label="Search"
                // icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
            </div> 
            <Button onClick={handelAdd} className="flex items-center gap-3 text-gray-900" size="sm">
               Add Productivity
            </Button> 
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
            {allergies.map(({ id, allergy }) => (
              <tr key={id}>
                <td className="p-4 border-b border-blue-gray-50">{id}</td>
                <td className="p-4 border-b border-blue-gray-50">{allergy}</td>
                <td  className="p-4 border-b border-blue-gray-50 w-5">
                    <ButtonGroup size="sm">
                        <Button className="bg-myOrange rounded-r-none" onClick={()=> handelEdite(id)}>Edit</Button>
                        <Button className="bg-[#f00] rounded-l-none" onClick={()=> handelDeleteToggl(id)}>Delete</Button>
                    </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardBody>
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
                      {ediOrAdd === "Edite" ? 'Modify Productivity' : "Add Productivty"}
                      </Typography>
                      <div className="flex items-center justify-center md:bg-gray-50">
                          <form  className="my-5 px-5">
                              <Input
                                label="Type Of Sports"
                                name="name"
                                // style={{background:"#FC6212"}}
                                className="bg-InputBg focus:border-[#FC6212]"
                                value={name}
                                onChange={()=> setName(event.target.value)}
                              />
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
                      className={`${ediOrAdd === "Edite" ? 'bg-emerald-500' : 'bg-[#FC6212]'} text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                      type="button"
                      
                      onClick={ediOrAdd === "Edite" ? handleSubmit : handelAddSubmit}
                  >
                      {ediOrAdd === "Edite" ? 'Save Changes' : "Add"}
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
    </>
  );
}
