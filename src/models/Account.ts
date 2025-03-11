import mongoose from "mongoose";
const AccountSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    accountNumber: { type: String, unique: true },
    balance: { type: Number, default: 0 },
    currency: { type: String, default: "USD" },
  },
  {
    timestamps: true,
  }
);
const Account = mongoose.model("account", AccountSchema);
export default Account;
