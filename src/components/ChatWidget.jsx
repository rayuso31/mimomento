import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: '¡Hola! Soy el asistente virtual de Mimomento. ¿En qué puedo ayudarte hoy?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = inputValue;
        setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await fetch('https://primary-xdh7-production.up.railway.app/webhook/a427fa50-dda7-4de3-b921-6c3a16c024d4', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chatInput: userMessage,
                    sessionId: 'mimomento-web-' + Date.now()
                }),
            });

            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();
            const botResponse = data.output || data.text || JSON.stringify(data);

            setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages(prev => [...prev, { type: 'bot', text: 'Lo siento, ha ocurrido un error. Por favor, inténtalo de nuevo.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-28 right-8 z-50 flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white rounded-2xl shadow-2xl w-[350px] max-h-[500px] flex flex-col overflow-hidden border border-primary/20"
                    >
                        {/* Header */}
                        <div className="bg-primary p-4 flex items-center justify-between text-white">
                            <div className="flex items-center gap-3">
                                <div className="bg-white/20 p-2 rounded-full">
                                    <Bot size={20} />
                                </div>
                                <div>
                                    <h3 className="font-heading font-semibold">Asistente Estética Láser</h3>
                                    <p className="text-xs text-white/80">En línea</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary/30 min-h-[300px]">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.type === 'user'
                                            ? 'bg-primary text-white rounded-br-none'
                                            : 'bg-white text-text border border-gray-100 shadow-sm rounded-bl-none'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100">
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></span>
                                            <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-75"></span>
                                            <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-150"></span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-100">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Escribe tu mensaje..."
                                    className="flex-1 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 text-sm"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim() || isLoading}
                                    className="p-2 bg-primary text-white rounded-full hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            {!isOpen && (
                <motion.button
                    onClick={() => setIsOpen(true)}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group"
                >
                    <MessageSquare size={26} />
                </motion.button>
            )}
        </div>
    );
};

export default ChatWidget;
