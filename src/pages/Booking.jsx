import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date) {
      alert("⚠️ Please select a date");
      return;
    }

    // Save booking info to localStorage
    const booking = { serviceId: id, date };
    localStorage.setItem("booking", JSON.stringify(booking));

    alert(`✅ Service ${id} booked for ${date}!`);
    navigate("/orders");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20231009/pngtree-close-up-3d-render-of-travel-insurance-booking-aircraft-model-passport-image_13566749.png')"
      }}
    >
      <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl text-yellow-400 font-bold mb-4">Book Service {id}</h1>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-white/20 text-white"
          required
        />
        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded"
        >
          Confirm Booking ✅
        </button>
      </form>
    </div>
  );
}
