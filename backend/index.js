// // import express from "express";
// // import cors from "cors";
// // import dotenv from "dotenv";
// // import route from "./route/emailRoute.js";

// // dotenv.config();

// // const app = express();

// // app.use(cors());
// // app.use(express.json());

// // app.use("/email", route);

// // const PORT = process.env.PORT || 5000;

// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });

// //--------------------------------------------------------------------------

// // import "dotenv/config";

// // import express from "express";
// // import cors from "cors";
// // import route from "./route/emailRoute.js";

// // const app = express();

// // app.use(cors());
// // app.use(express.json());

// // app.use("/email", route);

// // const PORT = process.env.PORT || 5000;

// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });

// //-----------------------------------------------------------------------------------

// // import "dotenv/config";

// // import express from "express";
// // import cors from "cors";
// // import route from "./route/emailRoute.js";

// // const app = express();

// // // Middleware
// // app.use(
// //   cors({
// //     origin: [
// //       "http://localhost:5173",
// //       "https://new-portfolio-jjeb.onrender.com",
// //     ],
// //     methods: ["GET", "POST", "OPTIONS"],
// //     allowedHeaders: ["Content-Type", "Authorization"],
// //   })
// // );

// // app.use(express.json());

// // // Routes
// // app.use("/email", route);

// // // Health check
// // app.get("/", (req, res) => {
// //   res.status(200).json({
// //     success: true,
// //     message: "Portfolio backend is running",
// //   });
// // });

// // // Render provides PORT automatically
// // const PORT = process.env.PORT || 5000;

// // app.listen(PORT, "0.0.0.0", () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });

// //---------------------------------------------------------------

// import "dotenv/config";
// import express from "express";
// import cors from "cors";
// import route from "./route/emailRoute.js";

// const app = express();

// app.use(cors());
// app.use(express.json());

// console.log("========== ENV CHECK ==========");
// console.log("EMAIL_USER:", process.env.EMAIL_USER);
// console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);
// console.log("===============================");

// // Health check
// app.get("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "Portfolio backend is running",
//   });
// });

// // Email routes
// app.use("/email", route);

// // IMPORTANT: Render provides PORT
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, "0.0.0.0", () => {
//   console.log(`Server is running on port ${PORT}`);
// });









import "dotenv/config";

import express from "express";
import cors from "cors";
import route from "./route/emailRoute.js";

const app = express();

// ================================
// Middleware
// ================================

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://new-portfolio-jjeb.onrender.com",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ================================
// Health Check
// ================================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio API is running",
  });
});

// ================================
// Email Routes
// ================================

app.use("/email", route);

// ================================
// 404
// ================================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// ================================
// Server
// ================================

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  console.log("========== ENV CHECK ==========");
  console.log(
    "RESEND_API_KEY exists:",
    !!process.env.RESEND_API_KEY
  );
  console.log(
    "EMAIL_USER:",
    process.env.EMAIL_USER
  );
  console.log("===============================");
});