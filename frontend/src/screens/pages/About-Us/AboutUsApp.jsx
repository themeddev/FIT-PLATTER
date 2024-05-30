import HeroCopy from "../Navbar-Footer/FirstSection";
import Map from "./Map";
import OurChefs from "./OurChefs";
import ServicesInfo from "./ServicesInfo";
import img from '../../../images/about.webp'
import INFO from "../../../data/user";
import SEO from "../../../data/seo";
import { Helmet } from "react-helmet";

const AboutUsApp = () => {

    
    
    return ( 
        <>
            <Helmet>
                <title>{`${SEO[2].page} | ${INFO.main.title}`}</title>
                <meta name="description" content={SEO[2].description} />
                <meta name="keywords" content={SEO[2].keywords.join(", ")} />
            </Helmet>

            {/* components.. */}
            <HeroCopy title={SEO[2].page} imgSrc={img} />
            <ServicesInfo />
            <OurChefs />
            <Map />
        </>
     );
}
 
export default AboutUsApp;