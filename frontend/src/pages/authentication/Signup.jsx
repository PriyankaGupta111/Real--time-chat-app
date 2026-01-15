



// import React, { useEffect, useState } from "react";
// import { FaUser } from "react-icons/fa";
// import { IoKeySharp } from "react-icons/io5";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { registerUserThunk } from "../../store/slice/user/user.thunk";
// import toast from "react-hot-toast";

// const Signup = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { isAuthenticated } = useSelector((state) => state.userReducer);

//   const [signupData, setSignupData] = useState({
//     fullName: "",
//     username: "",
//     password: "",
//     confirmPassword: "",
//     gender: "",
//   });

//   const [loading, setLoading] = useState(false); 

//   useEffect(() => {
//     if (isAuthenticated) navigate("/");
//   }, [isAuthenticated, navigate]);

//   const handleInputChange = (e) => {
//     setSignupData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSignup = async () => {
//     if (signupData.password !== signupData.confirmPassword) {
//       return toast.error("Password and confirm password do not match");
//     }

//     setLoading(true); // start loading
//     const response = await dispatch(registerUserThunk(signupData));
//     setLoading(false); // stop loading

//     if (response?.payload?.success) {
//       navigate("/");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-br bg from-purple-600 to-indigo-700">
//       <div className="max-w-md w-full bg-base-100 shadow-2xl rounded-2xl p-8 flex flex-col gap-6">
        
//         {/* Title */}
//         <div className="text-center">
//           <h1 className="text-3xl font-bold text-primary">GupShup</h1>
//           <p className="text-sm opacity-70">Join and start chatting instantly 🚀</p>
//         </div>

//         {/* Full Name */}
       
//         <label className="input input-bordered flex items-center gap-2">
//           <FaUser />
//           <input
//             type="text"
//             name="fullName"
//             className="grow"
//             placeholder="Full Name"
//             onChange={handleInputChange}
//           />
//         </label>

//         {/* Username */}
//         <label className="input input-bordered flex items-center gap-2">
//           <FaUser />
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             className="grow"
//             onChange={handleInputChange}
//           />
//         </label>

//         {/* Password */}
//         <label className="input input-bordered flex items-center gap-2">
//           <IoKeySharp />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="grow"
//             onChange={handleInputChange}
//           />
//         </label>

//         {/* Confirm Password */}
//         <label className="input input-bordered flex items-center gap-2">
//           <IoKeySharp />
//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm Password"
//             className="grow"
//             onChange={handleInputChange}
//           />
//         </label>

//         {/* Gender */}
//         <div className="flex justify-center gap-8 mt-2">
//           <label className="flex items-center gap-2 cursor-pointer">
//             <input
//               type="radio"
//               name="gender"
//               value="male"
//               checked={signupData.gender === "male"}
//               onChange={handleInputChange}
//               className="radio radio-primary"
//             />
//             <span className="label-text">Male</span>
//           </label>

//           <label className="flex items-center gap-2 cursor-pointer">
//             <input
//               type="radio"
//               name="gender"
//               value="female"
//               checked={signupData.gender === "female"}
//               onChange={handleInputChange}
//               className="radio radio-primary"
//             />
//             <span className="label-text">Female</span>
//           </label>
//         </div>

//         {/* Signup Button with Loader */}
//         <button
//           onClick={handleSignup}
//           className="btn btn-primary w-full mt-4 rounded-full disabled:opacity-70"
//           disabled={loading} 
//         >
//           {loading ? (
//             <span className="loading loading-spinner loading-sm"></span>
//           ) : (
//             "Create Account"
//           )}
//         </button>

//         {/* Login redirect */}
//         <p className="text-center text-sm mt-2">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-500 font-semibold">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUserThunk } from "../../store/slice/user/user.thunk";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.userReducer);

  const [signupData, setSignupData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  const handleInputChange = (e) => {
    setSignupData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = async () => {
    if (signupData.password !== signupData.confirmPassword) {
      return toast.error("Password and confirm password do not match");
    }

    setLoading(true);
    const response = await dispatch(registerUserThunk(signupData));
    setLoading(false);

    if (response?.payload?.success) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center px-4">
      <div className="w-full max-w-sm sm:max-w-md bg-base-100 shadow-2xl rounded-2xl p-6 sm:p-8 flex flex-col gap-4 sm:gap-6">
        {/* Title */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary">
            GupShup
          </h1>
          <p className="text-xs sm:text-sm opacity-70">
            Join and start chatting instantly 🚀
          </p>
        </div>

        {/* Full Name */}
        <label className="input input-bordered flex items-center gap-2 text-sm sm:text-base">
          <FaUser className="shrink-0" />
          <input
            type="text"
            name="fullName"
            className="grow"
            placeholder="Full Name"
            onChange={handleInputChange}
          />
        </label>

        {/* Username */}
        <label className="input input-bordered flex items-center gap-2 text-sm sm:text-base">
          <FaUser className="shrink-0" />
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="grow"
            onChange={handleInputChange}
          />
        </label>

        {/* Password */}
        <label className="input input-bordered flex items-center gap-2 text-sm sm:text-base">
          <IoKeySharp className="shrink-0" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="grow"
            onChange={handleInputChange}
          />
        </label>

        {/* Confirm Password */}
        <label className="input input-bordered flex items-center gap-2 text-sm sm:text-base">
          <IoKeySharp className="shrink-0" />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="grow"
            onChange={handleInputChange}
          />
        </label>

        {/* Gender */}
        <div className="flex justify-between sm:justify-center gap-6 sm:gap-8 mt-1 sm:mt-2 text-sm sm:text-base">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={signupData.gender === "male"}
              onChange={handleInputChange}
              className="radio radio-primary"
            />
            <span className="label-text">Male</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={signupData.gender === "female"}
              onChange={handleInputChange}
              className="radio radio-primary"
            />
            <span className="label-text">Female</span>
          </label>
        </div>

        {/* Signup Button */}
        <button
          onClick={handleSignup}
          className="btn btn-primary w-full mt-2 sm:mt-4 rounded-full disabled:opacity-70"
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner loading-sm" />
          ) : (
            "Create Account"
          )}
        </button>

        {/* Login redirect */}
        <p className="text-center text-xs sm:text-sm mt-1 sm:mt-2">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
