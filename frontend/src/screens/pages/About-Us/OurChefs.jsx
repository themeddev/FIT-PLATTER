import { motion } from "framer-motion";
import Skeleton from "./Skeleton";

const OurChefs = () => {

    const chefs = [
      {
        name: 'John Doe',
        speciality: 'Specialist in Pasta',
        img: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name: 'Jane Smith',
        speciality: 'Expert in Salads',
        img: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name:'Mike Green',
        speciality:"Master of the grill",
        img:'https://images.unsplash.com/photo-1516465879621-ba68889551a7?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      }
    ];


  return ( 

      <div className="w-full h-full flex flex-col items-center text-center mx-auto my-12">
        <h3 className="font-Outfit text-2xl mb-4 text-headersBlue font-semibold">
          Our Chefs Experts
        </h3>
        <div className="flex flex-col md:flex-row lg:gap-10 md:gap-4 gap-4 transition-all duration-300 flex-wrap justify-center mt-6">
        {chefs ? 
        (chefs.map((item, index) => (
        
          <div 
            className="relative flex flex-col bg-white shadow-md bg-clip-border rounded-lg lg:w-80 w-64 "
            key={index}
          >
            <div className="relative overflow-hidden bg-clip-border rounded-lg lg:h-64 h-48">
                <img className="hover:scale-105 transition duration-500 cursor-pointer" src={item.img} alt={item.name && 'A chef!'} />
            </div>
            <div className="p-6 text-center">
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-headersBlue">
                  {item.name} 
                </h4>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-gray-400 bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                  {item.speciality}
                </p>
            </div>
          </div>
          ) )): <Skeleton key={index} />
        }  
        </div>

      </div>     
  );

}
 
export default OurChefs;
