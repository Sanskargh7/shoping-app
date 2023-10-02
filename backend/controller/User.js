import UserModel from "../models/user.js";

class User {
  //register user information in the database
  static registerUser = async (req, res) => {
    try {
      const createUser = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      const createdUser = await createUser.save();
      if (createdUser) {
        return res.status(200).json({
          success: false,
          msg: "User register successfully",
          userInfo: createdUser,
        });
      }
    } catch (error) {
      return res.status(500).json({ success: false, error: error });
    }
  };

  //login user
  static loginUser=async(req,res)=>{
    
  }
}
export default User;
