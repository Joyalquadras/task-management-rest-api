# 📝 Task Management REST API

A production-ready **RESTful API** built with **Node.js**, **Express**, and **MongoDB** featuring JWT authentication, user-specific task isolation, and full CRUD operations.

---

## 🚀 Features

- 🔐 **JWT Authentication** — Secure token-based login with 7-day expiry
- 👤 **User Registration & Login** — Bcrypt password hashing with validation
- ✅ **Full Task CRUD** — Create, Read, Update, Delete tasks
- 🔒 **User-Scoped Tasks** — Each user can only access their own tasks
- 🧩 **Input Validation** — Schema-based request validation using `express-validator`
- 🌐 **CORS Enabled** — Ready for frontend integration
- 🗄️ **MongoDB with Mongoose** — Clean schema design with enums for status and priority

---

## 🛠️ Tech Stack

| Layer        | Technology               |
|--------------|--------------------------|
| Runtime      | Node.js (ES Modules)     |
| Framework    | Express.js               |
| Database     | MongoDB + Mongoose       |
| Auth         | JSON Web Tokens (JWT)    |
| Encryption   | bcryptjs                 |
| Validation   | express-validator        |
| Config       | dotenv                   |

---

## 📁 Project Structure

```
Task Management App/
├── index.js                        # App entry point & route definitions
├── config/
│   └── db.js                       # MongoDB connection setup
├── app/
│   ├── controllers/
│   │   ├── user-controller.js      # Register, Login, Profile
│   │   └── tasks-controller.js     # CRUD operations for tasks
│   ├── models/
│   │   ├── user.js                 # User schema
│   │   └── task.js                 # Task schema
│   ├── middleware/
│   │   └── authentication.js       # JWT verification middleware
│   ├── validation/
│   │   └── user.js                 # Register & Login validation schemas
│   └── helpers/
│       └── errorFormatter.js       # Error formatting utility
└── .env                            # Environment variables
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/task-management-api.git
cd task-management-api

# Install dependencies
npm install

# Create your .env file
cp .env.example .env
```

### Environment Variables

Create a `.env` file in the root directory:

```env
DB_URL=mongodb://127.0.0.1:27017/task-management
JWT_SECRET=your_strong_secret_here
```

> ⚠️ Never commit your `.env` file. It's already in `.gitignore`.

### Run the Server

```bash
node index.js
# Server runs on http://localhost:3347
```

---

## 📡 API Endpoints

### Auth Routes

| Method | Endpoint               | Description              | Auth Required |
|--------|------------------------|--------------------------|---------------|
| POST   | `/api/users/register`  | Register a new user      | ❌            |
| POST   | `/api/users/login`     | Login and receive token  | ❌            |
| GET    | `/api/users/profile`   | Get logged-in user info  | ✅            |

### Task Routes

| Method | Endpoint           | Description              | Auth Required |
|--------|--------------------|--------------------------|---------------|
| GET    | `/api/tasks`       | Get all tasks (yours)    | ✅            |
| POST   | `/api/tasks`       | Create a new task        | ✅            |
| GET    | `/api/tasks/:id`   | Get a task by ID         | ✅            |
| PUT    | `/api/tasks/:id`   | Update a task by ID      | ✅            |
| DELETE | `/api/tasks/:id`   | Delete a task by ID      | ✅            |

---

## 🔑 Authentication

All protected routes require a JWT token in the `Authorization` header:

```
Authorization: <your_token_here>
```

---

## 📦 Request & Response Examples

### Register

**POST** `/api/users/register`

```json
{
  "email": "joyal@example.com",
  "password": "Secure@123"
}
```

**Response**
```json
{
  "data": { "email": "joyal@example.com", "_id": "..." },
  "message": "User registered successfully"
}
```

---

### Login

**POST** `/api/users/login`

```json
{
  "email": "joyal@example.com",
  "password": "Secure@123"
}
```

**Response**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

### Create Task

**POST** `/api/tasks`

```json
{
  "title": "Complete project report",
  "description": "Finish the capstone project documentation",
  "status": "In Progress",
  "priority": "High"
}
```

**Task Status options:** `Pending` | `In Progress` | `Completed`

**Task Priority options:** `Low` | `Medium` | `High`

---

## 🧪 Testing with Postman

1. Register a user via `POST /api/users/register`
2. Login via `POST /api/users/login` — copy the token
3. Add the token to the `Authorization` header for all task requests
4. Test all CRUD endpoints

---

## 🔮 Future Improvements

- [ ] Add task due dates and reminders
- [ ] Pagination for task listing
- [ ] Task categories/tags
- [ ] Frontend (React) integration
- [ ] Deploy to Railway / Render

---

## 👨‍💻 Author

**Joyal** — Final Year B.Tech Student, Information Science  
NMAM Institute of Technology, Nitte (Deemed to be University)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
