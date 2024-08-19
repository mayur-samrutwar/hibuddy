import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCharacter } from '../../context/CharacterContext';

const TypingIndicator = () => (
  <div className="flex space-x-2 p-2 bg-gray-100 rounded-full inline-block">
    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
  </div>
);

export default function Chat() {
  const router = useRouter();
  const { selectedCharacter } = useCharacter();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!selectedCharacter) {
      router.push('/select');
    }
  }, [selectedCharacter]);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: 'user' }]);
      setInputMessage('');
      setIsTyping(true);
      
      setTimeout(() => {
        setIsTyping(false);
        setMessages(msgs => [...msgs, { text: `Hello! I'm ${selectedCharacter?.name}. How can I help you today?`, sender: 'ai' }]);
      }, 2000);
    }
  };

  if (!selectedCharacter) return null;

  return (
    <div className="w-screen h-screen bg-gray-50 flex flex-col">
      <div className="bg-white shadow-sm p-4 flex items-center space-x-4">
        <img src={selectedCharacter.image} className="w-12 h-12 rounded-full object-cover border-2 border-[#FF4D5F]" alt={`${selectedCharacter.name} avatar`} />
        <h2 className="font-bold text-xl text-gray-800">{selectedCharacter.name}</h2>
      </div>
      
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs p-3 rounded-lg ${
              message.sender === 'user' 
                ? 'bg-[#FF4D5F] text-white' 
                : 'bg-white border border-gray-200 text-gray-800'
            }`}>
              {message.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <TypingIndicator />
          </div>
        )}
      </div>
      
      <div className="p-4 bg-white border-t">
        <div className="flex space-x-2 max-w-screen-sm mx-auto">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF4D5F] focus:border-transparent"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button
            onClick={handleSendMessage}
            className="bg-[#FF4D5F] text-white px-6 py-3 rounded-full hover:bg-[#FF3D4F] transition-colors duration-300"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}