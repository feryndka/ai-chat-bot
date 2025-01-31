"use client";

import MessageCard from "@/components/MessageCard";
import { getOllamaResponse } from "@/lib/ollama";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Load chat history dari localStorage saat pertama kali aplikasi dibuka
  useEffect(() => {
    const storedMessages = localStorage.getItem("chatHistory");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    } else {
      setMessages([
        {
          role: "assistant",
          content: "Hello **Fery**! How can I assist you today?",
        },
      ]);
    }
  }, []);

  // Simpan chat history ke localStorage setiap kali messages diperbarui
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("chatHistory", JSON.stringify(messages));
    }
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userInput = input;
    setInput(""); // Kosongkan input setelah dikirim

    if (userInput === "/clear") {
      setMessages([]);
      localStorage.removeItem("chatHistory"); // Hapus chat history dari localStorage
      return;
    }

    setLoading(true);
    const newMessage = { role: "user", content: userInput };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // function AI
    const response = await getOllamaResponse([newMessage]);
    const cleanedResponse = response.replace(/<\/?[^>]+(>|$)/g, "").trim();

    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "assistant", content: cleanedResponse },
    ]);

    setLoading(false);
  };

  return (
    <div className="flex flex-col h-[79vh]">
      <main className="flex-grow overflow-hidden">
        <div className="w-full mx-auto h-full flex flex-col">
          <div className="flex-grow overflow-y-auto p-4 my-4 flex flex-col">
            {messages.map((message, index) => (
              <MessageCard
                key={index}
                role={message.role}
                message={message.content}
              >
                <ReactMarkdown
                  className="prose dark:prose-invert"
                  remarkPlugins={[remarkGfm]}
                ></ReactMarkdown>
              </MessageCard>
            ))}

            {/* Animasi Loading */}
            {loading && <MessageCard role={"asisstant"} message={"...."} />}
          </div>
          <form onSubmit={handleSubmit} className="flex items-center p-4">
            <input
              placeholder="Type your message here... [/clear for delete chat]"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow mr-4 p-4 border rounded-2xl border-gray-300 text-black dark:bg-white"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading} // Disable tombol saat loading
              className="p-4 bg-blue-500 rounded-2xl text-white"
            >
              ➤
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Home;
