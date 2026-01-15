

// import React, { useEffect, useRef } from "react";
// import User from "./User";
// import Message from "./Message";
// import { useDispatch, useSelector } from "react-redux";
// import { getMessageThunk } from "../../store/slice/message/message.thunk";
// import SendMessage from "./SendMessage";

// const MessageContainer = () => {
//   const dispatch = useDispatch();
//   const { selectedUser } = useSelector((state) => state.userReducer);
//   const { messages } = useSelector((state) => state.messageReducer);
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     if (selectedUser?._id) {
//       dispatch(getMessageThunk({ recieverId: selectedUser?._id }));
//     }
//   }, [selectedUser]);

//   // Auto-scroll to bottom
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   return (
//     <>
//        {!selectedUser ? (
//         <div className="w-full flex items-center justify-center flex-col gap-5">
//           <h2>Welcome to GUP SHUP</h2>
//           <p className="text-xl">Please select a person to continue your chat!!</p>
//           </div>
//       ) : (
//         <div className="h-screen w-full flex flex-col bg-gradient-to-br bg-slate-950/50 ">
//           {/* Chat header */}
//           <div className="p-4 border-b border-white/10">
//             <User userDetails={selectedUser} />
//           </div>

//           {/* Chat body */}
//           <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 text-white">
//             {messages?.map((messageDetails) => (
//               <Message key={messageDetails?._id} messageDetails={messageDetails} />
//             ))}
//             <div ref={messagesEndRef}></div>
//           </div>

//           {/* Input */}
//           <div className="border-t border-white/10 p-3">
//             <SendMessage />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default MessageContainer;


import React, { useEffect, useRef } from "react";
import User from "./User";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";
import { getMessageThunk } from "../../store/slice/message/message.thunk";
import SendMessage from "./SendMessage";
import { setSelectedUser } from "../../store/slice/user/user.slice";
import { IoArrowBackOutline } from "react-icons/io5";

const MessageContainer = () => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.userReducer);
  const { messages } = useSelector((state) => state.messageReducer);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (selectedUser?._id) {
      dispatch(getMessageThunk({ recieverId: selectedUser?._id }));
    }
  }, [selectedUser, dispatch]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!selectedUser) {
    // Desktop ke liye welcome screen (mobile me Home.jsx already hide kar dega)
    return (
      <div className="w-full h-full flex items-center justify-center flex-col gap-5 text-white">
        <h2 className="text-2xl font-semibold">Welcome to GUP SHUP</h2>
        <p className="text-xl opacity-80">
          Please select a person to continue your chat!!
        </p>
      </div>
    );
  }

  return (
    <div className="h-full w-full flex flex-col bg-gradient-to-br bg-slate-950/50 text-white">
      {/* Chat header */}
      <div className="p-4 border-b border-white/10 flex items-center gap-3">
        {/* 🔙 Back button – only on mobile */}
        <button
          className="md:hidden p-1 rounded-full hover:bg-white/10"
          onClick={() => dispatch(setSelectedUser(null))}
        >
          <IoArrowBackOutline size={22} />
        </button>

        <User userDetails={selectedUser} />
      </div>

      {/* Chat body */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
        {messages?.map((messageDetails) => (
          <Message key={messageDetails?._id} messageDetails={messageDetails} />
        ))}
        <div ref={messagesEndRef}></div>
      </div>

      {/* Input */}
      <div className="border-t border-white/10 p-3">
        <SendMessage />
      </div>
    </div>
  );
};

export default MessageContainer;
