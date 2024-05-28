import { useEffect, useState } from 'react';
import FoodItem from './FoodItem';
import Skeleton from './Skeleton';
import FoodDetail from './FoodDetail';

const Food = () => {
    const [loading, setLoading] = useState(true);
    const [showDetail, setShowDetail] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [foods, setFoods] = useState([]);

    useEffect( () => {
        fetch('http://127.0.0.1:8000/api/meals')
            .then(res => res.json())
            .then(data => {
                setFoods(data);
                setLoading(false);
            })
            .catch(err => {
                // console.log(err);
                setLoading(false);
            });
    }, []);

    // Separate state for each section
    const [menuTabs, setMenuTabs] = useState({
        'section1': 'Pre-Workout',
        'section2': 'Pre-Workout',
        'section3': 'Pre-Workout',
    });

    // Food menu tab
    const handleMenuTabs = (section, type) => {
        setMenuTabs((prevTabs) => ({ ...prevTabs, [section]: type }));
    };

    const section = (title, subtitle, sectionId) => (
        <>
            <div className='flex mt-8 justify-between items-center lg:mx-6 mx-auto lg:flex-row flex-col'>
                <div>
                    <h3 className="font-Outfit text-2xl text-headersBlue font-semibold">
                        {title}
                    </h3>
                    <p className="font-sans text-sm text-gray-500">
                        {subtitle}
                    </p>
                </div>
                {/* Food Menu tab */}
                <div className="flex items-center shadow-md font-Outfit bg-white px-4 py-2 rounded-full mt-5 lg:mt-0 space-x-3">
                    <button
                        className={`${menuTabs[sectionId] === 'Pre-Workout' ? 'bg-myOrange text-white' : 'bg-white text-myBlue'} py-2 px-6 rounded-full focus:outline-none transition duration-300 ease-in-out`}
                        onClick={() => handleMenuTabs(sectionId, 'Pre-Workout')}
                    >
                        Pre-Workout
                    </button>
                    <button
                        className={`${menuTabs[sectionId] === 'After-Workout' ? 'bg-myOrange text-white' : 'bg-white text-myBlue'} py-2 px-6 rounded-full focus:outline-none transition duration-300 ease-in-out`}
                        onClick={() => handleMenuTabs(sectionId, 'After-Workout')}
                    >
                        After-Workout
                    </button>
                </div>
            </div>

            {/* All foods */}
            <div className="gap-10 mt-12 flex justify-center flex-row mx-auto flex-wrap">
                {loading ? (
                    <Skeleton />
                ) : (
                    foods.filter((item) => menuTabs[sectionId] === item.category).map((item) => (
                        <FoodItem key={item.id} item={item} setShowDetail={setShowDetail} setSelectedItem={setSelectedItem} />
                    ))
                )}
            </div>
        </>
    );

    return (
        <div className="relative">
            <section className='my-20 flex justify-center flex-col gap-4 mx-auto bg-[#FFF6EA] px-[3%] pt-8 pb-20'>
                {section('Organic Produce', 'Fresh organic fruits and vegetables from Bay Farm at great prices', 'section1')}
                {section('Superfood Delights', 'Discover nutritious superfoods for a healthy lifestyle', 'section2')}
                {section('Gourmet Treats', 'Indulge in gourmet fruits and vegetables for a delightful experience', 'section3')}
            </section>
            {showDetail && <FoodDetail showDetail={showDetail} setShowDetail={setShowDetail} item={selectedItem} />}
        </div>
    );
};

export default Food;
