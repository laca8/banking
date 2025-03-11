import express, { Request, Response, Express, NextFunction } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
// import xss from "xss-clean";
import connectDB from "./config/db";
import { globalErrorHandler } from "./middlewares/errorHandler";
import { AppError } from "./types";
import userRoute from "./routes/user";
import accountRoute from "./routes/account";
import transactionRoute from "./routes/transaction";
dotenv.config();
const app: Express = express();
app.use(express.json());
connectDB();
//routes
//protect xss
// app.use(xss());
// Basic security headers with Helmet
app.use(helmet());
app.use("/api/user", userRoute);
app.use("/api/account", accountRoute);
app.use("/api/transactions", transactionRoute);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handling middleware
app.use(globalErrorHandler);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
