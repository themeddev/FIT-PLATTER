import { motion } from "framer-motion";
import UserInfo from "./UserInfo";
import { Link } from "react-router-dom";

const Asside = ({customer_id}) => {
    
    
    return ( 
        <div className="bg-white w-full flex flex-col gap-5 px-4 md:px-16 lg:px-28 md:flex-row text-myBlue">
            <motion.aside 
                className="hidden py-4 md:w-1/3 lg:w-1/4 md:block"
                animate={{ opacity : 100 }} 
                initial={{ opacity : 0 }} 
                transition={{ delay: 0.4 }}  
                >
                <div className="sticky flex flex-col gap-4 p-4 text-sm border-r border-indigo-100 top-20">
                    <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>
                    <a href="#" className="flex items-center px-3 py-2.5 font-bold bg-white text-myBlue hover:bg-gray-50 hover:rounded">
                        Profile Info
                    </a>
                    <a href="#" className="flex items-center px-3 py-2.5 font-semibold text-myBlue hover:bg-gray-50 hover:rounded">
                        Account Security
                    </a>
                    <a href="#" className="flex items-center px-3 py-2.5 font-semibold text-myBlue hover:bg-gray-50 hover:rounded">
                        Notifications
                    </a>
                    <Link to='/shopping-cart' className="flex items-center px-3 py-2.5 font-semibold text-myBlue hover:bg-gray-50 hover:rounded">
                        Your Cart
                    </Link>
                </div>
            </motion.aside>
            <motion.main 
                className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4"
                animate={{ opacity : 100 }} 
                initial={{ opacity : 0 }} 
                transition={{ delay: 0.4 }}  
                >
                <UserInfo customer_id={customer_id} />
            </motion.main>
        
        </div>
     );
}
 
export default Asside;