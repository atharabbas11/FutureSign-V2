# FutureSign - Premium Printing Solutions

![FutureSign Logo](https://futuresign.in/logo.png)

## 🚀 About The Project

FutureSign is a premium printing solutions website built with modern web technologies. It provides a seamless experience for clients to explore printing services, view portfolios, and get quotes.

### ✨ Features

- **Modern UI/UX** - Clean, responsive design with smooth animations
- **Service Showcase** - Display of premium printing services
- **Project Gallery** - Portfolio of completed projects
- **Contact Form** - Secure contact form with anti-spam protection
- **Admin Dashboard** - Manage contact submissions (coming soon)

### 🛠️ Tech Stack

**Frontend:**
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Lucide React Icons

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- Helmet (Security)
- Express Rate Limit

**Deployment:**
- Vercel (Frontend)
- Render/Railway (Backend)
- MongoDB Atlas (Database)

## 📦 Installation

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- MongoDB Atlas account (or local MongoDB)

### Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Update .env with your values
# PORT=5000
# MONGODB_URI=your_mongodb_connection_string
# CLIENT_URL=http://localhost:5173

# Start development server
npm run dev