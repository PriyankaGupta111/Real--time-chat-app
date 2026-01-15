// import { app, server } from "./socket/socket.js";
// import express from "express";
// import dbConnect from './DB/dbConnect.js'
// import cookieParser from "cookie-parser";
// import cors from "cors";

// dbConnect()

// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "https://real-time-chat-app-eosin-psi.vercel.app"
//     ],
//     credentials: true,
//   })
// );
// app.use(express.json());
// app.use(cookieParser());

// const PORT = process.env.PORT || 3000;

// // routes
// import userRoute from "./routes/user.route.js";
// import messageRoute from "./routes/message.route.js";
// app.use("/api/v1/user", userRoute);
// app.use("/api/v1/message", messageRoute);

// // middlwares
// import { errorMiddleware } from "./middlewares/error.middlware.js";

// app.use(errorMiddleware);

// app.get('/',(req,res)=>{
//   res.send({
//     actiiveStatus:true,
//     error:false,
//   })
// })

// server.listen(PORT, () => {
//   console.log(`your server listening at port ${PORT}`);
// });

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dbConnect from "./DB/dbConnect.js";

// 🔹 App init
const app = express();

// 🔹 DB connect
dbConnect();

// 🔹 CORS (VERY IMPORTANT)
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://real-time-chat-app-eosin-psi.vercel.app",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// 🔹 Preflight handler (MANDATORY)
app.options("*", cors());

// 🔹 Middlewares
app.use(express.json());
app.use(cookieParser());

// 🔹 Routes
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";

app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

// 🔹 Test route
app.get("/", (req, res) => {
  res.json({
    status: "Backend running successfully",
  });
});

// 🔹 Error middleware
import { errorMiddleware } from "./middlewares/error.middlware.js";
app.use(errorMiddleware);

// 🔹 EXPORT (NO listen on Vercel)
export default app;
