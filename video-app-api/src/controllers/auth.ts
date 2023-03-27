import bcrypt from "bcrypt";
import { NextFunction, Request, RequestHandler, Response } from "express";
import createHttpError from "http-errors";
import { AuthBody, AuthResponse } from "../interfaces/auth";
import UserModel from "../models/User";

const getAuthenticatedUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authenticatedUser = req.session.userId;

  try {
    if (!authenticatedUser) {
      throw createHttpError(401, "User is not authenticated");
    }

    const user = await UserModel.findById(authenticatedUser).exec();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const authentication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user: AuthBody = req.body;
  const { email, password } = user;

  try {
    const existingUser = await UserModel.findOne({ email })
      .select("+password")
      .exec();

    if (!existingUser) {
      const passwordHashed = await bcrypt.hash(password, 10);
      const newUser = await UserModel.create({
        email,
        password: passwordHashed,
      });

      req.session.userId = newUser._id;
      res.status(201).json({
        email: newUser.email as string,
      });
    }

    const isPasswordMatch = await bcrypt.compare(
      password,
      existingUser?.password as string
    );

    if (!isPasswordMatch) {
      throw createHttpError(401, "Invalid email or password");
    }
    res.status(200).json({
      email: existingUser?.email as string,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const logout = async (req: Request, res: Response, next: NextFunction) => {
  req.session.destroy((err) => {
    if (err) {
      next(err);
    }

    res.sendStatus(200);
  });
};

export { authentication, logout, getAuthenticatedUser };
