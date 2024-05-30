import axios from "axios";
import { useEffect, useState } from "react";

// Step2.js
export default function Step2({ formData, handleInputChange, errors }) {

  const [smallTables, setSmallTables] = useState({
    goals: [],
    types: [],
    productivity: [],
    allergy: []
  });


  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_APP_BACKEND_HOST}/api/smallTable`)
      .then(({data})=> setSmallTables(data))
      .catch(err => console.log(err))
  },[])

  return (
    <>
      <div className="mb-2">
        <label htmlFor="productivity_id" className="block mb-2 text-sm font-medium text-gray-700">Activity Level</label>
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
      <div className="mb-2">
        <label htmlFor="allergy_id" className="block mb-2 text-sm font-medium text-gray-700">Allergies</label>
        <select
          type="text"
          id="allergy_id"
          name="allergy_id"
          value={formData.allergy_id}
          onChange={handleInputChange}
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        >
          <option value="">Select allergy</option>
          {smallTables.allergy.map((elm)=> <option key={elm.id} value={elm.id}>{elm.allergy}</option>)}
        </select>
      </div>
      <div className="mb-2">
        <label htmlFor="type_id" className="block mb-2 text-sm font-medium text-gray-700">Sport Type</label>
        <select
          type="text"
          id="type_id"
          name="type_id"
          value={formData.type_id}
          onChange={handleInputChange}
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        >
          <option value="">Select Type</option>
          {smallTables.types.map((elm)=> <option key={elm.id} value={elm.id}>{elm.type}</option>)}
        </select>
      </div>
      <div className="mb-2">
        <label htmlFor="MusclePercentage" className="block mb-2 text-sm font-medium text-gray-700">Muscle Percentage (%)</label>
        <input
          type="number"
          id="MusclePercentage"
          name="MusclePercentage"
          value={formData.MusclePercentage}
          onChange={handleInputChange}
          placeholder="Enter your Muscle Percentage"
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="FatPercentage" className="block mb-2 text-sm font-medium text-gray-700">Fat Percentage (%)</label>
        <input
          type="number"
          id="FatPercentage"
          name="FatPercentage"
          value={formData.FatPercentage}
          onChange={handleInputChange}
          placeholder="Enter your Fat Percentage"
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="goal_id" className="block mb-2 text-sm font-medium text-gray-700">Fitness Goal</label>
        <select
          id="goal_id"
          name="goal_id"
          value={formData.goal_id}
          onChange={handleInputChange}
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        >
            <option value="">Fitness Goal</option>
            {smallTables.goals.map((elm)=> <option key={elm.id} value={elm.id}>{elm.goal}</option>)}
        </select>
      </div>
      <div className="mb-2">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Enter password"
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="password_confirmation" className="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
        <input
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          value={formData.password_confirmation}
          onChange={handleInputChange}
          placeholder="Confirm password"
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        />
        {errors.password_confirmation && <p className="mt-1 text-xs text-red-500">{errors.password_confirmation}</p>}
      </div>
    </>
  );
}
