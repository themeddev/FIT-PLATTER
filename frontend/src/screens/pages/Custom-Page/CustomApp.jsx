import HeroCopy from "../Navbar-Footer/FirstSection";
import img from '../../../images/custom.webp'
import INFO from "../../../data/user";
import SEO from "../../../data/seo";
import Elements from "./Elements/Elements";
import { Helmet } from "react-helmet";

const CustomApp = () => {

    return ( 
    <>
        <Helmet>
            <title>{`${SEO[3].page} | ${INFO.main.title}`}</title>
            <meta name="description" content={SEO[3].description} />
            <meta name="keywords" content={SEO[3].keywords.join(", ")} />
        </Helmet>
        <HeroCopy title={SEO[3].page} imgSrc={img} />
        <Elements />
    </>
    );
}
 
export default CustomApp;