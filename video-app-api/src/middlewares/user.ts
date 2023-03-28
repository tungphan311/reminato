import { NextFunction, Request, RequestHandler, Response } from "express";
import * as yup from "yup";
import { ERR_MSG_INVALID_USER, ERR_MSG_UNAUTHENTICATED } from "../constants";
import createHttpError from "http-errors";

const userSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const validateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await userSchema.validate(req.body);
    next();
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ message: error.message || ERR_MSG_INVALID_USER });
  }
};

const requiresAuth: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.session.userId) {
    next();
  } else {
    next(createHttpError(401, ERR_MSG_UNAUTHENTICATED));
  }
};

export { validateUser, requiresAuth };
