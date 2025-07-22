import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  dob: "",
  grade: "",
  address: "",
  parentName: "",
  agree: false,
};

const Registration = () => {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({
      ...f,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    let err = {};
    if (!form.fullName) err.fullName = "Name is required";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
      err.email = "Valid email required";
    if (!form.phone || !/^\d{10}$/.test(form.phone))
      err.phone = "Valid 10-digit phone required";
    if (!form.dob) err.dob = "Date of birth required";
    if (!form.grade) err.grade = "Select a grade";
    if (!form.address) err.address = "Address required";
    if (!form.parentName) err.parentName = "Parent/Guardian name required";
    if (!form.agree) err.agree = "You must agree to terms";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setForm(initialState);
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gradient-to-tr from-sky-100 to-sky-50 flex items-center justify-center py-12 px-4"
    >
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Student Registration
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Student Name */}
          <div>
            <label className="block font-medium mb-1">Student Full Name*</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 ${
                errors.fullName ? "border-red-400" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-200`}
              placeholder="Enter full name"
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm">{errors.fullName}</span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1">Email Address*</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 ${
                errors.email ? "border-red-400" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-200`}
              placeholder="student@email.com"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block font-medium mb-1">Phone Number*</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 ${
                errors.phone ? "border-red-400" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-200`}
              placeholder="10-digit number"
              maxLength={10}
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">{errors.phone}</span>
            )}
          </div>

          {/* DOB and Grade */}
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="block font-medium mb-1">Date of Birth*</label>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 ${
                  errors.dob ? "border-red-400" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-200`}
              />
              {errors.dob && (
                <span className="text-red-500 text-sm">{errors.dob}</span>
              )}
            </div>
            <div className="flex-1">
              <label className="block font-medium mb-1">
                Grade Applying For*
              </label>
              <select
                name="grade"
                value={form.grade}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 ${
                  errors.grade ? "border-red-400" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-200`}
              >
                <option value="">Select grade</option>
                <option value="6">6th Grade</option>
                <option value="7">7th Grade</option>
                <option value="8">8th Grade</option>
                <option value="9">9th Grade</option>
                <option value="10">10th Grade</option>
              </select>
              {errors.grade && (
                <span className="text-red-500 text-sm">{errors.grade}</span>
              )}
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block font-medium mb-1">Address*</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 ${
                errors.address ? "border-red-400" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-200`}
              rows={2}
              placeholder="Street, City, State"
            />
            {errors.address && (
              <span className="text-red-500 text-sm">{errors.address}</span>
            )}
          </div>

          {/* Parent/Guardian Name */}
          <div>
            <label className="block font-medium mb-1">
              Parent/Guardian Name*
            </label>
            <input
              type="text"
              name="parentName"
              value={form.parentName}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 ${
                errors.parentName ? "border-red-400" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-200`}
              placeholder="Parent or guardian"
            />
            {errors.parentName && (
              <span className="text-red-500 text-sm">{errors.parentName}</span>
            )}
          </div>

          {/* Agreement Checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="accent-sky-600"
            />
            <label className="text-sm">
              I confirm all information is correct and agree to the school's
              policies.*
            </label>
          </div>
          {errors.agree && (
            <span className="text-red-500 text-sm block">{errors.agree}</span>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-sky-700 to-blue-500 hover:from-sky-900 hover:to-blue-700 text-white font-semibold rounded-xl py-2 mt-2 transition-shadow shadow-lg hover:shadow-2xl"
          >
            Register
          </button>

          {/* Success Message */}
          {submitted && (
            <div className="text-green-600 text-center font-medium pt-2">
              Registration Successful!
            </div>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default Registration;
