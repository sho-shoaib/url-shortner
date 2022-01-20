import express from "express";
import urlRouter from "./routes/urlRoute.js";
import pageRoute from "./routes/pageRoutes.js";
import mongoose from "mongoose";

const app = express();

mongoose.connect("mongodb://localhost/urlshortner", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.json());
app.use("/", urlRouter);
app.use("/", pageRoute);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
