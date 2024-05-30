import INFO from "../../../data/user";
import SEO from "../../../data/seo";
import { Helmet } from "react-helmet";
import Banner from './Banner'
import Asside from './Asside'



const ProfileApp = () => {
    
    const Customer = JSON.parse(localStorage.getItem('user'));
    const title = `Hello, ${Customer.first_name}!`;
    
    
    return ( 
        <>
            <Helmet>
                <title>{`${title} | ${INFO.main.title}`}</title>
                <meta name="description" content={SEO[9].description} />
                <meta name="keywords" content={SEO[9].keywords.join(", ")} />
            </Helmet>

            {/* components */}
            <Banner title={title} />
            <Asside  customer_id={Customer.customer_id} />

        </>
     );
}
 
export default ProfileApp;