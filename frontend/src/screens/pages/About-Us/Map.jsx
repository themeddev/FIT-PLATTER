const Map = () => {
    return ( 
        <div className="flex flex-col w-4/5 mx-auto text-center ">
            <h3 className="font-Outfit text-2xl text-headersBlue font-semibold">
                Here We Are!
            </h3>
            <div className="my-10">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6880.761366330246!2d-9.590098908388141!3d30.42530855033513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b65dcc6c5a4b%3A0x41f3c6bcbf76552c!2sIHCHACH%2C%20Agadir%2080000!5e0!3m2!1sen!2sma!4v1707604269051!5m2!1sen!2sma"
                    className="h-80 w-full border-0 rounded-lg shadow-lg" allowFullScreen="" loading="lazy">
                </iframe>
            </div>
        </div>
     );
}
 
export default Map;