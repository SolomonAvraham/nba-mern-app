require("dotenv").config();
const express = require("express");
const app = express();
const port = 8080;

const cors = require("cors");
const db = require("./DB/index");
const usersRouters = require("./routes/users-route");

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/users", usersRouters);

db.on("error", (err) => console.log(err));

app.get("/", (req, res) => {
  res.send("success");
});

app.listen(port, () => {
  console.log(`Welcome to the server, you are in port: ${port}`);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}
