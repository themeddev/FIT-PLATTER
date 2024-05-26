import { motion } from 'framer-motion';

const RecommendationPg = () => {
    
    return ( 
        <motion.div 
            className="w-3/5 h-full flex flex-col items-center text-center mx-auto my-12"
            animate={{ opacity : 100 }} 
            initial={{ opacity : 0 }} 
            transition={{ delay: 0.4 }}
        >
            
            <h3 className="font-Outfit text-2xl text-headersBlue font-semibold">
                Recommendations
            </h3>
            <p className="text-l text-gray-400 mt-4 leading-snug tracking-wide">
                Elevate your fitness routine with our pre-workout meals, carefully crafted with energy-boosting complex carbs and lean proteins. After your intense session, indulge in our post-workout recommendations, rich in protein to aid muscle recovery and replenish your energy levels for an overall enhanced fitness experience.
            </p>
        </motion.div>
     );
}
 

export default RecommendationPg;