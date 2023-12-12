import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import config from "../config";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // default values
  let statusCode = 500;
  let message = err.message || "Something went wrong";
  type TErrorSource = {
    path: string | number;
    message: string;
  }[];
  const errorSource: TErrorSource = [
    {
      path: "",
      message: "somethisn went wrong",
    },
  ];

  const handleZodError = (err: ZodError) => {
    const errorSources = err.issues.map((issue) => {
      return {
        path: issue.path[issue.path.length - 1],
        message: issue.message,
      };
    });
    statusCode = 400;
    return {
      statusCode,
      message: "zod validation Error",
    };
  };

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError.message;
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSource,
    stack: config.node_env === "development" ? err?.stack : null,
  });
};

export default globalErrorHandler;
