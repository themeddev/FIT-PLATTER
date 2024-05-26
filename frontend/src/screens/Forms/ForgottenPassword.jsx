// import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "./Alert";

// Function to check if an email exists
const doesEmailExist = async (auth, email) => {
  try {
    const userRecord = await getUserByEmail(auth, email);
    return userRecord.uid ? true : false;
  } catch (error) {
    console.error("Error checking email existence:", error);
    return false;
  }
};

const ForgottenPassword = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [isEmailAvailable, setIsEmailAvailable] = useState(true);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setEmail(event.target.value);
    setErrors({});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};

    // Check if the email is valid
    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const auth = getAuth();

      try {
        // const emailExists = await doesEmailExist(auth, email);
        
        sendPasswordResetEmail(auth, email)
          .then(() => {
            setShowAlert(true);
            setIsEmailAvailable(true);
          })
          .catch((error) => {
            console.error("Error sending reset email:", error);
            setShowAlert(true);
            setIsEmailAvailable(false);
          });
      } catch (error) {
        console.error("Error checking email existence:", error);
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowAlert(false), 5000);

    return () => {
      clearTimeout(timer);
      // navigate('/sign-in');
    };
  }, [showAlert]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-40">
      {showAlert && <Alert isEmailAvailable={isEmailAvailable} showAlert={showAlert} setShowAlert={setShowAlert} />}
      <div className="w-1/2 p-10 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl text-center font-Outfit text-myBlue">Forgot Your Password?</h2>
        <h1 className="text-xs mb-7 text-center font-small text-gray-500">
          Enter your email address, and we’ll send you an email with password reset instructions.
        </h1>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-7">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
            />
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          </div>
          <button type="submit" className="btn-phone-forget w-full px-3 py-1.5 font-Poppins text-white bg-[#FC6212] rounded-md hover:bg-orange-600 flex items-center justify-center">
            SEND RECOVERY EMAIL
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-400">
          Send me back to the <Link to="/sign-in" className="text-[#FC6212] hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgottenPassword;
