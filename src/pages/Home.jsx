import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20230625/pngtree-freelancer-s-workstation-a-3d-illustration-featuring-a-camera-laptop-and-image_3681819.jpg')",
      }}
    >
      <div className="bg-black/50 p-8 rounded-2xl shadow-2xl backdrop-blur-sm text-center max-w-lg">
        <h1 className="text-4xl font-extrabold mb-4">Welcome to FreelanceHub 🚀</h1>
        <p className="mb-6 text-lg">
          Your gateway to hire top talent or land your dream freelance job.
        </p>
        <div className="flex space-x-4 justify-center">
          <Link
            to="/login"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg transition transform hover:scale-105"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-blue-400 hover:bg-blue-500 text-black font-bold py-2 px-4 rounded-lg transition transform hover:scale-105"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
