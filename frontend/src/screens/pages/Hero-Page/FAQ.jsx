import { useState } from "react";

const Accordion = () => {
  return (
    <section className="z-10  relative overflow-hidden bg-white px-10 pb-12 pt-20  lg:pb-[90px] ">
      <div className="container mx-auto ">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-myOrange">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-headersBlue sm:text-[40px]/[48px]">
                Any Questions? Look Here
              </h2>
              <p className="text-base text-gray-500">
                Get answers to frequently asked questions about Fit Platter.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap ">
          <div className="w-full px-4 lg:w-1/2 ">
            <AccordionItem
              header="How does Fit Platter personalize meal recommendations?"
              text="Fit Platter uses advanced algorithms to analyze user data, including age, weight, fitness goals, and dietary preferences, to generate personalized sports-centric meal recommendations tailored to each user's unique needs."
            />
            <AccordionItem
              header="Can I customize my meal choices on Fit Platter?"
              text="Yes, Fit Platter allows users to choose from a curated list of food elements to customize their meals according to their preferences and dietary requirements."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How does Fit Platter ensure the quality and freshness of meals?"
              text="Fit Platter collaborates with top chefs and nutritionists to ensure that meals are not only delicious but also nutritionally balanced and made with fresh, high-quality ingredients."
            />
            <AccordionItem
              header="What is the delivery process for Fit Platter meals?"
              text="Once an order is confirmed, Fit Platter notifies the chef, who prepares the meal. Upon completion, the meal is delivered to the customer's doorstep by our trusted delivery partners."
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1] ">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FC6212" stopOpacity="0.36" />
              <stop offset="1" stopColor="#FFF" stopOpacity="0" />
              <stop offset="1" stopColor="#FC6212" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Accordion;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setActive(!active);
  };
  return (
    <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] sm:p-8 lg:px-6 xl:px-8 ">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={(e) => handleToggle(e)}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg text-myOrange">
          <svg
            className={`fill-headersBlue stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-headersBlue ">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-300 ease-in-out ${
          active ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-myBlue">
          {text}
        </p>
      </div>
    </div>
  );
};
