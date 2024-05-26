import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const HeroCopy = ({title, imgSrc}) => {

  const location = useLocation();
  const excludedPaths = '/custom';
    
  return (
    <div className="w-full h-full flex flex-col items-center mx-auto mb-12 gap-10">
      <motion.section
          animate={{ opacity : 100 }} 
          initial={{ opacity : 0 }} 
          transition={{ delay: 0.1 }}
          className="w-full md:w-[95%]  h-[250px] bg-cover bg-center items-center md:rounded-lg"
          style={{
              backgroundImage:`url(${imgSrc})`,
              objectFit: 'cover',
        }}
      >
        <div className="container flex mx-auto flex-col items-center justify-center h-full">
          <motion.h1 
            className="md:text-5xl text-3xl font-Outfit text-headersBlue"
            animate={{ opacity : 100 }} 
            initial={{ opacity : 0 }} 
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h1>
        </div>
      </motion.section>
      { location.pathname !== excludedPaths ? 
        <motion.div
          animate={{ opacity : 100 }} 
          initial={{ opacity : 0 }} 
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/custom"
            className="inline-flex items-center bg-myOrange font-Poppins font-semibold text-white py-3 px-10 rounded-lg hover:bg-orange-600 duration-100"
          >
            Custom
          </Link>
        </motion.div>
        : 
        <motion.div 
            className="w-3/5 h-full flex flex-col items-center text-center mx-auto "
            animate={{ opacity : 100 }} 
            initial={{ opacity : 0 }} 
            transition={{ delay: 0.3 }}
        >
            <p className="text-l text-gray-400 leading-snug tracking-wide">
              Feel empowered in your fitness journey by choosing from our diverse range of plats. Whether you're looking to fuel up before your workout with energy-boosting complex carbs and lean proteins, or seeking post-workout meals rich in protein to aid muscle recovery and replenish energy levels, we've got you covered. Embrace the freedom to select the plat that suits your needs and preferences, and elevate your fitness experience to new heights.
            </p>
        </motion.div>
      }
    </div>
  );
};

export default HeroCopy;