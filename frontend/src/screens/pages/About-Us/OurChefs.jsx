import { motion } from "framer-motion";
import Skeleton from "./Skeleton";

const OurChefs = () => {
  const chefs = [
    {
      name: 'Ilyass Taher',
      speciality: 'Specialist in Pasta',
      img: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Ali Elbaset',
      speciality: 'Expert in Salads',
      img: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name:'Hiba Green',
      speciality:"Master of the grill",
      img:'https://images.unsplash.com/photo-1516465879621-ba68889551a7?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name:'Meryen Qamar',
      speciality:"Master of the grill",
      img:'https://img.freepik.com/free-photo/young-confident-blonde-female-chef-chef-uniform-stands-sideways-gestures-ok-hand-sign-isolated-green-wall_141793-35223.jpg?t=st=1717181750~exp=1717185350~hmac=7911e3417cc4449d9be5acc6e0e2cf7bd0f6aad6d767e412de7ca0fb57b0bd63&w=900'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center text-center mx-auto my-12 px-4">
      <h3 className="font-Outfit text-2xl mb-4 text-headersBlue font-semibold">
        Our Chefs Experts
      </h3>
      <div className="flex flex-wrap gap-6 justify-center mt-6">
        {chefs ? 
          (chefs.map((item, index) => (
            <div 
              className="relative flex flex-col bg-white shadow-md rounded-lg lg:w-80 w-full sm:w-64"
              key={index}
            >
              <div className="relative overflow-hidden rounded-lg h-48 lg:h-64">
                <img 
                  className="hover:scale-105 transition duration-500 cursor-pointer w-full h-full object-cover" 
                  src={item.img} 
                  alt={item.name && 'A chef!'} 
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="block mb-2 font-sans text-2xl font-semibold leading-snug tracking-normal text-headersBlue">
                  {item.name} 
                </h4>
                <p className="block font-sans text-base font-medium leading-relaxed text-gray-400">
                  {item.speciality}
                </p>
              </div>
            </div>
          ))) : <Skeleton />
        }
      </div>
    </div>
  );
}

export default OurChefs;