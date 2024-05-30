// Step1.js
export default function Step1({ formData, handleInputChange, errors }) {
  return (
    <>
      <div className="mb-2">
        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-700">First Name</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          value={formData.first_name}
          onChange={handleInputChange}
          placeholder="Enter First name"
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        />
        {errors.first_name && <p className="mt-1 text-xs text-red-500">{errors.first_name}</p>}
      </div>
      <div className="mb-2">
        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-700">Last Name</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          value={formData.last_name}
          onChange={handleInputChange}
          placeholder="Enter Last name"
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        />
        {errors.last_name && <p className="mt-1 text-xs text-red-500">{errors.last_name}</p>}
      </div>
      <div className="mb-2">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter email"
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>
      <div className="mb-2">
        <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-700">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          placeholder="Enter age"
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        />
        {errors.age && <p className="mt-1 text-xs text-red-500">{errors.age}</p>}
      </div>
      <div className="mb-2">
        <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-700">Gender</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.gender && <p className="mt-1 text-xs text-red-500">{errors.gender}</p>}
      </div>
      <div className="mb-2">
        <label htmlFor="height" className="block mb-2 text-sm font-medium text-gray-700">Height(cm)</label>
        <input
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleInputChange}
          placeholder="Enter height"
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="weight" className="block mb-2 text-sm font-medium text-gray-700">Weight(Kg)</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleInputChange}
          placeholder="Enter weight"
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">Telephone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Enter telephone"
          className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
        />
      </div>
    </>
  );
}
