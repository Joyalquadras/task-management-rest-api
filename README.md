# 📝 Task Management REST API

A production-ready **RESTful API** built using **Node.js**, **Express.js**, and **MongoDB** featuring secure JWT authentication, role-based authorization, login tracking, and complete task management functionality.

---

# 🚀 Features

## 🔐 Authentication & Security

* JWT Authentication with 7-day token expiry
* Password hashing using bcryptjs
* Protected API routes
* Secure middleware-based authorization
* Environment variable configuration using dotenv

---

## 👥 User Roles & Authorization

* 👨‍💼 Admin Role
* 🧑‍💼 Manager Role
* 👤 Normal User Role

### Role Permissions

| Role    | Access                              |
| ------- | ----------------------------------- |
| Admin   | Full access to all protected routes |
| Manager | Management-level access             |
| User    | Access only to personal tasks       |

---

## 🔢 Login Count Tracking

* Tracks how many times a user logs in
* Helps understand user activity
* Stored in MongoDB user document

---

## ✅ Task Management Features

* Create Tasks
* Read Tasks
* Update Tasks
* Delete Tasks
* User-specific task isolation
* Status & Priority support

---

## 🧩 Validation & Middleware

* express-validator integration
* JWT verification middleware
* Admin-only middleware
* Role authorization middleware
* Error handling utilities

---

# 🛠️ Tech Stack

| Layer          | Technology        |
| -------------- | ----------------- |
| Runtime        | Node.js           |
| Framework      | Express.js        |
| Database       | MongoDB           |
| ODM            | Mongoose          |
| Authentication | JWT               |
| Encryption     | bcryptjs          |
| Validation     | express-validator |
| Environment    | dotenv            |

---

# 📁 Project Structure

```bash id="j9snk3"
Task Management App/
│
├── app/
│   ├── controllers/
│   │   ├── user-controller.js
│   │   └── tasks-controller.js
│   │
│   ├── middleware/
│   │   ├── authentication.js
│   │   ├── adminOnly.js
│   │   └── authorizeUser.js
│   │
│   ├── models/
│   │   ├── user.js
│   │   └── task.js
│   │
│   ├── validation/
│   │   └── user.js
│   │
│   └── helpers/
│       └── errorFormatter.js
│
├── config/
│   └── db.js
│
├── index.js
├── .env
├── package.json
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash id="fj5sok"
git clone https://github.com/Joyalquadras/task-management-rest-api.git
cd task-management-rest-api
```

---

## 2️⃣ Install Dependencies

```bash id="4o5st8"
npm install
```

---

## 3️⃣ Configure Environment Variables

Create a `.env` file in the root folder:

```env
DB_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3347
```

---

## 4️⃣ Run Server

```bash id="go0z9j"
node index.js
```

Server runs on:

```bash id="hqrx31"
http://localhost:3347
```

---

# 📡 API Endpoints

# 🔐 Authentication Routes

| Method | Endpoint              | Description      |
| ------ | --------------------- | ---------------- |
| POST   | `/api/users/register` | Register User    |
| POST   | `/api/users/login`    | Login User       |
| GET    | `/api/users/profile`  | Get User Profile |

---

# ✅ Task Routes

| Method | Endpoint         | Description    |
| ------ | ---------------- | -------------- |
| GET    | `/api/tasks`     | Get All Tasks  |
| POST   | `/api/tasks`     | Create Task    |
| GET    | `/api/tasks/:id` | Get Task By ID |
| PUT    | `/api/tasks/:id` | Update Task    |
| DELETE | `/api/tasks/:id` | Delete Task    |

---

# 🔑 Authorization Header

Protected routes require JWT token:

```bash id="0p5g2f"
Authorization: <token>
```

---

# 📦 Sample Request

## Register User

### POST `/api/users/register`

```json
{
  "email": "joyal@example.com",
  "password": "Secure@123",
  "role": "Manager"
}
```

---

## Login User

### POST `/api/users/login`

```json
{
  "email": "joyal@example.com",
  "password": "Secure@123"
}
```

---

## Create Task

### POST `/api/tasks`

```json
{
  "title": "Finish Backend Project",
  "description": "Complete authorization middleware",
  "status": "In Progress",
  "priority": "High"
}
```

---

# 🛡️ Security Middleware

## Authentication Middleware

Verifies JWT token and authenticates users.

```bash id="x9u4en"
authentication.js
```

---

## Admin Middleware

Restricts routes to admin users only.

```bash id="7lw5w4"
adminOnly.js
```

---

## Authorization Middleware

Handles role-based route access.

```bash id="g9b9vy"
authorizeUser.js
```

---

# 🧪 Testing

You can test APIs using:

* Postman
* Thunder Client
* Insomnia

---

# 🔮 Future Improvements

* Task reminders
* Due dates
* Email notifications
* Pagination
* Frontend integration with React
* Deployment on Render/Railway
* Swagger API documentation

---

# 👨‍💻 Author

## Joyal Quadras

Final Year B.Tech Student
Information Science Engineering
NMAM Institute of Technology, Nitte

---

# 🌐 Connect With Me

* GitHub: https://github.com/Joyalquadras
* LinkedIn: https://www.linkedin.com/in/joyal-quadras-499991324/

---

# 📄 License

This project is licensed under the MIT License.
