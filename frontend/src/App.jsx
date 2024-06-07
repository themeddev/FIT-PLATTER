import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './screens/pages/Navbar-Footer/Navbar';
import HeroApp from './screens/pages/Hero-Page/HeroApp';
import Footer from './screens/pages/Navbar-Footer/Footer';
import HomeApp from './screens/pages/Home-Page/HomeApp';
import AboutUsApp from './screens/pages/About-Us/AboutUsApp';
import ContactUsApp from './screens/pages/Contact-Us/ContactApp';
import CustomApp from './screens/pages/Custom-Page/CustomApp';
import SignInForm from './screens/Forms/SignInForm';
import ForgottenPassword from './screens/Forms/ForgottenPassword';
import SignUpForm from './screens/Forms/SignUpForm';
import Cart from './screens/pages/Cart/Cart';
import NotFound from './screens/pages/NotFound';
import img from './images/logo.png';
import ShowNF from './screens/pages/Navbar-Footer/ShowNF';
import PrivateRoute from './Outil/PrivateRoutes';
import Terms from './screens/pages/Terms';
import ShoppingCart from './screens/pages/Cart/shopping-cart';
import ProfileApp from './screens/pages/Profile/ProfileApp';
import { Dashboard } from './screens/pages/dashboard/dashboard';
import { DashboardLayout } from './screens/pages/dashboard/dashboardLayout';
import { Customer } from './screens/pages/dashboard/customer';
import Orders from './screens/pages/dashboard/oders';
import { Meals } from './screens/pages/dashboard/meals';
import { Elements } from './screens/pages/dashboard/elements';
import { Types } from './screens/pages/dashboard/types';
import { Allergies } from './screens/pages/dashboard/allergies';
import { Productivities } from './screens/pages/dashboard/productivities';
import { Goals } from './screens/pages/dashboard/goals';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate asynchronous tasks (e.g., fetching data or authentication) with setTimeout
    const fetchData = async () => {
      try {
        // Simulate fetching data for 500ms
        await new Promise(resolve => setTimeout(resolve, 500));
        setLoading(false); // Set loading to false when tasks are completed
      } catch (error) {
        console.error('Error occurred:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      {loading ? ( // Show loading spinner if loading is true
        <div className='w-full h-screen flex justify-center items-center bg-white'>
          <img src={img} className='w-20 h-20 bg-white animate-pulse ' loading='lazy' alt='loading' />
        </div>
      ) : ( // Render the application content when loading is false
        <>
          <ShowNF>
            <Navbar setShowCart={setShowCart} />
            {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
          </ShowNF>
          <Routes>
            <Route index element={<HeroApp />} />
            {/* Use PrivateRoute for private routes */}
            <Route path='/dashboard/*' element={
                <DashboardLayout>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/customer" element={<Customer />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/meals" element={<Meals />} />
                    <Route path="/elements" element={<Elements />} />
                    <Route path="/types" element={<Types />} />
                    <Route path="/allergies" element={<Allergies />} />
                    <Route path="/productivities" element={<Productivities />} />
                    <Route path="/goals" element={<Goals />} />
                  </Routes>
                </DashboardLayout>
            } />
            <Route path="/profile" element={
              <PrivateRoute>
                <ProfileApp />
              </PrivateRoute>
            } />
            <Route path="/home" element={
              <PrivateRoute>
                <HomeApp />
              </PrivateRoute>
            } />
            <Route path="/custom" element={
              <PrivateRoute>
                <CustomApp />
              </PrivateRoute>
            } />
            <Route path="/about-us" element={<AboutUsApp />} />
            <Route path="/contact-us" element={<ContactUsApp />} />
            <Route path="/shopping-cart" element={
              <PrivateRoute>
                <ShoppingCart />
              </PrivateRoute>
            } />

            <Route path="/terms" element={<Terms />} />
            <Route path="/sign-in" element={<SignInForm />} />
            <Route path="/sign-up" element={<SignUpForm />} />
            <Route path="/forget-password" element={<ForgottenPassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ShowNF>
            <Footer />
          </ShowNF>
        </>
      )}
    </Router>
  );
}

export default App;
