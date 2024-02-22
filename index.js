import cors from "cors";
import DBConnection from "./database/db.js";
import express from "express";
import path from "path";
import router from "./routes/route.js";

const __dirname = path.resolve();
const app = express();

app.use(cors());
app.use("/", router);

app.use(express.static(path.join(__dirname, "./frontend/dist")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./frontend/dist/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});
const PORT = process.env.PORT || 8000;

DBConnection();
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
