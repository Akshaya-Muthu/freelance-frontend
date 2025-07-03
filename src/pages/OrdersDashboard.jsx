import { useEffect, useState } from "react";

export default function OrdersDashboard() {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("booking");
    if (stored) {
      setBooking(JSON.parse(stored));
    }
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed p-10 text-white flex justify-center items-center"
      style={{
        backgroundImage: "url('https://www.abrjobs.com/wp-content/uploads/2021/06/searching-for-a-new-job-picjumbo-com-scaled.jpg')"
      }}
    >
      <div className="bg-black/70 backdrop-blur-md rounded-3xl p-8 max-w-2xl shadow-2xl w-full">
        <h1 className="text-4xl text-yellow-400 font-bold mb-6 text-center">📋 Your Orders</h1>
        
        {booking ? (
          <div className="text-center space-y-2">
            <p><span className="font-semibold text-yellow-300">Service ID:</span> {booking.serviceId}</p>
            <p><span className="font-semibold text-yellow-300">Date:</span> {booking.date}</p>
          </div>
        ) : (
          <p className="text-center text-lg">🚧 No bookings yet. Please book a service!</p>
        )}
      </div>
    </div>
  );
}
