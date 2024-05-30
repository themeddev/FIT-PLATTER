import { motion } from 'framer-motion';
import svgSrc from '../../../images/profileCover.webp'
import userPlaceholder from '../../../images/userPlaceholder.webp'

const Banner = ({title}) => {
                

    return (
    <div className="w-full h-full flex flex-col items-center mx-auto mb-12 gap-10">
        <motion.figure
            animate={{ opacity : 100 }} 
            initial={{ opacity : 0 }} 
            transition={{ delay: 0.1 }}
            className="w-full md:w-[95%] h-[250px] flex bg-cover bg-center items-center md:rounded-lg overflow-hidden"
            style={{
                backgroundImage:`url(${svgSrc})`,
                objectFit: 'cover',
          }}
        >
            <motion.h1 
                className="md:text-5xl mx-auto text-3xl font-Outfit text-white"
                animate={{ opacity : 100 }} 
                initial={{ opacity : 0 }} 
                transition={{ delay: 0.2 }}
            >
                {title}
            </motion.h1>
            
        </motion.figure>
        <motion.div
            animate={{ opacity : 100 }} 
            initial={{ opacity : 0 }} 
            transition={{ delay: 0.3 }}
        >
            <div className="outline outline-4 outline-white rounded-full w-[135px] h-[135px] -mt-[100px]" >
                <img src={userPlaceholder} className='w-full h-full object-cover rounded-full z-10' alt="" />
            </div>
        </motion.div>
    </div>
    );
};

export default Banner;
