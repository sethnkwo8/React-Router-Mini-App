# 🧭 React Router Dashboard App

This project is a protected dashboard application built with React Router v6+ to practice real-world routing patterns, authentication flows, and layout composition.

It demonstrates how modern React applications structure pages, layouts, and protected routes without prop drilling.

## 🔧 Technologies Used
- React
- React Router DOM (v6+)
- Vite
- JavaScript (ES6+)
- Tailwind CSS

---

## 🧠 Concepts Covered

# Routing
- Declarative routing with `<Routes>` and `<Route>`
- Nested routes
- Index routes
- Dynamic URL params (useParams)
- Programmatic navigation (useNavigate)
- 404 handling with wildcard routes

# Authentication Flow
- Global auth state using Context + Reducer
- Protected routes using `<Navigate />`
- Login redirect flow
- Logout state reset
- Conditional rendering based on auth state

# Architecture
- Pages vs Components vs Layouts separation
- Reusable layout with `<Outlet />`
- Feature-based folder structure
- Scalable routing hierarchy

---

# 📁 Project Structure
```
react-router-app/
│
│── components/
│   └── ProtectedRoute.jsx
│   └── Navbar.jsx
│   └── Sidebar.jsx
│   └── LoginForm.jsx
│   └── LogoutBytton.jsx
│
│── contexts/
│   └── AuthContext.jsx
│   └── AuthProvider.jsx
│
│── reducer/
│   └── authReducer.js
│
│── hooks/
│   └── useAuth.js
│
│── layouts/
│   └── DashboardLayout.jsx
│
│── pages/
│   └── LoginPage.jsx
│   └── DashboardPage.jsx
│   └── AnalyticsPage.jsx
│   └── UsersPage.jsx
│   └── UsersDetailsPage.jsx
│   └── SettingsPage.jsx
│   └── NotFoundPage.jsx
│
│── App.jsx
│── main.jsx
```

---

## 🔐 Authentication Logic
- Users must be authenticated to access /dashboard/*
- Unauthenticated users are redirected to /login
- Login updates global auth state
- Logout resets auth state and redirects to login

---

## 🚀 Purpose
This project was built to:
- Master React Router
- Understand real-world routing patterns
- Practice protected dashboards
- Prepare for Next.js routing, full-stack apps, and enterprise React architectures


---

## 👤 Author
**Seth Nkwo**
