import { motion } from "framer-motion";

const ServicesInfo = () => {
  return ( 
    <motion.div 
        className="max-w-4/5 h-full flex flex-col items-start  mx-auto my-12"
        animate={{ opacity : 100 }} 
        initial={{ opacity : 0 }} 
        transition={{ delay: 0.3 }}
    >
        
        <h3 className="font-Outfit text-2xl mx-auto text-headersBlue font-semibold">
        Fit Platter Services
        </h3>
        
        <div className="max-w-[1400px] m-auto mt-8 py-4 px-12 grid lg:grid-cols-2 gap-4">
            <div className="text-l text-gray-400 mt-4 leading-snug tracking-wide py-10">
                
                <h3 className="font-Outfit text-l text-myBlue font-semibold mb-3">
                    Fit Platter Revolution
                </h3>
                <p>Fit Platter revolutionizes your approach to nutrition and fitness by offering personalized sports-centric meal services tailored to your unique needs.</p>
                <h3 className="font-Outfit text-l text-myBlue font-semibold my-3">
                    Advanced Nutritional Algorithms
                </h3>
                <p>Our platform leverages cutting-edge algorithms and nutritional expertise to craft a diverse menu that aligns with your fitness goals, taking into account factors such as age, weight, dietary preferences, and activity level.</p> 
                <h3 className="font-Outfit text-l text-myBlue font-semibold my-3">
                    Delightful & Nourishing Experience
                </h3>
                <p>Whether you're aiming for weight management, muscle toning, or overall wellness, Fit Platter ensures a delightful and nourishing culinary experience.</p>        
                <h3 className="font-Outfit text-l text-myBlue font-semibold my-3">
                    Curated Options & Recommendations
                </h3>
                <p>Choose from our curated list of food elements or rely on our intelligent recommendations for meals that fuel your journey to a healthier, fitter you.</p> 
                <h3 className="font-Outfit text-l text-myBlue font-semibold my-3">
                    Embrace Personalized Nutrition
                </h3>
                
                <p>Embrace the future of personalized nutrition with Fit Platter – where every dish is crafted to fuel your performance and amplify your well-being.</p>
            </div>   
            <div className="m-auto grid grid-cols-2 grid-rows-6  h-[80vh]">
        
                <img className="object-cover row-span-3 p-2 w-full h-full" src="https://images.unsplash.com/photo-1431536037963-5c282b753c25?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img1" />
                <img className="object-cover row-span-2 p-2 w-full h-full" src="https://images.unsplash.com/photo-1494597564530-871f2b93ac55?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img2" />
                <img className="object-cover row-span-2 p-2 w-full h-full" src="https://images.unsplash.com/photo-1514995428455-447d4443fa7f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img3" />
                <img className="object-cover row-span-3 p-2 w-full h-full" src="https://images.unsplash.com/photo-1514995669114-6081e934b693?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img4" />
                <img className="object-cover row-span-2 p-2 w-full h-full" src="https://images.unsplash.com/photo-1470909752008-c78c7f6423a3?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img5" />

            </div>
        </div>


    </motion.div>     
  );
}
 
export default ServicesInfo;
