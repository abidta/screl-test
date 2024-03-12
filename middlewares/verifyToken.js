import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  if (req.cookies?.["access_token"]) {
    let verified = jwt.verify(
      req.cookies?.["access_token"],
      process.env.JWT_SECRET
    );
    if (!verified) {
      return res.status(400).json("invalid token");
    }
    console.log(verified);
    req.userId = verified.userId;
    next();
  } else {
    return res.status(401).json("Unauthorized");
  }
};
