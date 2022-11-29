const mongoose = require("mongoose");

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection succeed");
  })
  .catch((err) => console.error("Connection failed", err.message));

const db = mongoose.connection;

module.exports = db;
