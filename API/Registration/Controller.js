const User = require("./model");
const { connect } = require("mongoose");
const mongoose = require("mongoose");
require("dotenv").config();
const { hash, compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

const Signup = async (req, res) => {
  const { username, password, email, role } = req.body;
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await User.syncIndexes();

    console.log("DB Connected");
    const existingUser = await User.exists({ email: email });
    if (existingUser) {
      res.status(208).json({
        message: "User Already Exists",
      });
    } else {
      await User.create({
        username,
        email,
        role,
        password: await hash(password, 12),
      });
      console.log("User Created");
      res.status(201).json({
        message: "Signup Successfully",
      });
    }
  } catch (error) {
    console.error(error);
    res.json({
      message: error.message,
    });
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Missing Required Field" });
  }

  try {
    const CheckUser = await User.findOne({ email: email.toLowerCase() });

    if (!CheckUser) {
      return res.status(404).json({ message: "User Doesn't Exist" });
    }

    const isValidPassword = await compare(password, CheckUser.password);

    console.log("Password check:", isValidPassword);

    if (isValidPassword) {
      const UserData = {
        email: CheckUser.email,
        _id: CheckUser._id,
        role: CheckUser.role,
        ProfilePic: CheckUser.ProfilePic,
        Joining: CheckUser.Joining,
        username: CheckUser.username,
      };

      if (!process.env.JWT_SECRET) {
        console.error("JWT_SECRET is not set.");

        return res
          .status(500)
          .json({ message: "Server error: JWT_SECRET is missing." });
      }

      const token = sign(UserData, process.env.JWT_SECRET);

      return res.json({ message: "Successfully Logged in", token });
    } else {
      return res.status(403).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    await connect(process.env.MONGO_URI);
    const users = await User.find();

    res.json({ users });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const updateProfile = async (req, res) => {
  const { _id, email, username, ProfilePic } = req.body;

  const filter = { _id };
  const update = { email, username, ProfilePic };

  try {
    await connect(process.env.MONGO_URI);
    const updated = await User.findOneAndUpdate(filter, update, {
      new: true,
    });

    res.json({
      message: "successs",
      user: updated,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const userByID = async (req, res) => {
  const { _id } = req.query;

  try {
    await connect(process.env.MONGO_URI);
    const user = await User.findOne({ _id });

    res.json({ user });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  const { _id } = req.body;

  try {
    await connect(process.env.MONGO_URI);
    await User.deleteOne({ _id });
    const user = await User.find();

    res.json({ message: "User Deleted Successfully" });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

module.exports = {
  Login,
  Signup,
  deleteUser,
  updateProfile,
  userByID,
  getAllUsers,
};
