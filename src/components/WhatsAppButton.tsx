import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = '+233000000000';

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I would like to know more about His Kingdom Agenda Foundation.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <div className="fixed bottom-6 left-6 z-50">
        {isOpen && (
          <div className="mb-4 bg-white rounded-2xl shadow-2xl p-6 w-80 animate-fade-in border-2 border-green-500">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-gray-900">Need Prayer or Info?</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-700 mb-4">
              Chat with us on WhatsApp! We're here to pray with you, answer questions, and connect you with our ministry.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Chat
            </button>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
        >
          <MessageCircle className="w-7 h-7 group-hover:animate-bounce" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
            1
          </span>
        </button>
      </div>
    </>
  );
}
