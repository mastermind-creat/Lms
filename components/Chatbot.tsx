
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "Hello! Welcome to ElimuTech. How can I help you find a course today?", isBot: true }
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: inputText, isBot: false }]);
    const userQuestion = inputText.toLowerCase();
    setInputText("");

    // Simulate bot response
    setTimeout(() => {
      let response = "I'm here to help! Could you please browse our courses section for more details?";
      
      if (userQuestion.includes("price") || userQuestion.includes("cost") || userQuestion.includes("free")) {
        response = "We offer both free and premium courses. Prices range from Free to KES 14,000 depending on the complexity and duration.";
      } else if (userQuestion.includes("mpesa") || userQuestion.includes("pay")) {
        response = "Yes! We accept M-PESA payments for all our premium courses.";
      } else if (userQuestion.includes("certificate") || userQuestion.includes("cert")) {
        response = "Absolutely. You receive a verified certificate upon successful completion of any course.";
      } else if (userQuestion.includes("contact") || userQuestion.includes("support")) {
        response = "You can reach our support team at support@elimutech.ke or call +254 700 000 000.";
      }

      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-brand-600 hover:bg-brand-700'
        }`}
      >
        {isOpen ? <X color="white" size={24} /> : <MessageCircle color="white" size={24} />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-40 transition-all duration-300 origin-bottom-right ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-brand-600 p-4 flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full">
            <Bot className="text-white" size={20} />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm">ElimuTech Assistant</h3>
            <p className="text-brand-100 text-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Online
            </p>
          </div>
        </div>

        {/* Messages Area */}
        <div className="h-80 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-3">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                msg.isBot
                  ? 'bg-white text-gray-800 rounded-tl-none border border-gray-200 shadow-sm'
                  : 'bg-brand-600 text-white rounded-tr-none ml-auto'
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="flex-grow bg-gray-100 text-gray-900 text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="bg-brand-600 text-white p-2 rounded-full hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </>
  );
};

export default Chatbot;
