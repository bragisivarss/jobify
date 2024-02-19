import { StatusCodes as Status } from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, nex) => {
  console.log(err);
  const statusCode = err.statusCode || Status.INTERNAL_SERVER_ERROR;
  const msg = err.message || "Something Went Wrong Try Again Later";
  res.status(statusCode).json({ msg });
};

export default errorHandlerMiddleware;
