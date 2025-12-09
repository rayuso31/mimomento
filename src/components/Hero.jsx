import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero.png'; // Updated image

const Hero = () => {
    return (
        <section className="h-screen flex items-center justify-center text-center relative overflow-hidden bg-secondary">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 opacity-90">
                <img
                    src={heroImage}
                    alt="Tecnología Láser Avanzada"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
            </div>

            <div className="container relative z-10 text-text">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/80 backdrop-blur-md p-10 md:p-14 rounded-sm shadow-xl inline-block max-w-4xl"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-sm md:text-base uppercase tracking-[0.25em] mb-4 font-bold text-primary"
                    >
                        Centro Especializado
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mb-6 font-heading font-light text-5xl md:text-7xl text-accent"
                    >
                        Estética <span className="font-bold">Láser</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="text-lg md:text-xl text-text-light mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        La tecnología más avanzada para una depilación definitiva, segura y sin dolor.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="btn-primary shadow-lg hover:shadow-primary/30"
                    >
                        Reserva tu diagnóstico gratuito
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
