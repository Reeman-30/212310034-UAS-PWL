import User from "../model/User.js";
import generateTokenAndSetCookies from "../utils/GenerateToken.js";

export const registerUsers = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    const emailExists = await User.findOne({ email });

    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({
        status: 400,
        message: "All fields are required.",
      });
    }

    if (emailExists) {
      return res.status(400).json({
        status: 400,
        message: "Email already exists.",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        status: 400,
        message: "Passwords do not match.",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        status: 400,
        message: "Password should be at least 8 characters long.",
      });
    }

    const user = await User.create({ name, email, password });

    // Generate JWT Token
    generateTokenAndSetCookies(user._id, res);

    res.status(201).json({
      status: 201,
      message: "User registered successfully.",
      data: { name, email },
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "An error occurred while registering users.",
      error: error.message,
    });
  }
};

export const loginUsers = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: 400,
        message: "Email and password are required.",
      });
    }

    const user = await User.findOne({ email });

    if (user.password !== password) {
      return res.status(401).json({
        status: 401,
        message: "Invalid email or password.",
      });
    }

    // Generate JWT Token
    generateTokenAndSetCookies(user._id, res);

    res.status(200).json({
      status: 200,
      message: "User logged in successfully.",
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "An error occurred while logging in users.",
      error: error.message,
    });
  }
};

export const logoutUser = (req, res) => {
  try {
    res.clearCookie("jwtCookie");
    res.status(200).json({
      status: 200,
      message: "User logged out successfully.",
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "An error occurred while logging out users.",
      error: error.message,
    });
  }
};

export const connect = (req, res) => {
  try {
    res.status(200).json({
      status: 200,
      message: "API Connected!",
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "An error occurred while connecting to the API.",
      error: error.message,
    });
  }
};
