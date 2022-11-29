const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    fullName: {type: String,require: true},
    email: {type: String,require: true},
    password: {type: String,require: true},
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("user", UserSchema);
