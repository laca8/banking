import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import { AppError } from "../types";

const JWT_SECRET = process.env.JWT_SECRET || "defaultSecretKey";
const EXPIRE_TIME: any = process.env.EXPIRE_TIME || "7d";
const signToken = async (id: any) => {
  return jwt.sign({ userId: id }, JWT_SECRET as string, {
    expiresIn: EXPIRE_TIME,
  });
};

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name, email, password, role } = req.body;
  try {
    if (!name || !email || !password || !role) {
      next(new AppError("Something is missing", 400));
    }
    const user = await User.findOne({ email });
    if (user) {
      next(new AppError("user already exist please enter your email...", 400));
    }
    const newUser = await User.create({
      name,
      email,
      password,
      role,
    });
    const token = await signToken(newUser._id);
    const userWithNotPassword = {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      token,
    };
    // console.log(token);

    res.status(201).json({
      user: userWithNotPassword,
    });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      next(new AppError(error.message, 500));
    }
    next(new AppError("An unknown error occurred", 500));
  }
};
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      next(new AppError("Something is missing", 400));
    }
    const user = await User.findOne({ email });
    if (!user) {
      next(new AppError("email or password error...", 400));
    }
    if (!user) {
      return next(new AppError("email or password error...", 400));
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      next(new AppError("email or password error...", 400));
    }
    const token = await signToken(user._id);
    // console.log(token);

    const userWithNotPassword = {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token,
    };
    res.status(201).json({
      user: userWithNotPassword,
    });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      next(new AppError(error.message, 500));
    }
    next(new AppError("An unknown error occurred", 500));
  }
};
