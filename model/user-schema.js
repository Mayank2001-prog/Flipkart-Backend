import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    min: 3,
    max: 20,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    min: 3,
    max: 20,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
    lowecase: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowecase: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("user", userSchema);

export default user;
