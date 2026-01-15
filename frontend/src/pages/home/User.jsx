// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setSelectedUser } from "../../store/slice/user/user.slice";

// const User = ({ userDetails }) => {
//   const dispatch = useDispatch();

//   const { selectedUser } = useSelector((state) => state.userReducer);
//   const { onlineUsers } = useSelector((state) => state.socketReducer);

//   const isUserOnline = onlineUsers?.includes(userDetails?._id);

//   const handleUserClick = () => {
//     dispatch(setSelectedUser(userDetails));
//   };

//   return (
//     <div
//       onClick={handleUserClick}
//       className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-200 
//         ${
//           userDetails?._id === selectedUser?._id
//             ? "bg-gradient-to-r from-purple-600 to-indigo-700 shadow-md"
//             : "bg-gray-700 hover:bg-gray-600"
//         }`}
//     >
//       {/* Avatar with Online Badge */}
//       <div className="relative">
//         <div className="avatar">
//           <div className="w-12 rounded-full ring ring-offset-2 ring-primary/50">
//             <img src={userDetails?.avatar} alt="User Avatar" />
//           </div>
//         </div>
//         {isUserOnline && (
//           <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full border border-white"></span>
//         )}
//       </div>

//       {/* User Info */}
//       <div className="flex flex-col">
//         <h2 className="font-semibold text-white truncate max-w-[10rem]">
//           {userDetails?.fullName}
//         </h2>
//         <p className="text-xs text-gray-300">@{userDetails?.username}</p>
//       </div>
//     </div>
//   );
// };

// export default User;


import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../../store/slice/user/user.slice";

const User = ({ userDetails }) => {
  const dispatch = useDispatch();

  const { selectedUser } = useSelector((state) => state.userReducer);
  const { onlineUsers } = useSelector((state) => state.socketReducer);

  const isUserOnline = onlineUsers?.includes(userDetails?._id);

  const handleUserClick = () => {
    dispatch(setSelectedUser(userDetails));
  };

  const isSelected = userDetails?._id === selectedUser?._id;

  return (
    <div
      onClick={handleUserClick}
      className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-200 
        ${
          isSelected
            ? "bg-gray-700 shadow-md"   // Selected user now gray
            : "bg-gray-800 hover:bg-gray-600" // Default + hover
        }`}
    >
      {/* Avatar with Online Badge */}
      <div className="relative">
        <div className="avatar">
          <div className="w-12 rounded-full ring ring-offset-2 ring-primary/50">
            <img src={userDetails?.avatar} alt="User Avatar" />
          </div>
        </div>
        {isUserOnline && (
          <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full border border-white"></span>
        )}
      </div>

      {/* User Info */}
      <div className="flex flex-col">
        <h2 className="font-semibold text-white truncate max-w-[10rem]">
          {userDetails?.fullName}
        </h2>
        <p className="text-xs text-gray-300">@{userDetails?.username}</p>
      </div>
    </div>
  );
};

export default User;
