// import { useEffect } from "react";

// import { Toaster } from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { getUserProfileThunk } from "./store/slice/user/user.thunk";

// function App() {
  
//   const dispatch = useDispatch();

//   useEffect(() => {
//     (async () => {
//       await dispatch(getUserProfileThunk());
//     })();
//   }, []);

//   return (
//     <>
//       <Toaster position="top-center" reverseOrder={false} />
//     </>
//   );
// }

// export default App;

import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfileThunk } from "./store/slice/user/user.thunk";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Chat from "./pages/Chat";

function App() {
  const dispatch = useDispatch();

  const { isAuthenticated, screenLoading } = useSelector(
    (state) => state.user
  );

  // STEP 2.1: auth check on app load
  useEffect(() => {
    dispatch(getUserProfileThunk());
  }, [dispatch]);

  // STEP 2.2: jab tak auth check complete nahi ho
  if (screenLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <BrowserRouter>
        <Routes>
          {isAuthenticated ? (
            <>
              <Route path="/" element={<Chat />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
