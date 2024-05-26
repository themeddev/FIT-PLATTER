import HeroCopy from "../Navbar-Footer/FirstSection";
import RecommendationPg from "./RecommendationPg";
import Recommendations from "./Recommendations";
import img from '../../../images/home.webp';
import Food from "./Foods/Food";
import INFO from "../../../data/user";
import SEO from "../../../data/seo";
import { Helmet } from "react-helmet";


const HomeApp = () => {

    const title = 'Home';

    
    
    return ( 
        <>
            <Helmet>
                <title>{`${title} | ${INFO.main.title}`}</title>
                <meta name="description" content={SEO[1].description} />
                <meta name="keywords" content={SEO[1].keywords.join(", ")} />
            </Helmet>

            {/* components */}
            <HeroCopy title={title} imgSrc={img} />
            <RecommendationPg />
            <Recommendations />
            <Food />
        </>
     );
}
 
export default HomeApp;