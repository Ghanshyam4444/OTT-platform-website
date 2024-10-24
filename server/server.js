require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const adminRoute = require("./router/admin-router");
const contentRoute = require("./router/content-router");
const port = process.env.PORT || 8000;
const app = express();
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  Credentials: true,
};
app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/auth", authRoute);
app.use("/api/help", contactRoute);
app.use("/api/admin", adminRoute);
app.use("/api/content", contentRoute);

app.use(errorMiddleware);
connectDB().then(() => {
  app.listen(port, (req, res) => {
    console.log(`listning the port number ${port}`);
  });
});
