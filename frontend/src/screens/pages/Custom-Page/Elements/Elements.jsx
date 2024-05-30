import { useEffect, useState } from 'react';
import ELementItem from './ElementItem';
import Skeleton from './Skeleton';
import CartMenu from './CartMenu';


const Elements = () => {
    const [loading, setLoading] = useState(false);
    const [elements, setElements] = useState([])
    const [showMenu, setShowMenu] = useState(false)


    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/elements')
            .then(res => res.json())
            .then(data => setElements(data))
            .catch(err => console.log(err));
    
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    

    const section = (title, subtitle) => {
        return (
            <>
                <div className='mx-4'>
                    <h3 className="font-Outfit text-2xl text-headersBlue font-semibold">
                        {title}
                    </h3>
                    <p className="font-sans text-sm text-gray-500 ">
                        {subtitle}
                    </p>
                </div>

                {/* All Elements */}
                <div className="flex flex-row mt-8">
                    <div className="gap-4 w-full flex justify-center flex-row mx-auto flex-wrap transition-all duration-300">
                        {elements.map((elem) => (
                            loading ? <Skeleton key={elem.id} /> : <ELementItem key={elem.id} elem={elem} setShowMenu={setShowMenu}   />
                        ))}
                    </div>
                    { showMenu ? <CartMenu setShowMenu={setShowMenu} />
                    :
                    <div  
                        className='w-[30px] flex items-center justify-center h-[330px] bg-white rounded-lg cursor-pointer shadow-md'
                        onClick={() => setShowMenu(true)}
                        title='show menu'
                    >
                        <svg fill="#475569" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 330.002 330.002" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_227_" d="M233.25,306.001L127.5,165.005L233.25,24.001c4.971-6.628,3.627-16.03-3-21c-6.627-4.971-16.03-3.626-21,3 L96.75,156.005c-4,5.333-4,12.667,0,18l112.5,149.996c2.947,3.93,7.451,6.001,12.012,6.001c3.131,0,6.29-0.978,8.988-3.001 C236.878,322.03,238.221,312.628,233.25,306.001z"></path> </g></svg>
                    </div>
                    }
                </div>
            </>
            );
        };

    return (
        <div className="relative">
            <section className='my6 flex justify-center flex-col gap-4 mx-auto bg-[#FFF6EA] px-[3%] pt-8 pb-20'>
                {section('Elements', 'Select Elements and choose your meal')}
            </section>
        </div>
    );
};

export default Elements;
