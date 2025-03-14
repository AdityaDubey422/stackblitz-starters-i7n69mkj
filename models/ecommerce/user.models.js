import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      minLength: 8,
    },
    location: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
