🌟 Freelance Marketplace — Frontend
This is the ReactJS frontend for the Freelance Marketplace web application.
It provides a modern, responsive UI for clients and freelancers to interact, book services, and manage their activities.

🚀 Features
✅ User Registration & Login (JWT token saved in localStorage)
✅ View list of freelance services
✅ Detailed service page (with responsibilities, skills, and portfolio submission form)
✅ Book a service by selecting a date
✅ Chat interface with the service provider
✅ Orders dashboard (shows client’s bookings)
✅ Stylish UI with Tailwind CSS and smooth animations
✅ PageNotFound for invalid routes

🗂 Folder Structure
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Services.jsx
│   │   ├── ServiceDetail.jsx
│   │   ├── Booking.jsx
│   │   ├── OrdersDashboard.jsx
│   │   ├── Chat.jsx
│   │   └── PageNotFound.jsx
│   ├── App.js
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
⚙️ Installation
1️⃣ Install dependencies
npm install
2️⃣ Start frontend server
npm run dev
Frontend will run at http://localhost:5173 (default Vite port).

🌐 Main Pages
| Page                  | Path            | Description                          |
| --------------------- | --------------- | ------------------------------------ |
| 🏠 **Home**           | `/`             | Welcome landing page                 |
| 🔑 **Login**          | `/login`        | User login form                      |
| 📝 **Register**       | `/register`     | User registration form               |
| 💼 **Services**       | `/services`     | Browse all freelance services        |
| 📄 **Service Detail** | `/services/:id` | View service info + submit portfolio |
| 📅 **Booking**        | `/booking/:id`  | Select date and confirm booking      |
| 📋 **Orders**         | `/orders`       | View list of bookings                |
| 💬 **Chat**           | `/chat`         | Chat with service provider           |
| ❌ **404**             | `*`             | Page not found fallback              |

🌟 Technologies
React

React Router DOM

Tailwind CSS

Vite (for fast builds)

localStorage (to store token + temporary booking data)

