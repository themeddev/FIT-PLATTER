import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../redux/features/authAction';
import INFO from "../../../data/user";
import SEO from "../../../data/seo";
import { Helmet } from "react-helmet";

export default function SignUpForm() {
  const title = 'Sign-up';

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    phone: '',
    productivity_id: '',
    allergy_id: '',
    type_id: '',
    MusclePercentage: '',
    FatPercentage: '',
    goal_id: '',
    password: '',
    password_confirmation: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, userInfo, error, success } = useSelector(state => state.auth);



  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.first_name) {
      newErrors.first_name = 'First name is required';
    }
    if (!formData.last_name) {
      newErrors.last_name = 'Last name is required';
    }
    if (!formData.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.age || formData.age < 0) {
      newErrors.age = 'Please enter a valid age';
    }
    if (!formData.gender) {
      newErrors.gender = 'Please select your gender';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password !== formData.password_confirmation) {
      setErrors({ password_confirmation: 'Passwords do not match' });
      return;
    }
    formData.allergy_id = parseInt(formData.allergy_id);
    formData.goal_id = parseInt(formData.goal_id);
    formData.productivity_id = parseInt(formData.productivity_id);
    formData.type_id = parseInt(formData.type_id);

    dispatch(registerUser(formData));

  };

  useEffect(() => {
    if (success) {
      navigate("/sign-in");
    }
  }, [success]);

  return (
    <>
      <Helmet>
        <title>{`${title} | ${INFO.main.title}`}</title>
        <meta name="description" content={SEO[7].description} />
        <meta name="keywords" content={SEO[7].keywords.join(", ")} />
      </Helmet>

      <div className="flex h-screen items-center justify-center md:bg-gray-50">
        <div className="md:w-3/5 w-full px-6 md:px-10 pb-4 md:my-10 bg-white md:border rounded-lg md:shadow-lg">
          <div className='flex flex-col items-center justify-center gap-4'>
            <div className='flex max-w-xs space-x-3 mt-10 self-center'>
              {step === 1 ? (
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

            <div className='self-start'>
              <h1 className="md:text-base text-sm font-small text-gray-500">
                {step === 1 ? 'Welcome to our community!' : 'Keep going..'}
              </h1>
              <h2 className="md:text-3xl text-2xl font-Outfit font-outfit text-myBlue">
                {step === 1 ? 'Track Your Progress & More!' : 'Almost Finished!'}
              </h2>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-2 gap-4">
            {step === 1 ? (
              <Step1 formData={formData} handleInputChange={handleInputChange} errors={errors} />
            ) : (
              <Step2 formData={formData} handleInputChange={handleInputChange} errors={errors} />
            )}

            <div className="mb-2 col-span-2 flex items-center justify-end">
              {step === 1 ? (
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
                    onClick={handleBack}
                    className="btn-phone w-1/6 mr-3 px-5 py-2 font-Poppins text-white bg-[#525C60] rounded-full hover:bg-gray-600 flex items-center justify-center shadow transition"
                  >
                    <ArrowLeftIcon fill="currentColor" className="w-4 h-4 mr-2" />
                    BACK
                  </button>
                  <button
                    type="submit"
                    className="btn-phone w-1/4 px-5 py-2 font-Poppins text-white bg-myOrange rounded-full hover:bg-orange-600 flex items-center justify-center shadow transition"
                  >
                    SIGN UP
                    
                    {
                      loading ?<span className="ml-2 loading loading-dots loading-xs"></span> : 
                      <ArrowRightIcon fill="currentColor" className="w-4 h-4 ml-2" />
                    }
                  </button>
                </>
              )}
            </div>
            {error && <p className="col-span-2 mt-2 text-xs text-red-500 text-center">{error}</p>}
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
}
  