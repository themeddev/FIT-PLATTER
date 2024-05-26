import { useState } from "react";

const ContactForm = () => {
  const [isSend, setIsSend] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // You can replace 'YOUR_FORMSPREE_ENDPOINT' with the actual endpoint provided by Formspree
    const formEndpoint = "https://formspree.io/meddservice1@gmail.com.com";
    try {
      await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Optionally, you can add logic to handle successful submission (e.g., show a success message)
      document.getElementById("my_modal_2").showModal();
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("Error sending message:", error);
    }
  };

  return (
    <section className="bg-[#FFF6EA]" id="contact">
      {/* alert modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Message Sent!</h3>
          <p className="py-4">Your message has been sent successfully.</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <h2 className="font-Outfit mb-4 font-bold tracking-tight text-headersBlue text-3xl sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl font-Poppins text-myBlue ">
              In hac habitasse platea dictumst
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-myBlue font-Poppins ">
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec
                ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-myOrange text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-headersBlue ">Our Address</h3>
                    <p className="text-gray-600 ">Assalam Agadir 80000</p>
                    <p className="text-gray-600 ">Agadir, Ma</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-myOrange text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-headersBlue ">Contact</h3>
                    <p className="text-gray-600">Mobile: +212 752-123 934</p>
                    <p className="text-gray-600">Mail: Contact@fitplatter.com</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-myOrange text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-headersBlue ">Working hours</h3>
                    <p className="text-gray-600 ">Monday - Friday: 10:00 - 20:00</p>
                    <p className="text-gray-600 ">Saturday &amp; Sunday: 10:00 - 18:00</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl text-headersBlue font-Outfit">Ready to Get Started?</h2>
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <input
                      type="text"
                      onChange={handleChange}
                      autoComplete="given-name"
                      placeholder="Your name"
                      className="mb-2 w-full bg-white rounded-md border-2 border-InputBg outline-none focus:border-myOrange py-2 pl-2 pr-4 shadow-md sm:mb-0"
                      name="name"
                    />
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <input
                      type="email"
                      onChange={handleChange}
                      autoComplete="email"
                      placeholder="Your email address"
                      className="bg-white mb-2 w-full rounded-md border-2 border-InputBg outline-none focus:border-myOrange py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                      name="email"
                    />
                  </div>
                </div>
                <div className="mx-0 mb-1 sm:mb-4">
                  <textarea
                    onChange={handleChange}
                    id="textarea"
                    name="textarea"
                    cols="30"
                    rows="5"
                    placeholder="Write your message..."
                    className="mb-2 w-full rounded-md bg-white border-2 border-InputBg outline-none focus:border-myOrange  py-2 pl-2 pr-4 shadow-md sm:mb-0"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-myOrange text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
