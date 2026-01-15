import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { sendMessageThunk } from "../../store/slice/message/message.thunk";

const SendMessage = () => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.userReducer);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (!message.trim()) return; // Prevent sending empty messages
    dispatch(
      sendMessageThunk({
        recieverId: selectedUser?._id,
        message,
      })
    );
    setMessage("");
  };

  return (
    <div className="w-full p-3 flex gap-2 items-center bg-gray-50 dark:bg-gray-800 rounded-t-lg shadow-md">
      <input
        type="text"
        placeholder="Type here..."
        className="input input-bordered input-primary w-full focus:ring-2 focus:ring-primary focus:outline-none rounded-lg pr-12"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          // Enter sends message, Shift + Enter adds newline
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
          }
        }}
      />
      <button
        onClick={handleSendMessage} // Works on mobile/touch devices
        className="btn btn-square btn-outline btn-primary"
      >
        <IoIosSend />
      </button>
    </div>
  );
};

export default SendMessage;
