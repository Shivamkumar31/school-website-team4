import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const Registration = () => {
  const [selectedForm, setSelectedForm] = useState(""); // studentRegister / studentAdmission / studentLogin / teacher
  const [studentMenuOpen, setStudentMenuOpen] = useState(false);
  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});

  // Student state
  const [student, setStudent] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    gender: "",
    classLevel: "",
    rollNumber: "",
    profilePic: null,
    bloodType: "",
    admissionDate: "",
    guardianName: "",
    fatherName: "",
    motherName: "",
    fatherOccupation: "",
    motherOccupation: "",
    parentPhone: "",
    parentEmail: "",
    permanentAddress: "",
    presentAddress: "",
    sameAsPermanent: false,
    previousSchool: "",
  });

  // Teacher state
  const [teacher, setTeacher] = useState({
    fullName: "",
    dob: "",
    gender: "",
    qualification: "",
    subjectSpecialization: "",
    joiningDate: "",
    phone: "",
    email: "",
    address: "",
    profilePic: null,
  });

  const handleInput = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (selectedForm.startsWith("student")) {
      if (name === "profilePic" && files.length > 0) {
        setStudent({ ...student, profilePic: files[0] });
        setPreview(URL.createObjectURL(files[0]));
      } else if (type === "checkbox") {
        setStudent({ ...student, [name]: checked });
        if (name === "sameAsPermanent" && checked) {
          setStudent((prev) => ({
            ...prev,
            presentAddress: prev.permanentAddress,
          }));
        }
      } else {
        setStudent({ ...student, [name]: value });
      }
    } else if (selectedForm === "teacher") {
      if (name === "profilePic" && files.length > 0) {
        setTeacher({ ...teacher, profilePic: files[0] });
        setPreview(URL.createObjectURL(files[0]));
      } else {
        setTeacher({ ...teacher, [name]: value });
      }
    }
  };

  const validateFields = () => {
    const validationErrors = {};
    if (
      selectedForm === "studentRegister" ||
      selectedForm === "studentAdmission"
    ) {
      if (!student.firstName.trim())
        validationErrors.firstName = "First name is required.";
      if (!student.lastName.trim())
        validationErrors.lastName = "Last name is required.";
      if (!student.dob) validationErrors.dob = "Date of Birth is required.";
      if (!student.gender) validationErrors.gender = "Gender is required.";
      if (!student.classLevel)
        validationErrors.classLevel = "Class is required.";
      if (!student.parentPhone.trim())
        validationErrors.parentPhone = "Parent phone is required.";
    }
    if (selectedForm === "studentAdmission") {
      if (!student.bloodType)
        validationErrors.bloodType = "Blood group is required.";
      if (!student.admissionDate)
        validationErrors.admissionDate = "Admission Date is required.";
      if (!student.fatherName.trim())
        validationErrors.fatherName = "Father’s name is required.";
      if (!student.motherName.trim())
        validationErrors.motherName = "Mother’s name is required.";
      if (!student.parentEmail.trim())
        validationErrors.parentEmail = "Parent’s email is required.";
      if (!student.permanentAddress.trim())
        validationErrors.permanentAddress = "Permanent address is required.";
      if (!student.presentAddress.trim())
        validationErrors.presentAddress = "Present address is required.";
      if (!student.profilePic)
        validationErrors.profilePic = "Profile picture is required.";
    }
    if (selectedForm === "studentLogin") {
      if (!student.rollNumber.trim())
        validationErrors.rollNumber = "Roll number is required.";
      if (!student.classLevel.trim())
        validationErrors.classLevel = "Class is required.";
    }
    if (selectedForm === "teacher") {
      if (!teacher.fullName.trim())
        validationErrors.fullName = "Full name is required.";
      if (!teacher.dob) validationErrors.dob = "Date of Birth is required.";
      if (!teacher.gender) validationErrors.gender = "Gender is required.";
      if (!teacher.qualification.trim())
        validationErrors.qualification = "Qualification is required.";
      if (!teacher.subjectSpecialization.trim())
        validationErrors.subjectSpecialization =
          "Subject specialization is required.";
      if (!teacher.joiningDate)
        validationErrors.joiningDate = "Joining date is required.";
      if (!teacher.phone.trim())
        validationErrors.phone = "Phone number is required.";
      if (!teacher.email.trim())
        validationErrors.email = "Email address is required.";
      if (!teacher.address.trim())
        validationErrors.address = "Address is required.";
    }
    return validationErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all forms
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // show validation errors
      return; // stop submitting
    }

    // If validation passes
    if (selectedForm === "studentLogin") {
      alert(
        `Student Login Successful!\nRoll No: ${student.rollNumber}\nClass: ${student.classLevel}`
      );
      // Reset only login fields
      setStudent({
        ...student,
        rollNumber: "",
        classLevel: "",
      });
    } else if (selectedForm === "studentRegister") {
      alert("Student Registered successfully!");
    } else if (selectedForm === "studentAdmission") {
      alert("Student Admitted successfully!");
    } else if (selectedForm === "teacher") {
      alert("Teacher Registered successfully!");
    }

    // Clear form states
    setErrors({});
    setPreview(null);
    setStudent({
      firstName: "",
      middleName: "",
      lastName: "",
      dob: "",
      gender: "",
      classLevel: "",
      rollNumber: "",
      profilePic: null,
      bloodType: "",
      admissionDate: "",
      guardianName: "",
      fatherName: "",
      motherName: "",
      fatherOccupation: "",
      motherOccupation: "",
      parentPhone: "",
      parentEmail: "",
      permanentAddress: "",
      presentAddress: "",
      sameAsPermanent: false,
      previousSchool: "",
    });
    setTeacher({
      fullName: "",
      dob: "",
      gender: "",
      qualification: "",
      subjectSpecialization: "",
      joiningDate: "",
      phone: "",
      email: "",
      address: "",
      profilePic: null,
    });
    setSelectedForm("");
    setStudentMenuOpen(false);
  };

  return (
    <div className="registration-container min-h-screen flex justify-center items-center bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <motion.div
        className="registration-card w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-gray-200 p-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Welcome Message */}
        {!selectedForm && !studentMenuOpen && (
          <div className="registration-welcome text-center mb-8">
            <h1 className="registration-heading text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
              👋 Welcome to the Portal
            </h1>
            <p className="registration-subtext mt-2 text-gray-600 text-lg">
              Select below to register as Student or Teacher
            </p>
          </div>
        )}

        {/* Initial Cards */}
        {!selectedForm && !studentMenuOpen && (
          <div className="selection-cards grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setStudentMenuOpen(true)}
              className="student-card cursor-pointer bg-green-100 rounded-2xl shadow-lg p-6 flex flex-col justify-center items-center hover:bg-green-200 transition"
            >
              <span className="text-5xl">🧑‍🎓</span>
              <h2 className="mt-4 text-xl font-bold text-green-700">Student</h2>
              <p className="text-gray-600 mt-2">Register or Admit a Student</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedForm("teacher")}
              className="teacher-card cursor-pointer bg-blue-100 rounded-2xl shadow-lg p-6 flex flex-col justify-center items-center hover:bg-blue-200 transition"
            >
              <span className="text-5xl">👩‍🏫</span>
              <h2 className="mt-4 text-xl font-bold text-blue-700">Teacher</h2>
              <p className="text-gray-600 mt-2">Register a new Teacher</p>
            </motion.div>
          </div>
        )}

        {/* Student Sub-menu */}
        {studentMenuOpen && !selectedForm && (
          <div>
            <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">
              🧑‍🎓 Student Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Register Student */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedForm("studentRegister")}
                className="cursor-pointer bg-green-200 rounded-2xl shadow-lg p-6 flex flex-col justify-center items-center hover:shadow-2xl transition"
              >
                <span className="text-4xl">📝</span>
                <h3 className="text-lg font-bold text-green-800 mt-2">
                  Register Student
                </h3>
                <p className="text-gray-500 mt-1">Add a brand new student</p>
              </motion.div>

              {/* Admit Student */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedForm("studentAdmission")}
                className="cursor-pointer bg-green-300 rounded-2xl shadow-lg p-6 flex flex-col justify-center items-center hover:shadow-2xl transition"
              >
                <span className="text-4xl">🏫</span>
                <h3 className="text-lg font-bold text-green-900 mt-2">
                  Admit Student
                </h3>
                <p className="text-gray-500 mt-1">Admit existing student</p>
              </motion.div>

              {/* 🆕 Student Login */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedForm("studentLogin")}
                className="cursor-pointer bg-yellow-200 rounded-2xl shadow-lg p-6 flex flex-col justify-center items-center hover:shadow-2xl transition"
              >
                <span className="text-4xl">🔑</span>
                <h3 className="text-lg font-bold text-yellow-800 mt-2">
                  Student Login
                </h3>
                <p className="text-gray-500 mt-1">
                  Already admitted? Login here
                </p>
              </motion.div>
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={() => setStudentMenuOpen(false)}
                className="px-6 py-2 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 cursor-pointer transition"
              >
                ⬅ Back
              </button>
            </div>
          </div>
        )}

        {/* Forms */}
        <AnimatePresence>
          {/* 📝 Student Register Form */}
          {selectedForm === "studentRegister" && (
            <motion.form
              onSubmit={handleSubmit}
              className="mt-8 grid gap-5"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                📝 Student Registration
              </h2>

              {/* Full Name */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {["firstName", "middleName", "lastName"].map((field, idx) => (
                  <div key={idx}>
                    <label className="block mb-1 font-medium">
                      {field === "firstName" && "First Name *"}
                      {field === "middleName" && "Middle Name"}
                      {field === "lastName" && "Last Name *"}
                    </label>
                    <input
                      type="text"
                      name={field}
                      value={student[field]}
                      onChange={handleInput}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    {errors[field] && (
                      <p className="text-red-500 text-sm">{errors[field]}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block mb-1 font-medium">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dob"
                  value={student.dob}
                  onChange={handleInput}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.dob && (
                  <p className="text-red-500 text-sm">{errors.dob}</p>
                )}
              </div>

              {/* Gender */}
              <div>
                <label className="block mb-1 font-medium">Gender *</label>
                <select
                  name="gender"
                  value={student.gender}
                  onChange={handleInput}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && (
                  <p className="text-red-500 text-sm">{errors.gender}</p>
                )}
              </div>

              {/* Class Level */}
              <div>
                <label className="block mb-1 font-medium">Class *</label>
                <input
                  type="text"
                  name="classLevel"
                  value={student.classLevel}
                  onChange={handleInput}
                  placeholder="e.g., Class 5"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.classLevel && (
                  <p className="text-red-500 text-sm">{errors.classLevel}</p>
                )}
              </div>

              {/* Parent Phone Number */}
              <div>
                <label className="block mb-1 font-medium">
                  Parent Phone Number *
                </label>
                <input
                  type="text"
                  name="parentPhone"
                  value={student.parentPhone}
                  onChange={handleInput}
                  placeholder="e.g., +91XXXXXXXXXX"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.parentPhone && (
                  <p className="text-red-500 text-sm">{errors.parentPhone}</p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedForm("")}
                  className="px-6 py-2 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 cursor-pointer transition"
                >
                  ⬅ Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 cursor-pointer transition"
                >
                  Register Student
                </button>
              </div>
            </motion.form>
          )}
          {/* 🧑‍🎓 Student Login Form */}
          {selectedForm === "studentLogin" && (
            <motion.form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  `🎉 Welcome Student! Roll No: ${student.rollNumber}, Class: ${student.classLevel}`
                );
                setSelectedForm("");
              }}
              className="mt-8 grid gap-5"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <h2 className="text-2xl font-bold text-yellow-600 mb-4">
                🔑 Student Login
              </h2>

              {/* Roll Number */}
              <div>
                <label className="block mb-1 font-medium">Roll Number *</label>
                <input
                  type="text"
                  name="rollNumber"
                  value={student.rollNumber || ""}
                  onChange={(e) =>
                    setStudent({ ...student, rollNumber: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Class */}
              <div>
                <label className="block mb-1 font-medium">Class *</label>
                <input
                  type="text"
                  name="classLevel"
                  value={student.classLevel}
                  onChange={(e) =>
                    setStudent({ ...student, classLevel: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedForm("")}
                  className="px-6 py-2 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 cursor-pointer transition"
                >
                  ⬅ Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 cursor-pointer transition"
                >
                  Login
                </button>
              </div>
            </motion.form>
          )}

          {/* 🏫 Student Admission Form */}
          {selectedForm === "studentAdmission" && (
            <motion.form
              onSubmit={handleSubmit}
              className="mt-8 grid gap-5"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                🏫 Student Admission
              </h2>

              {/* 🔹 Personal Information */}
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="text-lg font-bold mb-2 text-green-700">
                  🔹 Personal Information
                </h3>

                {/* Full Name */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["firstName", "middleName", "lastName"].map((field, idx) => (
                    <div key={idx}>
                      <label className="block mb-1 font-medium">
                        {field === "firstName" && "First Name *"}
                        {field === "middleName" && "Middle Name"}
                        {field === "lastName" && "Last Name *"}
                      </label>
                      <input
                        type="text"
                        name={field}
                        value={student[field]}
                        onChange={(e) => handleInput(e, "student")}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-green-300 outline-none"
                      />
                      {errors[field] && (
                        <p className="text-red-500 text-sm">{errors[field]}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block mb-1 font-medium">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={student.dob}
                    onChange={(e) => handleInput(e, "student")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-green-300 outline-none"
                  />
                  {errors.dob && (
                    <p className="text-red-500 text-sm">{errors.dob}</p>
                  )}
                </div>

                {/* Gender */}
                <div>
                  <label className="block mb-1 font-medium">Gender *</label>
                  <div className="flex gap-4">
                    {["Male", "Female", "Other"].map((g) => (
                      <label key={g} className="inline-flex items-center gap-2">
                        <input
                          type="radio"
                          name="gender"
                          value={g}
                          checked={student.gender === g}
                          onChange={(e) => handleInput(e, "student")}
                          className="form-radio text-green-500"
                        />
                        {g}
                      </label>
                    ))}
                  </div>
                  {errors.gender && (
                    <p className="text-red-500 text-sm">{errors.gender}</p>
                  )}
                </div>

                {/* Blood Group */}
                <div>
                  <label className="block mb-1 font-medium">
                    Blood Group *
                  </label>
                  <input
                    type="text"
                    name="bloodType"
                    value={student.bloodType}
                    onChange={(e) => handleInput(e, "student")}
                    placeholder="e.g., A+, B-, O+"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-green-300 outline-none"
                  />
                  {errors.bloodType && (
                    <p className="text-red-500 text-sm">{errors.bloodType}</p>
                  )}
                </div>

                {/* Upload Student Photo */}
                <div>
                  <label className="block mb-1 font-medium">
                    Upload Student Photo *
                  </label>
                  <input
                    type="file"
                    name="profilePic"
                    accept="image/*"
                    onChange={(e) => handleInput(e, "student")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 focus:ring focus:ring-green-300 outline-none"
                  />
                  {errors.profilePic && (
                    <p className="text-red-500 text-sm">{errors.profilePic}</p>
                  )}
                  {preview && (
                    <div className="mt-3 flex justify-center">
                      <img
                        src={preview}
                        alt="Preview"
                        className="w-24 h-24 rounded-full object-cover border border-gray-300 shadow"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* 🔹 Parent/Guardian Details */}
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="text-lg font-bold mb-2 text-green-700">
                  🔹 Parent/Guardian Details
                </h3>

                {/* Father’s Name & Occupation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 font-medium">
                      Father’s Name *
                    </label>
                    <input
                      type="text"
                      name="fatherName"
                      value={student.fatherName}
                      onChange={(e) => handleInput(e, "student")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-green-300 outline-none"
                    />
                    {errors.fatherName && (
                      <p className="text-red-500 text-sm">
                        {errors.fatherName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">
                      Father’s Occupation
                    </label>
                    <input
                      type="text"
                      name="fatherOccupation"
                      value={student.fatherOccupation}
                      onChange={(e) => handleInput(e, "student")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-green-300 outline-none"
                    />
                  </div>
                </div>

                {/* Mother’s Name & Occupation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 font-medium">
                      Mother’s Name *
                    </label>
                    <input
                      type="text"
                      name="motherName"
                      value={student.motherName}
                      onChange={(e) => handleInput(e, "student")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-green-300 outline-none"
                    />
                    {errors.motherName && (
                      <p className="text-red-500 text-sm">
                        {errors.motherName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">
                      Mother’s Occupation
                    </label>
                    <input
                      type="text"
                      name="motherOccupation"
                      value={student.motherOccupation}
                      onChange={(e) => handleInput(e, "student")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-green-300 outline-none"
                    />
                  </div>
                </div>

                {/* Parent’s Contact */}
                <div>
                  <label className="block mb-1 font-medium">
                    Parent’s Contact Number *
                  </label>
                  <input
                    type="text"
                    name="parentPhone"
                    value={student.parentPhone}
                    onChange={(e) => handleInput(e, "student")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-green-300 outline-none"
                  />
                  {errors.parentPhone && (
                    <p className="text-red-500 text-sm">{errors.parentPhone}</p>
                  )}
                </div>

                {/* Parent’s Email */}
                <div>
                  <label className="block mb-1 font-medium">
                    Parent’s Email Address *
                  </label>
                  <input
                    type="email"
                    name="parentEmail"
                    value={student.parentEmail}
                    onChange={(e) => handleInput(e, "student")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-green-300 outline-none"
                  />
                  {errors.parentEmail && (
                    <p className="text-red-500 text-sm">{errors.parentEmail}</p>
                  )}
                </div>

                {/* Permanent Address */}
                <div>
                  <label className="block mb-1 font-medium">
                    Permanent Address *
                  </label>
                  <textarea
                    name="permanentAddress"
                    value={student.permanentAddress}
                    onChange={(e) => handleInput(e, "student")}
                    rows="2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-green-300 outline-none"
                  />
                  {errors.permanentAddress && (
                    <p className="text-red-500 text-sm">
                      {errors.permanentAddress}
                    </p>
                  )}
                </div>

                {/* Present Address + Checkbox */}
                <div>
                  <label className="block mb-1 font-medium">
                    Present Address *
                  </label>
                  <textarea
                    name="presentAddress"
                    value={student.presentAddress}
                    onChange={(e) => handleInput(e, "student")}
                    rows="2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-green-300 outline-none"
                  />
                  {errors.presentAddress && (
                    <p className="text-red-500 text-sm">
                      {errors.presentAddress}
                    </p>
                  )}
                </div>
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="sameAsPermanent"
                      checked={student.sameAsPermanent}
                      onChange={(e) => handleInput(e, "student")}
                      className="form-checkbox text-green-500"
                    />
                    <span className="ml-2">Same as Permanent Address</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedForm("")}
                  className="px-6 py-2 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 cursor-pointer transition"
                >
                  ⬅ Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 cursor-pointer transition"
                >
                  Admit Student
                </button>
              </div>
            </motion.form>
          )}
          {/* 👩‍🏫 Teacher Registration Form */}
          {/* ✅ Teacher Form */}
          {selectedForm === "teacher" && (
            <motion.form
              onSubmit={handleSubmit}
              className="mt-8 grid gap-5"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                👩‍🏫 Teacher Registration
              </h2>

              {/* Full Name */}
              <div>
                <label className="block mb-1 font-medium">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={teacher.fullName}
                  onChange={handleInput}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block mb-1 font-medium">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dob"
                  value={teacher.dob}
                  onChange={handleInput}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.dob && (
                  <p className="text-red-500 text-sm">{errors.dob}</p>
                )}
              </div>

              {/* Gender */}
              <div>
                <label className="block mb-1 font-medium">Gender *</label>
                <select
                  name="gender"
                  value={teacher.gender}
                  onChange={handleInput}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && (
                  <p className="text-red-500 text-sm">{errors.gender}</p>
                )}
              </div>

              {/* Qualification */}
              <div>
                <label className="block mb-1 font-medium">
                  Qualification *
                </label>
                <input
                  type="text"
                  name="qualification"
                  value={teacher.qualification}
                  onChange={handleInput}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.qualification && (
                  <p className="text-red-500 text-sm">{errors.qualification}</p>
                )}
              </div>

              {/* Subject Specialization */}
              <div>
                <label className="block mb-1 font-medium">
                  Subject Specialization *
                </label>
                <input
                  type="text"
                  name="subjectSpecialization"
                  value={teacher.subjectSpecialization}
                  onChange={handleInput}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.subjectSpecialization && (
                  <p className="text-red-500 text-sm">
                    {errors.subjectSpecialization}
                  </p>
                )}
              </div>

              {/* Joining Date */}
              <div>
                <label className="block mb-1 font-medium">Joining Date *</label>
                <input
                  type="date"
                  name="joiningDate"
                  value={teacher.joiningDate}
                  onChange={handleInput}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.joiningDate && (
                  <p className="text-red-500 text-sm">{errors.joiningDate}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-1 font-medium">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={teacher.phone}
                  onChange={handleInput}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 font-medium">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={teacher.email}
                  onChange={handleInput}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Address */}
              <div>
                <label className="block mb-1 font-medium">Address *</label>
                <textarea
                  name="address"
                  value={teacher.address}
                  onChange={handleInput}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm">{errors.address}</p>
                )}
              </div>

              {/* Profile Picture */}
              <div>
                <label className="block mb-1 font-medium">
                  Profile Picture
                </label>
                <input
                  type="file"
                  name="profilePic"
                  accept="image/*"
                  onChange={handleInput}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-24 h-24 rounded-full mt-2 object-cover border"
                  />
                )}
              </div>
              {/* Buttons */}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedForm("")}
                  className="px-6 py-2 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 cursor-pointer transition"
                >
                  ⬅ Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 cursor-pointer transition"
                >
                  Register Teacher
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Registration;
