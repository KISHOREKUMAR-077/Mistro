import { useState } from "react";

function Chatbot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="chat-btn"
        onClick={() => setOpen(!open)}
      >
        AI Assistant
      </button>

      {open && (
        <div className="chat-box">
          Hello! How can I help you today?
        </div>
      )}
    </>
  );
}

export default Chatbot;