

// import React, { useEffect, useRef } from "react";
// import { useSelector } from "react-redux";

// const Message = ({ messageDetails }) => {
//   const messageRef = useRef(null);
//   const { userProfile, selectedUser } = useSelector(
//     (state) => state.userReducer
//   );

//   useEffect(() => {
//     if (messageRef.current) {
//       messageRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, []);

//   //  Convert timestamp to readable time
//   const formatTime = (dateString) => {
//     if (!dateString) return "";
//     const date = new Date(dateString);
//     return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" ,  hour12: true,});
//   };

//   return (
//     <div
//       ref={messageRef}
//       className={`chat ${
//         userProfile?._id === messageDetails?.senderId
//           ? "chat-end"
//           : "chat-start"
//       }`}
//     >
//       <div className="chat-image avatar">
//         <div className="w-10 rounded-full">
//           <img
//             alt="user avatar"
//             src={
//               userProfile?._id === messageDetails?.senderId
//                 ? userProfile?.avatar
//                 : selectedUser?.avatar
//             }
//           />
//         </div>
//       </div>
//       <div className="chat-header">
//         <time className="text-xs opacity-50">
//           {formatTime(messageDetails?.createdAt)}
//         </time>
//       </div>
//       <div className="chat-bubble">{messageDetails?.message}</div>
//     </div>
//   );
// };

// export default Message;


// import React, { useEffect, useRef } from "react";
// import { useSelector } from "react-redux";

// const Message = ({ messageDetails }) => {
//   const messageRef = useRef(null);
//   const { userProfile, selectedUser } = useSelector(
//     (state) => state.userReducer
//   );

//   useEffect(() => {
//     if (messageRef.current) {
//       messageRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, []);

//   // Convert timestamp to readable time
//   const formatTime = (dateString) => {
//     if (!dateString) return "";
//     const date = new Date(dateString);
//     return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });
//   };

//   const isSender = userProfile?._id === messageDetails?.senderId;

//   return (
//     <div
//       ref={messageRef}
//       className={`chat ${isSender ? "chat-end" : "chat-start"}`}
//     >
//       <div className="chat-image avatar">
//         <div className="w-10 rounded-full">
//           <img
//             alt="user avatar"
//             src={isSender ? userProfile?.avatar : selectedUser?.avatar}
//           />
//         </div>
//       </div>
//       <div className="chat-header">
//         <time className="text-xs opacity-50">
//           {formatTime(messageDetails?.createdAt)}
//         </time>
//       </div>
//       <div
//         className={`chat-bubble ${
//           isSender
//             ? "bg-green-500 text-white"   // Sent message (like WhatsApp green)
//             : "bg-gray-200 text-gray-900" // Received message (light gray)
//         }`}
//       >
//         {messageDetails?.message}
//       </div>
//     </div>
//   );
// };

// export default Message;


import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Message = ({ messageDetails }) => {
  const messageRef = useRef(null);
  const { userProfile, selectedUser } = useSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const formatTime = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const isSender = userProfile?._id === messageDetails?.senderId;

  return (
    <div ref={messageRef}
      className={`chat ${isSender ? "chat-end" : "chat-start"}`}
    >
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="user avatar"
            src={isSender ? userProfile?.avatar : selectedUser?.avatar}
          />
        </div>
      </div>

      <div className="chat-header">
        <time className="text-xs opacity-50">
          {formatTime(messageDetails?.createdAt)}
        </time>
      </div>

      {/* 💜 CUSTOM BUBBLE COLORS APPLIED HERE */}
      <div
        className={`chat-bubble ${
          isSender
            ? "bg-purple-600 text-white"   // 👉 Your message (Right) Purple
            : "bg-white text-black border border-gray-300" // 👉 Received message (Left)
        }`}
      >
        {messageDetails?.message}
      </div>
    </div>
  );
};

export default Message;

