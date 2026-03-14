# 🌐 QuickStay – Full Stack Hotel Booking Platform

![QuickStay Banner](./assets/quickstay-banner.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20-green?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0-green?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express.js-4.18.2-black?logo=express&logoColor=white)](https://expressjs.com/)
[![Stripe](https://img.shields.io/badge/Stripe-Payment-blue?logo=stripe&logoColor=white)](https://stripe.com/)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://quickstay-dun-xi.vercel.app/)

QuickStay is a production-ready full-stack hotel booking system that enables users to explore rooms, check real-time availability, complete bookings with **Stripe**, and manage reservations.

Admins/Owners can add hotels, manage rooms, track bookings, view revenue analytics, and monitor customer activity.

This project is ideal for:  
- Portfolio demonstration  
- Real-world MERN application learning  
- Authentication + Payments + Cloud Storage example  
- Scalable project structure reference  

---

## 📌 Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [System Architecture](#system-architecture)
5. [Screenshots](#screenshots)
6. [Environment Variables](#environment-variables)
7. [Folder Structure](#folder-structure)
8. [API Endpoints](#api-endpoints)
9. [Payment Integration Details](#payment-integration-details)
10. [Installation & Setup](#installation--setup)
11. [Dashboard Overview](#dashboard-overview)
12. [Future Enhancements / Roadmap](#future-enhancements--roadmap)
13. [Contributing](#contributing)
14. [Troubleshooting](#troubleshooting)
15. [Author & Contact](#author--contact)

---

## Project Overview
QuickStay is a full-stack hotel booking web application built with the **MERN stack**, simulating real-world booking platforms with secure payments, role-based dashboards, and scalable architecture.

---

## 🚀 Features

### 🧑‍💼 User Features
- 🔐 User Authentication (Clerk)
- 🏨 Browse, search & filter hotels
- 🎯 Advanced filters: price, category, AC/Non-AC, capacity, availability
- 📅 Real-time room availability check
- 🛏️ Instant booking system
- 💳 Stripe payment integration
- 📜 Booking history with statuses & details
- 📧 Email confirmation on successful booking
- 🖼 Cloudinary-based image delivery
- 🚫 Auto-hide deleted rooms from booking history

### 🏨 Owner/Admin Features
- 🏢 Register hotels & manage listings
- 🏘 Add, edit & delete rooms
- 📊 Analytics Dashboard (total revenue & bookings)
- 👤 View all customer bookings
- 📤 Cloudinary image uploads
- ⚠️ Auto-hide deleted rooms app-wide

---

## 🧰 Tech Stack

**Frontend**  
- React.js  
- Tailwind CSS  
- AppContext (Global State Management)  
- Axios  
- React Router  
- Clerk Authentication  

**Backend**  
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- Stripe Payments  
- Cloudinary (image storage)  
- Multer (uploads)  
- Nodemailer (emails)  
- CORS  

---

React (Frontend)
↓ Axios
Express API (Backend)
↓
MongoDB (Data Layer)
↓
Stripe (Payment Gateway)
Cloudinary (Image Storage)
Clerk (Authentication)

## 🏗️ System Architecture



---

## 📸 Screenshots

> Replace these with your actual screenshots or GIFs.

**Homepage**  
![Homepage](./screenshots/homepage.png)  

**Room Details**  
![Room Details](./screenshots/room-details.png)  

**Booking Page**  
![Booking Page](./screenshots/booking-page.png)  

**Stripe Checkout**  
![Stripe Checkout](./screenshots/stripe-checkout.png)  

**Dashboard**  
![Dashboard](./screenshots/dashboard.png)  

**Live Demo:** [Frontend](https://quickstay-9vry2d89v-anshus-projects-29e0aad8.vercel.app/) | [Backend API](https://hotel-booking-backend-dun-rho.vercel.app/)

---

## 🔑 Environment Variables

### Frontend (.env)

VITE_CLERK_PUBLISHABLE_KEY=
VITE_BACKEND_URL=
VITE_CURRENCY=$

### Backend (.env)

Clerk keys

CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SECRET=

Cloudinary

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

NodeMailer SMTP - Brevo

SENDER_EMAIL=''
SMTP_USER=''
SMTP_PASS=''

Stripe

STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=


---

## 📦 Folder Structure
QuickStay/
│
├── client/ # React Frontend
│ ├── src/
│ │ ├── components/
│ │ ├── context/
│ │ │ └── AppContext.jsx
│ │ ├── pages/
│ │ ├── utils/
│ │ └── App.jsx
│
└── server/ # Node.js Backend
├── configs/ # DB, Cloudinary, etc.
├── controllers/
├── models/
├── routes/
├── middleware/
└── server.js


---

## 🧪 API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | /api/auth/verify | Verify user token |

### Rooms
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | /api/rooms | Get all rooms |
| POST | /api/rooms/add | Add new room |
| DELETE | /api/rooms/:id | Delete room |

### Bookings
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | /api/bookings/create | Create booking |
| GET | /api/bookings/:userId | Get user bookings |

### Payments (Stripe)
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | /api/payments/checkout | Create Stripe Checkout Session |

---

## 💳 Payment Integration Details
Currently Supported:  
✔️ Stripe Checkout (fully implemented)  
✔️ Handles payment success, failure, and post-payment booking updates

---

## 🛠️ Installation & Setup

**Frontend**

cd client
npm install
npm run dev

Backend

cd server
npm install
npm run server
📊 Dashboard Overview
Metric	Description
Total Bookings	Count of all bookings
Total Revenue	Sum of all paid bookings
Recent Bookings	Latest 10 bookings
Room Management	Add/Edit rooms
Photo Management	Cloudinary upload

Updates automatically after bookings & payments.

🚀 Future Enhancements / Roadmap

Backend
Razorpay integration
JWT refresh tokens
Admin/Owner roles
Frontend
Wishlist / Favorites
PWA support
Infinite scroll
Dashboard
Revenue chart
Hotel comparison
Occupancy analytics

🐛 Troubleshooting

Images not uploading: Check Cloudinary keys

Stripe checkout failing: Ensure webhook secret is correct

Dashboard showing 0 values: Check if isPaid is updated properly


---

This version includes:  
✅ Banner image placeholder  
✅ Badges for tech stack, license, live demo  
✅ Table of contents  
✅ Screenshots placeholders  
✅ API table formatting  
✅ Payment integration section  
✅ Installation instructions and troubleshooting  

---
