// // require("dotenv").config();
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const session = require("express-session");
// const routes = require("./Routes/routes"); // Import the routes file

// const PORT = process.env.PORT || 5500;

// // Set the view engine
// app.set("view engine", "ejs");

// // Middleware for parsing form data and JSON
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Session setup
// app.use(
//   session({
//     secret: "complex-secret-key",
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// // Serve static files (for images, CSS, etc.)
// app.use(express.static("uploads"));

// // Use routes defined in routes.js
// app.use("/", routes);

// // Disable caching
// app.set("no-cache", false);

// // Database connection
// mongoose
//   .connect(process.env.DB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to the database"))
//   .catch((error) => console.error(error));

// // Global error handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Internal Server Error");
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`App is listening on http://localhost:${PORT}`);
// });

require("dotenv").config(); // Ensure this is uncommented to load environment variables
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const routes = require("./Routes/routes");

const PORT = process.env.PORT || 5500;

// Set the view engine
app.set("view engine", "ejs");

// Middleware for parsing form data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Session setup
app.use(
  session({
    secret: "complex-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

// Serve static files (for images, CSS, etc.)
app.use(express.static("uploads"));

// Use routes defined in routes.js
app.use("/", routes);

// Disable caching
app.set("no-cache", false);

// Database connection
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the database"))
  .catch((error) => console.error(error));

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

// Start the server
app.listen(PORt, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
