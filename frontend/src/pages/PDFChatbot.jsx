//PDFChatbot.jsx
import { useState, useRef, useEffect } from 'react';
import { Send, Upload, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PDFChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! Upload a PDF and ask me questions about it.", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      alert('Please upload a valid PDF file');
      return;
    }

    setIsLoading(true);
    setMessages(prev => [...prev, { text: `Processing ${file.name}...`, sender: 'bot' }]);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('http://localhost:8000/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload PDF');
      }

      const data = await response.json();
      setUploadedFile(file);
      setMessages(prev => [
        ...prev,
        { text: `Document "${file.name}" processed successfully! You can now ask questions about it.`, sender: 'bot' }
      ]);
    } catch (error) {
      console.error('Error uploading file:', error);
      setMessages(prev => [
        ...prev,
        { text: `Error: ${error.message || 'Failed to process PDF'}. Please try again.`, sender: 'bot' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || !uploadedFile) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: input })
      });

      if (!response.ok) {
        throw new Error('Failed to get answer');
      }

      const data = await response.json();

      let botResponse = {
        text: data.answer,
        sender: 'bot',
        sources: data.sources || []
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { text: 'Error getting response. Please try again.', sender: 'bot' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // <div className="fixed bottom-6 right-6 z-50">
    <div>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-96 bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
            style={{ height: '600px' }}
          >
            <div className="bg-indigo-600 text-white p-4 flex justify-between items-center">
              <h3 className="font-semibold text-lg">PDF Assistant</h3>
              <button onClick={() => setIsOpen(false)} className="p-1 rounded-full hover:bg-indigo-700">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] rounded-2xl p-3 ${
                      msg.sender === 'user'
                        ? 'bg-indigo-600 text-white rounded-br-none'
                        : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                    }`}>
                      <p>{msg.text}</p>
                      {msg.sources && msg.sources.length > 0 && (
                        <div className="mt-2 text-xs text-gray-500">
                          <p className="font-medium">Sources:</p>
                          <ul className="mt-1 space-y-1">
                            {msg.sources.map((source, idx) => (
                              <li key={idx} className="text-xs text-gray-600 truncate" title={source.content}>
                                {source.content.substring(0, 100)}{source.content.length > 100 ? '...' : ''}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white rounded-2xl p-3 border border-gray-200 rounded-bl-none">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className="p-4 border-t border-gray-200">
              {!uploadedFile ? (
                <div className="text-center">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf"
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <Upload />
                    <span>Upload PDF</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex space-x-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask something about the PDF..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
                  >
                    <Send />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 bg-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PDFChatbot;
