# 🚀 Career Guide

An AI-powered career guidance platform built with the **MERN Stack** that helps users discover suitable career paths, analyze resumes, prepare for interviews, and find jobs based on their skills. Powered by **Google Gemini AI**, the platform provides personalized career recommendations, learning roadmaps, resume analysis, and interview preparation to help users achieve their career goals.

🌐 **Live Demo:** https://career-guide-five-pi.vercel.app/

---

## ✨ Features

- 🤖 **AI Career Guidance** – Get personalized career recommendations based on your interests, skills, and goals.
- 🛣️ **AI Resume Analyzer** – Upload your resume to receive ATS compatibility scores, AI feedback, and actionable improvement suggestions.
- 🎤 **Interview Preparation** – Practice HR and technical interview questions with AI-generated answers, explanations, and feedback.
- 💼 **Skill-Based Job Matcher** – Discover job opportunities tailored to your skills, experience, and career preferences.
- 🔐 **OAuth Authentication** – Secure user authentication using OAuth providers.
- 💳 **Razorpay Integration** – Secure payments for premium features.
- 📱 **Responsive Design** – Fully optimized for desktop, tablet, and mobile devices.
- ⚡ **High Performance** – Built with modern technologies for speed, scalability, and reliability.

---

# 🛠️ Tech Stack

## Frontend

- React
- TypeScript
- Tailwind CSS
- React Router
- Axios

## Backend

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose

## Authentication

- OAuth
- JWT

## AI

- Google Gemini API

## Payment Gateway

- Razorpay

## Deployment

- **Frontend:** Vercel
- **Backend:** Render

---

# 📂 Folder Structure

```text
Career-Guide/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── types/
│   │   └── server.ts
│   │
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   ├── package.json
│   └── tsconfig.json
│
├── README.md
└── .gitignore
```

---

# ⚙️ Getting Started

## Prerequisites

Make sure you have installed:

- Node.js (v18 or later)
- npm or yarn
- MongoDB

---

## Clone the Repository

```bash
git clone https://github.com/your-username/career-guide.git
```

```bash
cd career-guide
```

---

## Install Dependencies

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd frontend
npm install
```

---

# 🔑 Environment Variables

## Backend (.env)

```env
PORT=5000

MONGODB_URI=

JWT_SECRET=

GEMINI_API_KEY=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=

FRONTEND_URL=http://localhost:5173
```

---


# ▶️ Running the Application

## Start Backend

```bash
cd backend
npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

## Start Frontend

```bash
cd frontend
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 🚀 Production Build

## Backend

```bash
npm run build
npm start
```

## Frontend

```bash
npm run build
```

---

# 🌍 Deployment

### Frontend

- Vercel

### Backend

- Render

---

# 🎯 Future Enhancements

- AI Career Mentor Chatbot
- Resume Builder
- Mock Video Interviews
- Coding Assessment Platform
- Company-wise Interview Questions
- Job Application Tracker
- Saved Career Roadmaps
- Admin Dashboard
- Email Notifications
- Dark Mode
- Multi-language Support

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

3. Commit your changes

```bash
git commit -m "Add your feature"
```

4. Push to GitHub

```bash
git push origin feature/your-feature
```

5. Open a Pull Request

---



# 👨‍💻 Author

**Your Name**

GitHub: https://github.com/stranger-pro

---

## ⭐ Support

If you found this project useful, please consider giving it a **⭐ Star** on GitHub. It helps others discover the project and motivates future development.
