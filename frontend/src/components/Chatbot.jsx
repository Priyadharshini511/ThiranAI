// import { useEffect } from 'react';

// const Chatbot = () => {
//   useEffect(() => {
//     // Create script element
//     const script = document.createElement('script');
//     script.src = 'https://www.chatbase.co/embed.min.js';
//     script.defer = true;
    
//     // Set chatbot configuration
//     script.onload = () => {
//       window.chatbaseConfig = {
//         chatbotId: 'NZepS2dbVKTHUJZKNdPfU',
//       };
//     };

//     // Append script to body
//     document.body.appendChild(script);

//     // Clean up function to remove the script when component unmounts
//     return () => {
//       const existingScript = document.querySelector('script[src*="chatbase.co"]');
//       if (existingScript) {
//         document.body.removeChild(existingScript);
//       }
//       // Remove the chat widget if it exists
//       const chatWidget = document.querySelector('#chatbase-widget');
//       if (chatWidget) {
//         chatWidget.remove();
//       }
//     };
//   }, []);

//   return null; // This component doesn't render anything visible
// };

// export default Chatbot;

//Chatbot.jsx
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.defer = true;

    script.onload = () => {
      window.chatbaseConfig = {
        chatbotId: 'NZepS2dbVKTHUJZKNdPfU',
      };
    };

    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src*="chatbase.co"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }

      const chatWidget = document.querySelector('#chatbase-widget');
      if (chatWidget) {
        chatWidget.remove();
      }
    };
  }, []);

  return (
    <div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-96 h-[600px] bg-white rounded-2xl shadow-xl overflow-hidden relative"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 z-50 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            {/* This is where Chatbase widget renders */}
            <div id="chatbase-widget" className="w-full h-full" />
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          💬
        </motion.button>
      )}
    </div>
  );
};

export default Chatbot;
