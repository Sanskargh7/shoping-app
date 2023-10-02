import mongoose from "mongoose";

//create schema
const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      allowNull: false,
    },
    email: {
      type: String,
      unique: true,
      allowNull: false,
    },
    password: {
      type: String,
      allowNull: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export default mongoose.model("User", UserSchema);
