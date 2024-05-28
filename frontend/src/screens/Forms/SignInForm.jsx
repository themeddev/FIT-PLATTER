// Import the necessary dependencies
import { useState, useEffect } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../../redux/features/authAction';
import { useDispatch, useSelector } from 'react-redux';
import INFO from "../../data/user";
import SEO from "../../data/seo";
import { Helmet } from "react-helmet";

// SignInForm component
export default function SignInForm() {
  const title = 'Sign-in';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const navigate = useNavigate();
  const { loading, error, userInfo, success } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
      setErrors(prevErrors => ({ ...prevErrors, email: '' }));
    } else if (name === 'password') {
      setPassword(value);
      setErrors(prevErrors => ({ ...prevErrors, password: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!password || password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      dispatch(loginUser({ email, password }));
    }
  };

  useEffect(() => {
    // Check if the user is already logged in
    const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    if (userFromLocalStorage || success) {
      navigate('/home', { replace: true });
    }
  }, [success, navigate]);

  // Render the component
  return (
    <>
      <Helmet>
        <title>{`${title} | ${INFO.main.title}`}</title>
        <meta name="description" content={SEO[6].description} />
        <meta name="keywords" content={SEO[6].keywords.join(", ")} />
      </Helmet>

      <div className="flex items-center justify-center h-screen bg-gray-40">
        <div className="w-96 p-10 bg-white rounded-lg shadow-md">
          <h1 className="text-l font-small text-gray-500">Welcome back !!!</h1>
          <h2 className="text-4xl font-Outfit text-myBlue">Sign in</h2>
          {error && <p className="mt-4 text-xs text-red-500">{error}</p>}
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter email"
                className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
              />
              {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
              <Link to="/forget-password" className="block mt-1 text-sm text-right text-gray-400 hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-1/2 px-3 py-2 text-sm font-Poppins text-white bg-[#FC6212] rounded-full hover:bg-orange-600 flex items-center justify-center"
                disabled={loading}
              >
                SIGN IN
                {loading ? (
                  <span className="ml-2 loading loading-dots loading-xs"></span>
                ) : (
                  <ArrowRightIcon className="w-3 h-3 ml-1" />
                )}
              </button>
            </div>
          </form>
          <p className="mt-4 text-sm text-center text-gray-400">
            I don't have an account?{' '}
            <Link to="/sign-up" className="text-[#FC6212] hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
