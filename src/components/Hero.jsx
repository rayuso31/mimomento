import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero.png'; // Will generate this later

const Hero = () => {
    return (
        <section className="h-screen flex items-center justify-center text-center relative overflow-hidden bg-secondary">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 opacity-80">
                <img
                    src={heroImage}
                    alt="Momento de relax en Mimomento"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <div className="container relative z-10 text-white">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-sm md:text-base uppercase tracking-[0.2em] mb-4 font-medium text-primary-light"
                >
                    Tu centro de estética en La Cañada
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mb-6 font-heading text-5xl md:text-7xl drop-shadow-lg"
                >
                    Mimomento
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light italic"
                >
                    "Dedicados a cuidarte y hacerte sentir bien"
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <button className="btn-primary border border-primary hover:border-white">
                        Descubre nuestros servicios
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
