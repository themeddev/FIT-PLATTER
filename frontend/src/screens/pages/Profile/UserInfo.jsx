import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, getUserData } from '../../../redux/features/authAction';
import { motion } from 'framer-motion';


const UserInfo = ({customer_id}) => {

  const [notificationMessage, setNotificationMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  let inputClass = 'w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]'

  const dispatch = useDispatch();
  const {userInfo, loading} = useSelector(state => state.auth);

  const [initialFormData, setInitialFormData] = useState(null);
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
  });

  const [smallTables, setSmallTables] = useState({
    goals: [],
    types: [],
    productivity: [],
    allergy: []
  });

  // Fetching initial data
  useEffect(() => {
    dispatch(getUserData(customer_id))
      .then(({ payload }) => {
          setFormData(payload);
          setInitialFormData(payload); // Set initial form data here
          // console.log(userInfo);
      })
      .catch(error => {
          console.error('Error fetching customer data:', error);
      });

    axios.get(`${import.meta.env.VITE_APP_BACKEND_HOST}/api/smallTable`)
      .then(({ data }) => setSmallTables(data))
      .catch(err => console.log(err));
  }, [customer_id, dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateUser({ customer_id, formData }))
        .then(response => {
            // console.log('User info updated:', response);
            setNotificationMessage('Your info updated');
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 3000);
        })
        .catch(error => {
            // console.error('Error updating user info:', error);
            setNotificationMessage('Error updating user info');
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 3000);
        });
  };

  // Function to check if form data has changed
  const isFormDataChanged = () => {
    return JSON.stringify(formData) !== JSON.stringify(initialFormData);
  };

  
  const notificationDiv = () => {
    return (
      <motion.div 
        className="flex justify-center z-40 fixed top-20 right-0 w-full h-4"
        initial={{opacity: 0, y: -10}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: .2, ease: [.64,.04,.08, .98]}}
      >
        <div className="p-2 w-auto py-5 bg-myOrange items-center text-white leading-none rounded-full flex justify-between" role="alert">
          <span className="font-Poppins mx-2 text-left flex-auto">{notificationMessage}</span>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="p-4">
      {showNotification && notificationDiv()}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Profile Info</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="col-span-1">
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-indigo-900">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              className={inputClass}
              placeholder="First name"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-indigo-900">Last Name</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              className={inputClass}
              placeholder="Last name"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-indigo-900">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={inputClass}
              placeholder="Email"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-indigo-900">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={inputClass}
              placeholder="Phone"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="gender" className="block mb-2 text-sm font-medium text-indigo-900">Gender</label>
            <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className={inputClass}
                >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
          </div>

          <div className="col-span-1">
            <label htmlFor="age" className="block mb-2 text-sm font-medium text-indigo-900">Age</label>
            <input
              type="text"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className={inputClass}
              placeholder="Age"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="weight" className="block mb-2 text-sm font-medium text-indigo-900">Weight</label>
            <input
              type="text"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              className={inputClass}
              placeholder="Weight"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="height" className="block mb-2 text-sm font-medium text-indigo-900">Height</label>
            <input
              type="text"
              id="height"
              name="height"
              value={formData.height}
              onChange={handleInputChange}
              className={inputClass}
              placeholder="Height"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="productivity_id" className="block mb-2 text-sm font-medium text-indigo-900">Productivity</label>
            <select
                id="productivity_id"
                name="productivity_id"
                value={formData.productivity_id}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
            >
                <option value="">Select Productivity</option>
                {smallTables.productivity.map((elm)=> <option key={elm.id} value={elm.id}>{elm.productivity}</option>)}
            </select>
          </div>
          <div className="col-span-1">
            <label htmlFor="allergy_id" className="block mb-2 text-sm font-medium text-indigo-900">Allergy</label>
            <select
                type="text"
                id="allergy_id"
                name="allergy_id"
                value={formData.allergy_id}
                onChange={handleInputChange}
                className={inputClass}
                >
                <option value="">Select allergy</option>
                {smallTables.allergy.map((elm)=> <option key={elm.id} value={elm.id}>{elm.allergy}</option>)}
            </select>
          </div>
          <div className="col-span-1">
            <label htmlFor="type_id" className="block mb-2 text-sm font-medium text-indigo-900">Type</label>
            <select
                type="text"
                id="type_id"
                name="type_id"
                value={formData.type_id}
                onChange={handleInputChange}
                className={inputClass}
                >
                <option value="">Select Type</option>
                {smallTables.types.map((elm)=> <option key={elm.id} value={elm.id}>{elm.type}</option>)}
            </select>
          </div>
          <div className="col-span-1">
            <label htmlFor="goal_id" className="block mb-2 text-sm font-medium text-indigo-900">Goal</label>
            <select
                id="goal_id"
                name="goal_id"
                value={formData.goal_id}
                onChange={handleInputChange}
                className={inputClass}
            >
                <option value="">Fitness Goal</option>
                {smallTables.goals.map((elm)=> <option key={elm.id} value={elm.id}>{elm.goal}</option>)}
            </select>
          </div>
          <div className="col-span-1">
            <label htmlFor="MusclePercentage" className="block mb-2 text-sm font-medium text-indigo-900">Muscle Percentage</label>
            <input
              type="text"
              id="MusclePercentage"
              name="MusclePercentage"
              value={formData.MusclePercentage}
              onChange={handleInputChange}
              className={inputClass}
              placeholder="Muscle Percentage"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="FatPercentage" className="block mb-2 text-sm font-medium text-indigo-900">Fat Percentage</label>
            <input
              type="text"
              id="FatPercentage"
              name="FatPercentage"
              value={formData.FatPercentage}
              onChange={handleInputChange}
              className={inputClass}
              placeholder="Fat Percentage"
            />
          </div>

        </div>
        <div className="flex justify-end mt-6">
          <button 
            type="submit"
            className="btn-secondary w-full flex justify-center items-center gap-2"
            disabled={!isFormDataChanged()}
            >
            Save
            {loading ? (
              <span className="ml-2 loading loading-dots loading-xs"></span>
            ) : (
              <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 20V15H9V20M18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H14.1716C14.702 4 15.2107 4.21071 15.5858 4.58579L19.4142 8.41421C19.7893 8.78929 20 9.29799 20 9.82843V18C20 19.1046 19.1046 20 18 20Z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInfo;
