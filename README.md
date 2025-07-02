# 💰 FinSight – Personal Finance Tracker

FinSight is a powerful and intuitive web application designed to help individuals manage their income and expenses effortlessly. Whether you're a freelancer, salaried employee, or student, FinSight gives you a comprehensive view of your finances in a clean and visually engaging way.

---

## 📸 Project Preview

### 🏠 Welcome Page

![Welcome Page](src/assets/images/logo.png)

### 📊 Dashboard Overview

![Dashboard](assets/dashboard.png)

### ➕ Add Expense / Income

![Add Form](assets/add-form.png)

---

## 🚀 Features

### 🔐 Authentication
- Secure login system using email/password
- Session storage for user persistence
- Google login (optional / under development)

### 💸 Income & Expense Management
- Categorize income (freelancing, salary, trading, etc.)
- Track expenses in over **50+ categories**
- Add, edit, delete entries

### 📈 Data Visualization
- Graphs and pie charts for:
  - Monthly income vs expenses
  - Category-wise breakdown
- Color-coded UI to distinguish data types

### 📅 Calendar-based View (Coming Soon)
- Visualize financial activity based on calendar events

### 🔍 Search & Filter
- Filter transactions by category, date, or type
- Keyword-based search

### 🌙 Dark Mode Support
- Toggle between light and dark themes

---

## 🧠 Future Prospects

- 📱 **Mobile App** using React Native
- 🏦 **Bank API Integration** (e.g., Plaid)
- 💬 **AI-powered financial insights**
- 📥 **Export Reports** to PDF/Excel
- 👨‍👩‍👧‍👦 Shared family/group budgets
- 🔔 Expense limit alerts

---

## 🛠 Tech Stack

| Tech               | Description                          |
|--------------------|--------------------------------------|
| **React**          | Frontend library                     |
| **Vite**           | Fast bundler and development server  |
| **Tailwind CSS**   | Utility-first CSS framework          |
| **React Icons**    | Icons library                        |
| **Firebase**       | Authentication & Firestore database  |
| **Framer Motion**  | Animations                           |
| **Chart.js / Recharts** | Visualizations                  |
| **Redux Toolkit**  | Global state management              |

---

## 👥 Team

| Name             | Role                      |
|------------------|---------------------------|
| **Subhro Kolay** | Full Stack Developer, Project Lead |
| **Chandrima Ray** | Frontend Developer |
| **Avik Bera**     | Backend Developer |
| **Ayan Das**      | UI/UX Design, Frontend |
| **Akash Maity**   | DevOps & Integration |
| **Bristi Danre**  | Documentation & Testing |

---

## 📁 Project Structure

```bash
FinSight/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   └── Income_components/
│   │   └── expense_comp/
│   ├── pages/
│   ├── utils/
│   ├── redux/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
└── README.md
