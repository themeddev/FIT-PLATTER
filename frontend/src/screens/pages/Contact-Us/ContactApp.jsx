import React from 'react';
import HeroCopy from '../Navbar-Footer/FirstSection';
import ContactForm from './ContactForm';
import img from '../../../images/contact.webp';
import SEO from '../../../data/seo';
import INFO from '../../../data/user';import { Helmet } from "react-helmet";

const ContactUsApp = () => {
    let title = 'Contact us';

    return (
        <>
            <Helmet>  
                <title>{`${title} | ${INFO.main.title}`}</title>
                <meta name="description" content={SEO[4].description} />
                <meta name="keywords" content={SEO[4].keywords.join(", ")} />
            </Helmet>

            {/* components.. */}
            <HeroCopy title={title} imgSrc={img} />
            <ContactForm />
        </>
    );
}
 
export default ContactUsApp;
