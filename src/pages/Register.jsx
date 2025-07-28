import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://freelance-backend-2kkn.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (res.ok) {
        alert("🎉 Registration successful! Redirecting to login...");
        navigate("/login");
      } else {
        alert("⚠️ " + (data.message || "Registration failed"));
      }
    } catch (err) {
      alert("🚫 Network error: " + err.message);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/background/20210710/original/pngtree-fancy-coffee-background-material-picture-image_1026969.jpg')",
      }}
    >
      {" "}
      <div className="bg-black/50 p-8 rounded-3xl backdrop-blur-md shadow-2xl max-w-md w-full animate-fade-in">
        {" "}
        <h2 className="text-3xl text-yellow-300 font-extrabold text-center mb-6">
           🚀 Register at FreelanceHub {" "}
        </h2>
        {" "}
        <form onSubmit={handleSubmit} className="space-y-5">
       {" "}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {" "}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={formData.email}
            onChange={handleChange}
            required
          />
         {" "}
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={formData.password}
            onChange={handleChange}
            required
          />
        {" "}
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition transform hover:scale-105"
          >
            📝 Register {" "}
          </button>
          {" "}
        </form>
        {" "}
        <p className="text-center text-sm text-white mt-4">
          Already have an account? {" "}
          <Link
            to="/login"
            className="text-yellow-300 font-semibold hover:underline"
          >
             Login here {" "}
          </Link>
          {" "}
        </p>
       {" "}
      </div>
     {" "}
    </div>
  );
}
