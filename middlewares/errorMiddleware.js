export const errorMiddleWare = (err, req, res, next) => {
  res.status(err.status || 500).send("Internal Error");
};
