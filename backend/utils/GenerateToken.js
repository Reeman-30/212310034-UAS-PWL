import jwt from "jsonwebtoken";

const generateTokenAndSetCookies = (user_id, res) => {
  // Generate JWT Token and Expires within 7 days
  const token = jwt.sign({ user_id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  // Generate Cookies
  res.cookie("jwtCookie", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
  });
};

export default generateTokenAndSetCookies;
