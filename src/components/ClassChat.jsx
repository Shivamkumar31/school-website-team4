import { useState } from "react";

const ClassChat = ({ classLevel }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        { text: input, time: new Date().toLocaleTimeString() },
      ]);
      setInput("");
    }
  };

  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Class {classLevel} Chat</h2>
      <div className="border rounded p-2 h-40 overflow-y-auto bg-gray-50 mb-2">
        {messages.length === 0 && (
          <div className="text-gray-400">No messages yet.</div>
        )}
        {messages.map((msg, idx) => (
          <div key={idx} className="mb-1">
            <span className="text-gray-700">{msg.text}</span>
            <span className="text-xs text-gray-400 ml-2">{msg.time}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border rounded px-2 py-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />
        <button
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </section>
  );
};

export default ClassChat;
