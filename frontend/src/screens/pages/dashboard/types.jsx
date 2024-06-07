import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardHeader, Typography, CardBody, ButtonGroup, Button, Input } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const TABLE_HEAD = ["ID", "Type", ""];

export function Types() {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_BACKEND_HOST}/api/smallTable`)
      .then(({ data }) => setTypes(data.types))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Card className="h-full w-full p-4">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
                <Typography variant="h5" color="blue-gray">
                    Type Of Sports
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Here are the details for all types
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
            {types.map(({ id, type }) => (
              <tr key={id}>
                <td className="p-4 border-b border-blue-gray-50">{id}</td>
                <td className="p-4 border-b border-blue-gray-50">{type}</td>
                <td  className="p-4 border-b border-blue-gray-50 w-5 ">
                <ButtonGroup size="sm">
                    <Button className="bg-myOrange rounded-r-none">Edit</Button>
                    <Button className="bg-[#f00] rounded-l-none">Delete</Button>
                </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}
