import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { useState, useRef } from "react";
import { motion } from 'framer-motion';
const Comments = () => {
  const CardContent = [
    {
      id: 1,
      fullName: "Jonathan Reinink",
      description: "I am extremely impressed with the quality of products and services provided by this company. The attention to detail and customer satisfaction is unparalleled.",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAX8p-KrjIxVpsOGeFKJZJR9OVa2tMXyQAlCxT7O-qFqKa242hbZLlOooixmQsvpievEg&usqp=CAU",
    },
    {
      id: 2,
      fullName: "Selena Gomez",
      description: "The service and products offered by this company exceeded my expectations. The team is dedicated to providing top-notch quality.",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDWw8Vdm9JSAzsSu6MANcNR3pE0wZOISapEA&usqp=CAU",
    },
    {
      id: 3,
      fullName: "Kylie Jenner",
      description: "I am a satisfied customer who received excellent service and high-quality products. The team's commitment to customer satisfaction is evident.",
      imageSrc: "https://media.allure.com/photos/6543f5a166ac0a71e8d7612f/16:9/w_1280,c_limit/kylie%20jenner%202023.jpg",
    },
    {
      id: 4,
      fullName: "Achraf Moreau",
      description: "The level of professionalism and quality provided by this company is outstanding. From start to finish, the experience was seamless.",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQ5l2EY2K5M3MlQ5tM5Qql2lKeWARb-oacc90zJS20g&s",
    },
  ];
  
  


  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cardRefs = CardContent.map(() => useRef(null));

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex < CardContent.length - 1 ? prevIndex + 1 : 0
    );
    scrollCardIntoView();
  };

  const handleBack = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : CardContent.length - 1
    );
    scrollCardIntoView();
  };

  const scrollCardIntoView = () => {
    cardRefs[currentCardIndex].current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="w-full flex flex-col lg:flex-row justify-between lg:px-[10%] md:px-[10%] p-[5%] lg:items-center items-start bg-[#FFF6EA] ">
      <motion.div 
        className="max-w-[450px] ml-3"
        initial={{ x: -1 , opacity: 0}}
        animate={{x: 0, opacity : 1}}
        transition={{ delay: 0.4 }}
      >
        <h3 className="font-Outfit text-3xl text-[#333333] mb-4">
          What Are People <br /> Saying{" "}
          <span className="text-myOrange">About Us</span>
        </h3>
        <p
        >
          We are very happy if you are satisfied with our service and products,
          let's read pure reviews from customers who bought our products.
        </p>

        <div className="my-2">
          <p>
            <span className="font-bold text-3xl text-gray-900">
              {currentCardIndex + 1 < 10 ? `0${currentCardIndex + 1}` : currentCardIndex + 1}
            </span>
            /
            {CardContent.length < 10 ? `0${CardContent.length}` : CardContent.length}
          </p>
        </div>

        <div className="flex justify-start text-white my-5">
          <div
            className="w-8 h-8 bg-[#FFC87A] mr-2 rounded-lg flex items-center"
            onClick={handleBack}
          >
            <IoMdArrowBack className="mx-auto" />
          </div>
          <div
            className="w-8 h-8 bg-myOrange rounded-lg  flex items-center"
            onClick={handleNext}
          >
            <IoMdArrowForward className="mx-auto" />
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="flex flex-wrap overflow-x-hidden items-center justify-center"
        initial={{ x: -1 , opacity: 0}}
        animate={{x: 0, opacity : 1}}
        transition={{ delay: 0.6 }} 
      >  
        <div className="carousel carousel-center sm:max-w-xl max-w-md p-4 space-x-3 rounded-box">
          <div className="carousel-item">
            {CardContent &&
              CardContent.map((item, index) => (
                <div
                  key={item.id}
                  className="max-w-sm flex mx-2"
                  ref={cardRefs[index]}
                >
                  <div className="max-w-[250px] h-full bg-white p-4 flex flex-col justify-between leading-normal rounded-box">
                    <div className="flex items-start flex-col mb-5">
                      <img
                        className="w-10 h-10 rounded-md mr-4 object-cover mb-2"
                        src={item.imageSrc}
                        alt={`Avatar of ${item.fullName}`}
                      />
                      <div className="text-sm">
                        <p className="text-gray-700 font-bold text-xl leading-none">
                          {item.fullName}
                        </p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <p className="text-gray-600 text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Comments;