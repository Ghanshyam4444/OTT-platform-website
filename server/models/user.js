const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    requierd: true,
  },
  phone: {
    type: String,
    requierd: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    requierd: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isSubscriber: {
    type: Boolean,
    default: false,
  },
});
userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});

userSchema.methods.genrateToken = async function () {
  try {
    const token = await jwt.sign(
      {
        userId: this._id.toString(),
        user_email: this.email,
        isAdmin: this.isAdmin,
        isSubscriber: this.isSubscriber,
      },
      "thisisasecretkey",
      { expiresIn: "30d" }
    );
    return token;
  } catch (error) {
    console.log(error);
  }
};
const User = new mongoose.model("User", userSchema);
module.exports = User;
