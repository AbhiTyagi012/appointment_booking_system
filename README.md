# Appointment Booking System

This is a mini appointment booking system built with React (Vite) for the frontend and Node.js + Express + MongoDB for the backend. Users can view available time slots and book an appointment. Admins can view all bookings.

------------------------------------------------------------
Getting Started

Prerequisites:
- Node.js (v16+ recommended)
- MongoDB Atlas (or local MongoDB)
- Git

Backend Setup:
1. Clone the repository:
   git clone -b backend https://github.com/AbhiTyagi012/appointment_booking_system.git

2. Install dependencies:
   npm install

3. Create a .env file:
   PORT=5000
   MONGO_URI=<your_mongo_uri>

4. Run the server:
   npm run dev

Frontend Setup:
1. Clone the repository:
   git clone -b frontend https://github.com/AbhiTyagi012/appointment_booking_system.git

2. Install dependencies:
   npm install

3. Run the frontend:
   npm run dev

------------------------------------------------------------
Thinking Log

Key Decisions Made:
- Frontend Framework: Chose Vite with React for faster dev experience and better hot module reload.
- Backend: Used Express and MongoDB (via Mongoose) for easy integration with Node.js.
- Slot Display: Chose to generate slots dynamically on the frontend (7 days, 5 times/day) to keep things simple.
- Admin View: Implemented an /admin route that fetches all bookings.
- Switch Button: Gave a button to easily switch between User and Admin

Challenges Faced:
- CORS Setup: Needed to ensure CORS allowed Vercel frontend to access the backend API hosted on Render.
- Slot Booking Conflicts: Initially tried enforcing unique slots in MongoDB but decided to handle this logic later to keep the project scope small.
- Vercel Routing: Needed to handle route fallback for /admin on Vercel.

Areas to Improve:
- Role-Based Authentication: Currently, the admin route is not fully protected with JWT middleware; would implement that for production.
- Slot Management: Can show slots filled if it is booked already.
- Styling: More polished UI with Tailwind or a CSS framework would improve the look.
- Validation: Validation can be added on name and email field.
- Email Notificaiton: Can send an email upon successfull booking.

------------------------------------------------------------
Loom/Video Walkthrough

- A short 3–5 minute walkthrough explaining:
  - Folder structure
  - How the booking and admin features work
  - Areas I’d like to improve

(Include the link here if available)

Notes

- Some code was AI-assisted by ChatGPT (UI and code review).
- All code was written by me, including any AI suggestions that I modified and integrated.

------------------------------------------------------------

