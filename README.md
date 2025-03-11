# 🏦 Banking Account Management System

## 🔎 **Project Overview**
The Banking Account Management System is an application that allows users to create bank accounts, perform financial transactions such as deposits, withdrawals, and transfers, and track their balances.

## 🛠️ **Technologies Used**
- **Backend:** Node.js (Express.js)
- **Database:** MongoDB
- **Authentication:** JWT,
<!-- - **Message Queue:** Kafka
- **Caching:** Redis
- **Real-time Updates:** WebSockets
- **Payment Integration:** Stripe, PayPal -->

## 📝 **Key Features**
✅ Create bank accounts with a unique account number.
✅ Perform **deposits, withdrawals, and transfers** between accounts.
✅ Secure transactions using **JWT**.

---
### 2️⃣ **Install Dependencies**
```sh
npm install
```

### 3️⃣ **Set Up Environment Variables**
Create a `.env` file and add the following:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/banking_system
JWT_SECRET=your_jwt_secret
```

### 4️⃣ **Run the Application**
```sh
npm start
```
Or run with nodemon:
```sh
npm run dev
```

---

## 📚 **Database Schema**
### 💳 **Accounts Collection (Account)**
| Field         | Type                 | Description                     |
|--------------|----------------------|---------------------------------|
| `_id`        | ObjectId             | Unique account identifier       |
| `user`       | ObjectId (Ref: User)  | Reference to the account owner  |
| `accountNumber` | String (Unique)    | Unique bank account number      |
| `balance`    | Number               | Current account balance         |
| `currency`   | String               | Currency (USD, EUR, etc.)       |
| `createdAt`  | Date                 | Account creation date           |

### 💳 **Users Collection (User)**
| Field      | Type     | Description            |
|-----------|---------|------------------------|
| `_id`     | ObjectId | Unique user identifier |
| `name`    | String  | User's name            |
| `email`   | String  | Email address          |
| `password` | String | Encrypted password     |

### 💰 **Transactions Collection (Transaction)**
| Field       | Type                  | Description                            |
|------------|----------------------|----------------------------------------|
| `_id`      | ObjectId             | Unique transaction identifier         |
| `sender`   | ObjectId (Ref: Account) | Sender's account                     |
| `receiver` | ObjectId (Ref: Account) | Receiver's account                   |
| `amount`   | Number               | Transaction amount                    |
| `type`     | String               | Transaction type (Deposit, Withdraw, Transfer) |
| `status`   | String               | Transaction status (Completed, Pending) |
| `createdAt`| Date                 | Transaction date                      |

---

## 🛠 **API Endpoints**
### ✅ **Create a New Account**
**Endpoint:** `POST /api/accounts/create`
```json
{
    "userId": "65fabc1234567890abcd1234",
    "currency": "USD"
}
```
**Response:**
```json
{
    "message": "Account created successfully",
    "account": {
        "_id": "65fabc9876543210abcd5678",
        "accountNumber": "1234567890",
        "balance": 0,
        "currency": "USD",
        "createdAt": "2025-03-10T12:00:00.000Z"
    }
}
```

### ✅ **Perform a Transaction (Transfer Money)**
**Endpoint:** `POST /api/transactions/transfer`
```json
{
    "senderId": "65fabcd1111111111abcd2222",
    "receiverId": "65fabcd3333333333abcd4444",
    "amount": 500
}
```
**Response:**
```json
{
    "message": "Transfer successful",
    "transaction": {
        "_id": "65ftrans9876543210abcd1234",
        "amount": 500,
        "type": "transfer",
        "status": "completed",
        "createdAt": "2025-03-10T12:00:00.000Z"
    }