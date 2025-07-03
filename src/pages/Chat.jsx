import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    { from: "provider", text: "Hi! How can I assist you today? 😊" }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;
    setMessages([...messages, { from: "client", text: newMessage }]);
    setNewMessage("");

    // Optionally, simulate provider's auto-reply
    setTimeout(() => {
      setMessages(prev => [...prev, { from: "provider", text: "Thanks for your query! I'll get back shortly. 🙌" }]);
    }, 1000);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed p-10 text-white flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20230716/pngtree-portfolio-displays-and-mobile-apps-with-3d-shapes-chat-messages-and-image_3879137.jpg')",
      }}
    >
      <div className="bg-black/70 backdrop-blur-md rounded-3xl p-6 max-w-2xl w-full shadow-2xl flex flex-col h-[80vh]">
        <h1 className="text-3xl text-yellow-400 font-bold mb-4 text-center">
          💬 Chat with Service Provider
        </h1>

        <div className="flex-1 overflow-y-auto space-y-2 mb-4 p-2 bg-white/10 rounded-lg">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-2 rounded-lg max-w-[70%] ${
                msg.from === "client"
                  ? "bg-yellow-400 text-black self-end"
                  : "bg-white/20 text-white self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-3 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
