import { db } from "../config/db.js";
import { createUser, qUsername } from "../sql/queries.js";
import { generateToken } from "../util/generateToken.js";
import { hashPassword, verifyHash } from "../util/hashPassword.js";

export const login = (req, res, next) => {
  const TTL_COOKIE = 3600 * 1000;
  const { username, password } = req.body;

  db.execute(qUsername, [username], (err, result) => {
    if (err) {
      return next(err);
    }
    let isVerified = verifyHash(password, result[0].password);
    if (!isVerified) {
      return res.status(401).json("incorrect password");
    }
    const token = generateToken(result[0].id);
    
    res
      .cookie("access_token", token, { maxAge: TTL_COOKIE, httpOnly: true })
      .json("Login successful");
    console.log(result);
  });
};
export const signup = async (req, res, next) => {
  let { username, email, fullName, password, bio } = req.body;
  password = await hashPassword(password);
  db.execute(
    createUser,
    [username, email, fullName, password, bio],
    (err, result) => {
      if (err) {
        return next(err);
      }
      console.log(result);
      res.json(result);
    }
  );
};
export const logout = (req, res) => {
  res.clearCookie("access_token").send("Logout successFully");
};
