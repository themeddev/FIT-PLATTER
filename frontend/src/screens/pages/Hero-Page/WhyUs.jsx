import { HiMiniHomeModern } from "react-icons/hi2";
import { PiNumberSquareOneFill } from "react-icons/pi";
import { RiTimerFill } from "react-icons/ri";
import { motion } from 'framer-motion'
const WhyUs = () => {
  const cardContent = [
    {
      icon: <HiMiniHomeModern size={35} />,
      title: 'Own fruit orchard',
      description: 'Because it\'s about motivating the doers. Because I\'m here to follow my dreams and inspire others.',
    },
    {
      icon: <PiNumberSquareOneFill size={35} />,
      title: '#1 Healthy Fruit Salad',
      description: 'Because it\'s about motivating the doers. Because I\'m here to follow my dreams and inspire others.',
    },
    {
      icon: <RiTimerFill size={35} />,
      title: 'Time Saver',
      description: 'Efficiency redefined – our service empowers you to save time and take action on your dreams.',
    },
  ];


  return (
    <div className="w-full h-full lg:h-[450px] bg-white flex items-center justify-arround my-6 flex-col p-[5%] lg:px-[10%]">
      <motion.div 
          initial={{ y: 10 , scale: 0.99, opacity : 0}}
          whileInView={{ y: 0 , scale: 1,  opacity : 1 }}
          transition={{  duration: 0.3, delay: 0.2 }}
          className="flex md:flex-row flex-col">
        <h3 className="font-Outfit text-2xl md:text-3xl text-myBlue max-w-[400px]">
          WHY CHOOSE US <br />FOR
          <span className="text-myOrange"> YOUR HEALTHY FOOD</span>
        </h3>
        <p className="text-gray-500 font-Poppins md:w-2/5 md:m-auto mt-2 w-full">We continue to consistently choose and maintain the quality of the fruit served so that it remains fresh and nutritious when you eat it.</p>
      </motion.div>

      <div className="flex flex-col lg:flex-row lg:gap-6 gap-4 pt-10 px-[5%] ">
        {cardContent.map((item, index) => (
          <motion.div 
            initial={{ y: 5, scaleZ: 0.99 , opacity : 0 }}
            whileInView={{ y: 0 ,scaleZ: 1,  opacity : 1 }}
            transition={{ delay: 0.3 }}
            key={index}
            className={`flex flex-col md:flex-row mt-6 text-gray-700 bg-white shadow-lg duration-300 bg-clip-border rounded-xl xl:w-96 lg:w-80 w-full ${index === 1 ? 'shadow-[#FFE8C8]' : ''}`}
          >
            <div className="p-6">
              <div className="w-12 h-12 mb-4 text-myOrange">
                {item.icon}
              </div>
              <h5 className="block mb-2 font-Poppins text-xl antialiased font-semibold leading-snug tracking-normal text-myBlue">
                {item.title}
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;


