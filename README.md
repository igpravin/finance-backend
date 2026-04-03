📊 Finance Data Processing and Access Control Backend
👤 Author

Pravin Kumar
📧 parveen100ps97@gmail.com

🚀 Project Overview

This project is a backend system for a Finance Dashboard that manages financial records and user access based on roles.

It supports:

User authentication (JWT)
Role-based access control
Financial records CRUD operations
Dashboard summary (income, expense, balance)
🛠 Tech Stack
Node.js
Express.js
MongoDB (Mongoose)
JWT Authentication
📂 Features
1. User Management
Register user
Login user
Role-based access (Admin)
2. Financial Records

Each record contains:

Amount
Type (income / expense)
Category
Date

Operations:

Create record
Get all records
Update record
Delete record
3. Dashboard API

Provides summary:

Total Income
Total Expense
Net Balance
4. Access Control
Protected routes using JWT
Admin-only access for create, update, delete
5. Error Handling
401 → Unauthorized (No token)
404 → Record not found
400 → Bad request
500 → Server error
📌 API Endpoints
🔐 Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login & get token
📊 Records Routes
Method	Endpoint	Access
POST	/api/records	Admin
GET	/api/records	Authenticated
PATCH	/api/records/:id	Admin
DELETE	/api/records/:id	Admin
📈 Dashboard
Method	Endpoint
GET	/api/dashboard
🔑 Authentication

Use JWT token in headers:

Authorization: Bearer <your_token>
⚙️ Setup Instructions
1. Clone Repository
git clone <your-repo-link>
cd project-folder
2. Install Dependencies
npm install
3. Create .env file
PORT=5001
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
4. Run Server
npm start
📌 Assumptions
Only Admin role is fully implemented
Viewer/Analyst roles can be extended
Basic validation is implemented
🎯 Conclusion

This backend demonstrates:

Clean API design
Proper role-based access control
Efficient data handling
Real-world backend architecture
