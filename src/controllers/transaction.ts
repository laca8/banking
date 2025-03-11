import Transaction from "../models/Transication";
import Account from "../models/Account";
import { Request, Response, NextFunction, response } from "express";
import { AppError } from "../types";
interface AuthRequest extends Request {
  user?: any;
}
//تحويل
export const transferMoney = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { senderId, receiverId, amount } = req.body;

    const accountSender = await Account.findById({ _id: senderId });
    const accountReciever = await Account.findById({ _id: receiverId });
    console.log(accountReciever, accountReciever);

    if (!accountSender || !accountReciever) {
      next(new AppError("The account not found", 404));
    }
    if (accountSender?.amount < amount) {
      next(new AppError("The balance is insufficient", 400));
    }
    if (accountSender) {
      accountSender.balance -= amount;
    }
    if (accountReciever) {
      accountReciever.balance += amount;
    }

    await accountSender.save();
    await accountReciever.save();
    const transaction = await new Transaction({
      senderId: senderId,
      receiverId: receiverId,
      amount,
      type: "transfer",
      status: "completed",
    });

    await transaction.save();
    res.status(200).json({ message: "process success...", transaction });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      next(new AppError(error.message, 500));
    }
    next(new AppError("An unknown error occurred", 500));
  }
};
//ايداع
export const depositMoney = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { accountId, amount } = req.body;
    const account = await Account.findById(accountId);
    if (!account) {
      next(new AppError("The account not found", 404));
    }
    console.log(account);

    account.balance += amount;
    const transaction = await new Transaction({
      receiverId: accountId,
      amount,
      type: "deposit",
      status: "completed",
    });
    await account.save();
    await transaction.save();
    res.status(200).json({ message: "process success...", transaction });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      next(new AppError(error.message, 500));
    }
    next(new AppError("An unknown error occurred", 500));
  }
};

//سحب
export const withDrawMoney = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { accountId, amount } = req.body;
    const account = await Account.findById(accountId);
    if (!account) {
      next(new AppError("The account not found", 404));
    }
    if (account.amount < amount) {
      next(new AppError("The balance is insufficient", 400));
    }
    account.balance -= amount;
    const transaction = await new Transaction({
      receiverId: accountId,
      amount,
      type: "withdraw",
      status: "completed",
    });
    await account.save();

    await transaction.save();
    res.status(200).json({ message: "process success...", transaction });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      next(new AppError(error.message, 500));
    }
    next(new AppError("An unknown error occurred", 500));
  }
};

//fetch all process for user
export const getProcess = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.user._id;
    const account = await Account.findOne({ userId });
    console.log(account);

    const accountId = account?._id;
    const transactions = await Transaction.aggregate([
      {
        $match: {
          $or: [{ senderId: accountId }, { receiverId: accountId }],
        },
      },
      {
        $lookup: {
          from: "accounts",
          localField: "senderId",
          foreignField: "_id",
          as: "senderDetails",
        },
      },
      {
        $lookup: {
          from: "accounts",
          localField: "receiverId",
          foreignField: "_id",
          as: "receiverDetails",
        },
      },
      {
        $project: {
          _id: 1,
          amount: 1,
          type: 1,
          status: 1,
          createdAt: 1,
          "senderDetails.accountNumber": 1,
          "receiverDetails.accountNumber": 1,
        },
      },
    ]);

    if (transactions.length === 0) {
      next(new AppError("No transactions found", 400));
    }

    res.status(200).json(transactions);
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      next(new AppError(error.message, 500));
    }
    next(new AppError("An unknown error occurred", 500));
  }
};
