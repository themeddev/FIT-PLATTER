import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import {  useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../redux/features/authAction';
import INFO from "../../../data/user";
import SEO from "../../../data/seo";
import { Helmet } from "react-helmet";



export default function() {

  const title = 'Sign-up';

  const [step, setStep] = useState(true);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();


  const dispatch = useDispatch();

  // useSelector for user registring 
  const { loading, userInfo, error, success } = useSelector(state => state.auth);



  const handleNext = () => {
    setStep(!step);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    
    dispatch(registerUser(formData))
    if(success){
      navigate("/sign-in", { replace: true })
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${title} | ${INFO.main.title}`}</title>
        <meta name="description" content={SEO[7].description} />
        <meta name="keywords" content={SEO[7].keywords.join(", ")} />
      </Helmet>


      <div   className="flex items-center justify-center  bg-gray-40 " >    
        <div className="w-3/5 px-10 pb-4  my-10  bg-wight border rounded-lg shadow-lg">
          <div  className='flex flex-col	 items-center justify-center gap-4'>
          
          {/* Steppers */}
          <div className='flex max-w-xs space-x-3 mt-10 self-center'>
            {step ? (
                <>
                  <span className="w-14 h-1 rounded-sm bg-myOrange"></span>
                  <span className="w-14 h-1 rounded-sm bg-gray-100"></span>
                </>
              ) : (
                <> 
                  <span className="w-14 h-1 rounded-sm bg-myOrange"></span>
                  <span className="w-14 h-1 rounded-sm bg-myOrange"></span>
                </>
              )}
            </div>

            <div className='self-start' >
              <h1 className="text-l font-small text-gray-500">
                {step ? 'Welcome to our community!' : 'Keep going..'}
              </h1>
              <h2 className="text-3xl font-Outfit font-outfit text-myBlue">
                {step ? 'Track Your Progress & More!' : 'Almost Finished!'}
              </h2>
            </div>
          </div>
          {/* form */}
          <form  onSubmit={handleSubmit} className="mt-4 grid grid-cols-2 gap-4">
            {step ? (
              <>
                {/* Step 1 input fields */}
                <Step1 formData={formData} handleNext={handleNext} handleInputChange={handleInputChange} />
              </>
            ) : (
              <>
                {/* Step 2 input fields */}
                <Step2 formData={formData} handleSubmit={handleSubmit} handleNext={handleNext} handleInputChange={handleInputChange} />
              </>
            )}

            {/* Next button */}
            <div className="mb-2 col-span-2 flex items-center justify-end">
              {step ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="btn-phone w-1/4 px-5 py-2 font-Poppins text-white bg-myOrange rounded-full hover:bg-orange-600 flex items-center justify-center shadow transition"
                >
                  NEXT
                  <ArrowRightIcon fill="currentColor" className="w-4 h-4 ml-2" />
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn-phone w-1/6 mr-3 px-5 py-2 font-Poppins text-white bg-[#525C60] rounded-full hover:bg-gray-600 flex items-center justify-center shadow transition"
                  >
                    <ArrowLeftIcon fill="currentColor" className="w-4 h-4 mr-2" />
                    BACK
                  </button>
                  <button
                    type="submit"
                    className="btn-phone w-1/4 px-5  py-2 font-Poppins text-white bg-myOrange rounded-full hover:bg-orange-600 flex items-center justify-center shadow transition"
                  >
                    SIGN UP
                    <ArrowRightIcon fill="currentColor" className="w-4 h-4 ml-2" />
                  </button>
                </>
              )}
            </div>
          </form>

          <p className="mt-4 text-sm text-center text-gray-400">
            Already a member?{' '}
            <Link to="/sign-in" className="text-[#FC6212] hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

