import mongoose from "mongoose";
const TransactionSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "account",
      required: false,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "account",
      required: false,
    },
    amount: { type: Number, required: true },
    type: {
      type: String,
      enum: ["transfer", "deposit", "withdraw"],
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);
const Transaction = mongoose.model("transcation", TransactionSchema);
export default Transaction;
