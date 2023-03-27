import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { ERR_MSG_INVALID_USER } from "../constants";

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

export default validateUser;
