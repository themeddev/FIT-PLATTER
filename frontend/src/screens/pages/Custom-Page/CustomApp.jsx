import HeroCopy from "../Navbar-Footer/FirstSection";
import img from '../../../images/custom.webp'
import INFO from "../../../data/user";
import SEO from "../../../data/seo";
import Elements from "./Elements/Elements";
import { Helmet } from "react-helmet";

const CustomApp = () => {

    const title = 'Custom';


    return ( 
    <>
        <Helmet>
            <title>{`${title} | ${INFO.main.title}`}</title>
            <meta name="description" content={SEO[2].description} />
            <meta name="keywords" content={SEO[2].keywords.join(", ")} />
        </Helmet>
        <HeroCopy title={title} imgSrc={img} />
        <Elements />
    </>
    );
}
 
export default CustomApp;