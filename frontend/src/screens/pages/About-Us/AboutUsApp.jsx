import HeroCopy from "../Navbar-Footer/FirstSection";
import Map from "./Map";
import OurChefs from "./OurChefs";
import ServicesInfo from "./ServicesInfo";
import img from '../../../images/about.webp'
import INFO from "../../../data/user";
import SEO from "../../../data/seo";
import { Helmet } from "react-helmet";

const AboutUsApp = () => {

    const title = 'About us';
    
    
    return ( 
        <>
            <Helmet>
                <title>{`${title} | ${INFO.main.title}`}</title>
                <meta name="description" content={SEO[3].description} />
                <meta name="keywords" content={SEO[3].keywords.join(", ")} />
            </Helmet>

            {/* components.. */}
            <HeroCopy title={title} imgSrc={img} />
            <ServicesInfo />
            <OurChefs />
            <Map />
        </>
     );
}
 
export default AboutUsApp;