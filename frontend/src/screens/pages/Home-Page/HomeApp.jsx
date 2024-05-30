import HeroCopy from "../Navbar-Footer/FirstSection";
import RecommendationPg from "./RecommendationPg";
import Recommendations from "./Recommendations";
import img from '../../../images/home.webp';
import Food from "./Foods/Food";
import INFO from "../../../data/user";
import SEO from "../../../data/seo";
import { Helmet } from "react-helmet";


const HomeApp = () => {
    
    return ( 
        <>
            <Helmet>
                <title>{`${SEO[1].page} | ${INFO.main.title}`}</title>
                <meta name="description" content={SEO[1].description} />
                <meta name="keywords" content={SEO[1].keywords.join(", ")} />
            </Helmet>

            {/* components */}
            <HeroCopy title={SEO[1].page} imgSrc={img} />
            <RecommendationPg />
            <Recommendations />
            <Food />
        </>
     );
}
 
export default HomeApp;