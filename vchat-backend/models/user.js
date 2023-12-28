const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  username: { type: String },
  mail: { type: String, unique: true },
  password: { type: String },
  friends: [{ type: Schema.Types.Object, ref: "user" }],
});

module.exports = mongoose.model("user", userSchema);
