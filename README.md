### Employee Mangement System 


- using useState
- creating employee dashboard
- creating admin dashboard
- context API
- creating auth context
- creating task context
- creating data using ChatGPT
- storing data in local storage
- setting up employee and admin page after login
- separating user data and admin data
- setting up who is logged in localStorage
- creating logout feature and more
- passing data in tasks
- creating tasks
- setting up data in local storage


# 🚀 Employee Management System

A full-featured **Employee Management System** built with **ReactJS**, using **Context API** and **LocalStorage** — no backend required!  
Designed for Admin and Employee roles with separate dashboards, task management, and role-based authentication simulation.

---

## ✨ Features

- 🔐 **Authentication Simulation**  
  Admin and Employee login flow handled through Context API and LocalStorage.
  
- 🧠 **Context API**  
  - `AuthContext`: Manages authentication states (login, logout, current user role).
  - `TaskContext`: Manages task creation, assignment, and storage.

- 💾 **LocalStorage Persistence**  
  All data — including users, tasks, and auth session — are saved and loaded from the browser's local storage.

- 🖥️ **Separate Dashboards**  
  - **Admin Dashboard**: Manage employees and tasks.
  - **Employee Dashboard**: View and complete assigned tasks.

- ✍️ **Task Management**  
  - Admins can create, assign, and delete tasks.
  - Employees can view their assigned tasks.

- 🔄 **Dynamic Login/Logout**  
  Authenticated session stored persistently until logout.

---

## 🛠️ Tech Stack

- **ReactJS**
- **Context API**
- **JavaScript (ES6+)**
- **HTML5 / CSS3**
- **LocalStorage (for data persistence)**

---

## 🛠️ Getting Started


# Clone the repository
git clone https://github.com/aryanneupane/employee-management-system.git



## 📂 Folder Structure

```bash
employee-management-system/
│
├── public/
├── src/
│   ├── components/
│   │   ├── AdminDashboard.jsx
│   │   ├── EmployeeDashboard.jsx
│   │   ├── LoginForm.jsx
│   │   └── TaskManager.jsx
│   ├── contexts/
│   │   ├── AuthContext.jsx
│   │   └── TaskContext.jsx
│   ├── App.jsx
│   ├── index.js
│
├── package.json
└── README.md
```

---

## 🧠 Lessons Learned

- Managing complex application state using **Context API** instead of Redux.
- Simulating a full app without a backend using **LocalStorage**.
- Handling **multi-role authentication**.
- Building reusable and scalable components.



Built by **Aryan Neupane**  
As part of a **6-month journey** to become a **full-time cross-platform app developer** 🚀  
Learning, practicing, and building every single day!

