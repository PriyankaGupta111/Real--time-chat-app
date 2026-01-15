

// import React, { useEffect, useState } from "react";
// import { FaUser } from "react-icons/fa";
// import { IoKeySharp } from "react-icons/io5";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUserThunk } from "../../store/slice/user/user.thunk";

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { isAuthenticated } = useSelector((state) => state.userReducer);

//   const [loginData, setLoginData] = useState({
//     username: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false); // 👈 loading state

//   useEffect(() => {
//     if (isAuthenticated) navigate("/");
//   }, [isAuthenticated, navigate]);

//   const handleInputChange = (e) => {
//     setLoginData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleLogin = async () => {
//     setLoading(true); // start loading
//     const response = await dispatch(loginUserThunk(loginData));
//     setLoading(false); // stop loading

//     if (response?.payload?.success) {
//       navigate("/");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700">
//       <div className="max-w-md w-full bg-base-100 shadow-2xl rounded-2xl p-8 flex flex-col gap-6">
        
//         {/* Title */}
//         <div className="text-center">
//           <h1 className="text-3xl font-bold text-primary">Welcome Back 👋</h1>
//           <p className="text-sm opacity-70">Login to continue your GupShup</p>
//         </div>

//         {/* Username */}
//         <label className="input input-bordered flex items-center gap-2">
//           <FaUser />
//           <input
//             type="text"
//             name="username"
//             className="grow"
//             placeholder="Username"
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

//         {/* Login Button with Loader */}
//         <button
//           onClick={handleLogin}
//           className="btn btn-primary w-full mt-4 rounded-full disabled:opacity-70"
//           disabled={loading} // disable button while loading
//         >
//           {loading ? (
//             <span className="loading loading-spinner loading-sm"></span>
//           ) : (
//             "Login"
//           )}
//         </button>

//         {/* Signup Redirect */}
//         <p className="text-center text-sm mt-2">
//           Don’t have an account?{" "}
//           <Link to="/signup" className="text-blue-500 font-semibold">
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../../store/slice/user/user.thunk";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.userReducer);

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  const handleInputChange = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async () => {
    setLoading(true);
    const response = await dispatch(loginUserThunk(loginData));
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
            Welcome Back 👋
          </h1>
          <p className="text-xs sm:text-sm opacity-70">
            Login to continue your GupShup
          </p>
        </div>

        {/* Username */}
        <label className="input input-bordered flex items-center gap-2 text-sm sm:text-base">
          <FaUser className="shrink-0" />
          <input
            type="text"
            name="username"
            className="grow"
            placeholder="Username"
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

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="btn btn-primary w-full mt-2 sm:mt-4 rounded-full disabled:opacity-70"
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner loading-sm" />
          ) : (
            "Login"
          )}
        </button>

        {/* Signup Redirect */}
        <p className="text-center text-xs sm:text-sm mt-1 sm:mt-2">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500 font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

