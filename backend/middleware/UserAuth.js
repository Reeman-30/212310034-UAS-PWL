import jwt from "jsonwebtoken";
import User from "../model/User.js";

const UserAuth = async (req, res, next) => {
  try {
    const token = req.cookies.jwtCookie;
    // Check if the token exists
    if (!token) {
      return res.status(401).json({
        status: 401,
        message: "No token provided.",
      });
    }

    // Verify the JWT
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedToken) {
      return res.status(403).json({
        status: 403,
        message: "Invalid token.",
      });
    }

    const user = await User.findById(decodedToken.user_id).select("-password");

    if (!user) {
      return res.status(401).json({
        status: 401,
        message: "User not found.",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "An error occurred while validating user token.",
      error: error.message,
    });
  }
};

export default UserAuth;
