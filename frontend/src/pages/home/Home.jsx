// import React, { useEffect } from "react";
// import UserSidebar from "./UserSidebar";
// import MessageContainer from "./MessageContainer";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   initializeSocket,
//   setOnlineUsers,
// } from "../../store/slice/socket/socket.slice";
// import { setNewMessage } from "../../store/slice/message/message.slice";

// const Home = () => {
//   const dispatch = useDispatch();
//   const { isAuthenticated, userProfile } = useSelector(
//     (state) => state.userReducer
//   );
//   const { socket, onlineUsers } = useSelector((state) => state.socketReducer);

//   useEffect(() => {
//     if (!isAuthenticated) return;
//     dispatch(initializeSocket(userProfile?._id));
//   }, [isAuthenticated]);

//   useEffect(() => {
//     if (!socket) return;
//     socket.on("onlineUsers", (onlineUsers) => {
//       dispatch(setOnlineUsers(onlineUsers));
//     });
//     socket.on("newMessage", (newMessage) => {
//       dispatch(setNewMessage(newMessage));
//     });
//     return () => {
//       socket.close();
//     };
//   }, [socket]);

//   return (
//     <div className="flex">
//       <UserSidebar />
//       <MessageContainer />
//     </div>
//   );
// };

// export default Home;

import React, { useEffect } from "react";
import UserSidebar from "./UserSidebar";
import MessageContainer from "./MessageContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  initializeSocket,
  setOnlineUsers,
} from "../../store/slice/socket/socket.slice";
import { setNewMessage } from "../../store/slice/message/message.slice";

const Home = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, userProfile, selectedUser } = useSelector(
    (state) => state.userReducer
  );
  const { socket } = useSelector((state) => state.socketReducer);

  useEffect(() => {
    if (!isAuthenticated) return;
    dispatch(initializeSocket(userProfile?._id));
  }, [isAuthenticated, dispatch, userProfile?._id]);

  useEffect(() => {
    if (!socket) return;

    socket.on("onlineUsers", (onlineUsers) => {
      dispatch(setOnlineUsers(onlineUsers));
    });

    socket.on("newMessage", (newMessage) => {
      dispatch(setNewMessage(newMessage));
    });

    return () => {
      socket.close();
    };
  }, [socket, dispatch]);

  return (
    <div className="flex h-screen bg-slate-950">
      {/* Sidebar */}
      <div
        className={`
          w-full md:max-w-[20rem] 
          ${selectedUser ? "hidden md:block" : "block"}
        `}
      >
        <UserSidebar />
      </div>

      {/* Chat Area */}
      <div
        className={`
          flex-1 
          ${selectedUser ? "block" : "hidden md:block"}
        `}
      >
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
