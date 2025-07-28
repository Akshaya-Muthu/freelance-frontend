import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // clear any old message
    try {
      const res = await fetch("https://freelance-backend-2kkn.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        setMessage("✅ Login successful! Redirecting...");
        setTimeout(() => navigate("/services"), 1500);
      } else {
        setMessage(`❌ ${data.message || "Invalid credentials"}`);
      }
    } catch (err) {
      setMessage("❌ Error: " + err.message);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://rare-gallery.com/mocahbig/467751-nature-landscape-mountains-water-reflection-rocks.jpg')",
      }}
    >
      <div className="bg-black/50 p-8 rounded-3xl backdrop-blur-md shadow-2xl max-w-md w-full animate-fade-in">
        <h2 className="text-3xl text-yellow-300 font-extrabold text-center mb-6">
          Login to FreelanceHub
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition transform hover:scale-105"
          >
            Login
          </button>
        </form>
        {message && (
          <p
            className={`mt-4 text-center font-semibold ${
              message.startsWith("✅") ? "text-green-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}
        <p className="text-center text-sm text-white mt-4">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-yellow-300 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
