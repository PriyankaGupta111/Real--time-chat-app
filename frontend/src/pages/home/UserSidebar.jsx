
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import User from "./User";
import { useDispatch, useSelector } from "react-redux";
import {
  getOtherUsersThunk,
  logoutUserThunk,
} from "../../store/slice/user/user.thunk";

const UserSidebar = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const { otherUsers, userProfile } = useSelector((state) => state.userReducer);

  const handleLogout = async () => {
    await dispatch(logoutUserThunk());
  };

  useEffect(() => {
    if (!searchValue) {
      setUsers(otherUsers);
    } else {
      setUsers(
        otherUsers.filter((user) => {
          return (
            user.username.toLowerCase().includes(searchValue.toLowerCase()) ||
            user.fullName
              .toLowerCase()
              .includes(searchValue.toLocaleLowerCase())
          );
        })
      );
    }
  }, [searchValue, otherUsers]);

  useEffect(() => {
    (async () => {
      await dispatch(getOtherUsersThunk());
    })();
  }, []);

  return (
    <div className="w-full max-w-[20rem] h-screen flex flex-col bg-gradient-to-b border-r border-r-white/10 bg-slate-900 text-white shadow-lg">
      {/* App Title */}
      <div className="p-4 border-b border-white/20 text-center">
        <h1 className="text-2xl font-bold tracking-wide text-yellow-300">
          chats 💬
        </h1>
        <p className="text-xs opacity-70">Stay connected with friends</p>
      </div>

      {/* Search Bar */}
      <div className="p-3">
        <label className="input input-bordered flex items-center gap-2 bg-white/10 rounded-lg">
          <IoSearch className="text-white/80" />
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            className="grow bg-transparent text-white placeholder-white/50 focus:outline-none"
            placeholder="Search users..."
          />
        </label>
      </div>

      {/* User List */}
      <div className="h-full overflow-y-auto px-3 flex flex-col gap-2">
        {users?.length > 0 ? (
          users.map((userDetails) => (
            <User key={userDetails?._id} userDetails={userDetails} />
          ))
        ) : (
          <p className="text-center text-sm opacity-60 mt-4">
            No users found 😢
          </p>
        )}
      </div>

      {/* Current User + Logout */}
      <div className="p-4 border-t border-white/20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
              <img src={userProfile?.avatar} alt="Profile" />
            </div>
          </div>
          <div>
            <h2 className="font-semibold">{userProfile?.username}</h2>
            <p className="text-xs opacity-70">{userProfile?.fullName}</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="btn btn-primary border-none rounded-full"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserSidebar;
