import { FaCircleRight } from "react-icons/fa6";
import { motion } from 'framer-motion';
import img from '../../../images/hero.webp';
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="md:max-w-[95%] h-full flex items-center mx-auto mb-12">
      <section
        className="w-full bg-cover bg-center py-32 md:rounded-lg"
        style={{
          backgroundImage: `url(${img})`,
          objectFit: 'cover',
          backgroundAttachment: 'fixed', // Add this line
        }}
      >
        <motion.div 
          animate={{ x: 0, opacity: 100 }} 
          initial={{ x: -10, opacity: 0 }} 
          transition={{ delay: 0.3 }}
          className="mx-auto text-left ml-[10%]"
        >
          <h1 className="md:text-5xl text-3xl font-medium mb-6 text-headersBlue">Embrace a healthier lifestyle</h1>
          <p className="md:text-xl text-l mb-12 text-myBlue"> Uplifting Lives Through the Path of Wellness and Vitality.</p>
          <Link to="/home" className="inline-flex items-center bg-myOrange font-Poppins font-semibold text-white py-3 px-8 lg:py-4 lg:px-12 rounded-lg hover:bg-orange-600 duration-100">
            <span className="mr-3">Get Started</span>
            <FaCircleRight />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default HeroSection;
