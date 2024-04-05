import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/route.js";

const app = express();

dotenv.config();

connectDB();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>HelLo g , wellcome  from server</h1>");
});

app.use("/", router);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running successfully on Port ${PORT}`);
});
