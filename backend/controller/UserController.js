import User from "../model/User.js";

export const getAllUsers = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUser },
    }).select("-password");

    res.status(200).json({
      status: 200,
      message: "Users retrieved successfully.",
      data: filteredUsers,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "An error occurred while retrieving users.",
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
