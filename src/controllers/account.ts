import Account from "../models/Account";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../types";
interface AuthRequest extends Request {
  user?: any;
}
const generateAccountNumber = () => {
  return Math.floor(1000000000 + Math.random() * 9000000000).toString(); // 10-digit unique number
};
export const addAcount = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { balance, currency } = req.body;
    const userId = req.user._id;
    console.log(userId);

    // Check if the user already has an account
    const existingAccount = await Account.findOne({ userId });
    if (existingAccount) {
      next(new AppError("User already has an account", 400));
    }
    const accountNumber = generateAccountNumber();
    const account = await Account.create({
      userId,
      accountNumber,
      balance,
      currency,
    });
    res.status(201).json({ message: "Account created successfully", account });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      next(new AppError(error.message, 500));
    }
    next(new AppError("An unknown error occurred", 500));
  }
};

export const getAcount = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.user._id;

    // Check if the user already has an account
    const existingAccount = await Account.findOne({ userId }).populate(
      "userId",
      "name email"
    );
    if (!existingAccount) {
      next(new AppError("Account not found", 404));
    }

    res.status(200).json(existingAccount);
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      next(new AppError(error.message, 500));
    }
    next(new AppError("An unknown error occurred", 500));
  }
};

export const getAcounts = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { search } = req.query; // Input from user
    if (!search) {
      next(new AppError("Search query is required", 400));
    }
    const accounts = await Account.aggregate([
      {
        $lookup: {
          from: "users", // Join with User collection
          localField: "userId",
          foreignField: "_id",
          as: "userDetails",
        },
      },
      {
        $unwind: "$userDetails",
      },
      {
        $match: {
          $or: [
            { accountNumber: search }, // Exact match for account number
            { "userDetails.name": { $regex: search, $options: "i" } }, // Case-insensitive search for user name
          ],
        },
      },
      {
        $project: {
          _id: 1,
          accountNumber: 1,
          balance: 1,
          currency: 1,
          createdAt: 1,
          "userDetails.name": 1,
          "userDetails.email": 1,
        },
      },
    ]);
    if (accounts.length === 0) {
      next(new AppError("Accounts not found...", 404));
    }

    res.status(200).json(accounts);
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      next(new AppError(error.message, 500));
    }
    next(new AppError("An unknown error occurred", 500));
  }
};
