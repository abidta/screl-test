import bcrypt from "bcrypt";

export const hashPassword = async (pswd) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(pswd, salt);
};

export const verifyHash = async (pswd, hashed) => {
  return await bcrypt.compare(pswd, hashed);
};
