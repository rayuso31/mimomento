import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="text-2xl md:text-3xl font-heading font-semibold tracking-wider text-text">
                    Mimomento
                </a>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-8 items-center">
                    {['Tratamientos', 'El Salón', 'Contacto'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            className="hover:text-primary transition-colors font-medium"
                        >
                            {item}
                        </a>
                    ))}
                    <button className="btn-primary">Pedir Cita</button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-text"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-full bg-white shadow-xl p-8 flex flex-col gap-6 text-center md:hidden"
                    >
                        {['Tratamientos', 'El Salón', 'Contacto'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg hover:text-primary transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                        <button className="btn-primary w-full">Pedir Cita</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
