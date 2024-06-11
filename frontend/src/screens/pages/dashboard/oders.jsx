import {
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
} from "@material-tailwind/react";
import axios from "axios";
import { useState, useEffect } from "react";


const TABLE_HEAD = ["Meal", "Price", "Date", "Status", "Customer", ""];

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_BACKEND_HOST}/api/orders`)
      .then(({ data }) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleConfirmOrder = (orderId) => {
    axios
      .put(`${import.meta.env.VITE_APP_BACKEND_HOST}/api/orders/${orderId}`, {
        confirmed: true,
      })
      .then(({ data }) => {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === orderId ? { ...order, confirmed: 1 } : order
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  const renderOrderRow = (order, index) => {
    const isLast = index === orders.length - 1;
    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

    return (
      <tr key={order.id}>
        <td className={classes}>
          <div className="flex items-center gap-3">
            <Avatar
              src={order.meals[0]?.image}
              alt={order.meals[0]?.category}
              size="md"
              className="border border-blue-gray-50 bg-blue-gray-50/50 object-cover"
            />
            <Typography
              variant="small"
              color="blue-gray"
              className="font-bold"
            >
              {order.meals[0]?.category}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal"
          >
            {order.total_price} MAD
          </Typography>
        </td>
        <td className={classes}>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal"
          >
            {new Date(order.created_at).toLocaleDateString()}
          </Typography>
        </td>
        <td className={classes}>
          <div className="w-max">
            <Chip
              size="sm"
              variant="ghost"
              value={order.confirmed ? "Confirmed" : "Pending"}
              color={order.confirmed ? "green" : "amber"}
            />
          </div>
        </td>
        <td className={classes}>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal"
          >
            Customer #{order.customer_id}
          </Typography>
        </td>
        <td className={classes}>
          <Tooltip content="Confirm Order">
            <Button
              variant="text"
              onClick={() => handleConfirmOrder(order.id)}
              disabled={order.confirmed}
            >
              Confirm
            </Button>
          </Tooltip>
        </td>
      </tr>
    );
  };

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Recent Orders
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              These are details about the latest Orders
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                // icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>  
          </div>
        </div>
      </CardHeader>
      {orders.length !== 0 ? (<>
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
              {!loading &&
                orders.map((order, index) => renderOrderRow(order, index))}
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
      </>)
      : (
        <div className="h-[70vh] flex justify-center items-center bg-InputBg">
          <Typography variant="h3" style={{color:"#bbb"}}>
            No Meals Avilabel At this Moment
          </Typography>
        </div>
      )
      }
    </Card>
  );
};

export default Orders;
