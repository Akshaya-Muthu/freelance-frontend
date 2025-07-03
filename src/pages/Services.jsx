import { Link } from "react-router-dom";

const services = [
  { id: 1, title: "Logo Design", price: 1000, img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png" },
  { id: 2, title: "Web Development", price: 5000, img: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png" },
  { id: 3, title: "SEO Optimization", price: 3000, img: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png" },
  { id: 4, title: "Mobile App UI", price: 4000, img: "https://cdn-icons-png.flaticon.com/512/747/747376.png" },
  { id: 5, title: "Social Media Marketing", price: 2500, img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png" },
  { id: 6, title: "Content Writing", price: 1500, img: "https://cdn-icons-png.flaticon.com/512/2515/2515180.png" },
  { id: 7, title: "Video Editing", price: 3500, img: "https://cdn-icons-png.flaticon.com/512/727/727245.png" },
  { id: 8, title: "Data Entry", price: 1200, img: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png" },
  { id: 9, title: "Translation Service", price: 2000, img: "https://cdn-icons-png.flaticon.com/512/1077/1077063.png" },
];

export default function Services() {
  return (
    <div
      className="p-10 min-h-screen bg-cover bg-center bg-fixed text-white"
      style={{
        backgroundImage:
          "url('https://images.saymedia-content.com/.image/t_share/MTkxNDUyMjQ4NTExODgyODUw/the-cons-of-freelancing.jpg')",
      }}
    >
      <h1 className="text-4xl font-bold text-yellow-400 text-center mb-8 drop-shadow-lg">Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div
            key={s.id}
            className="bg-black/50 backdrop-blur-md rounded-2xl p-5 shadow-xl hover:scale-105 transition transform duration-300"
          >
            <img src={s.img} alt={s.title} className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-yellow-300 mb-2 text-center">{s.title}</h2>
            <p className="text-center mb-3">₹{s.price}</p>
            <div className="flex justify-center">
              <Link
                to={`/services/${s.id}`}
                className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-lg hover:bg-yellow-500"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
