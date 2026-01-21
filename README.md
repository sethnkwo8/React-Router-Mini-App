# 🧭 React Router Dashboard App (Data Router Edition)

This project is a protected dashboard application built with React Router v6.4+ (Data APIs) to practice real-world routing, data loading, authentication flows, and layout composition.

It demonstrates how modern React applications:
- Load data before rendering
- Handle authentication at the routing layer
- Stream data with Suspense and Await
- Organize layouts and pages without prop drilling

---

## 🔧 Technologies Used
- React
- React Router DOM (v6+)
- Vite
- JavaScript (ES6+)
- Tailwind CSS

---

## 🧠 Concepts Covered

# Routing
- Data router setup with createBrowserRouter
- Nested routes & layout routes
- Index routes
- Dynamic URL params
- Programmatic navigation
- 404 handling with route-level error boundaries

# Data Loading (React Router Data APIs)
- Route loaders for pre-fetching data
- Deferred data loading using:
- Suspense
- `<Await />`
- Simulated async API calls
- Loader-based error handling

# Authentication Flow
- Global auth state using Context + Reducer
- Authentication redirects inside loader
- Login flow with redirect
- Logout resets auth state
- UI updates automatically based on auth state

This project intentionally avoids hook-based protection (ProtectedRoute) in favor of loader-level auth enforcement, which mirrors how modern frameworks like Next.js handle auth.

# Error Handling
- Route-level error boundaries
- Loader errors handled per route
- Graceful fallback UI for loading and error states

# Architecture
- Pages vs Components vs Layouts separation
- Reusable dashboard layout with `<Outlet />`
- Feature-based folder structure
- Centralized routing configuration
- No prop drilling

---

# 📁 Project Structure
```
react-router-app
│
│── auth/
│   └── auth.js
│
│── components/
│   └── Navbar.jsx
│   └── Sidebar.jsx
│   └── LoginForm.jsx
│   └── LogoutButton.jsx
│   └── StatCard.jsx
│
│── contexts/
│   └── AuthContext.jsx
│   └── AuthProvider.jsx
│
│── data/
│   └── users.js
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
│── loaders/
│   └── authLoader.js
│   └── usersLoader.js
│   └── userDetailsLoader.js
│
│── reducer/
│   └── authReducer.js
│
│── utils/
│   └── fakeAPI.js
│
│── router.jsx
│── main.jsx
```

---

## 🔐 Authentication Logic
- Authentication is checked inside route loaders
- Unauthenticated users are redirected to /login before the page renders
- Auth state is shared via context for UI concerns
- Loaders remain framework-friendly and hook-free

---

## 🚀 Purpose
This project was built to:
- Master React Router Data APIs
- Understand loader-based auth and redirects
- Practice deferred data and streaming UI
- Learn error boundaries and routing architecture
- Prepare for TypeScript, Next.js routing, full-stack apps, and enterprise React architectures


---

## 👤 Author
**Seth Nkwo**
