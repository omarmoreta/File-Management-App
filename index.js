require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const viewsEngine = require("express-react-views").createEngine();

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongo: ", process.env.MONGO_URI);
  }
);

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("jsx", viewsEngine);

const filesController = require("./controller/files");
app.use("/files", filesController);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}`);
});
