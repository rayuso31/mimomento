import React from 'react';
import { Zap, Heart, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, price, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        whileHover={{ y: -5 }}
        className="bg-secondary p-10 rounded-sm text-center border-t-4 border-primary shadow-sm hover:shadow-xl transition-all group"
    >
        <div className="inline-flex p-5 rounded-full bg-white text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
            <Icon size={32} strokeWidth={1.5} />
        </div>
        <h3 className="mb-4 font-heading font-bold text-2xl text-accent">{title}</h3>
        <p className="text-text-light mb-6 text-sm leading-relaxed">
            {description}
        </p>
        <div className="text-sm font-bold tracking-widest text-primary uppercase border-t border-gray-200 pt-4 inline-block px-4">
            {price}
        </div>
    </motion.div>
);

const Services = () => {
    const services = [
        {
            icon: Zap,
            title: "Depilación Láser Soprano",
            description: "La tecnología más eficaz del mercado. Elimina el vello de forma definitiva, rápida y compatible con pieles bronceadas.",
            price: "Desde 25€ / sesión"
        },
        {
            icon: Activity,
            title: "Tratamientos Corporales",
            description: "Remodelación corporal, cavitación y radiofrecuencia para combatir la celulitis y la flacidez.",
            price: "Consultar bonos"
        },
        {
            icon: Heart,
            title: "Masajes y Bienestar",
            description: "Quiromasaje, reflexología podal y drenaje linfático. Salud y relajación en manos expertas.",
            price: "Desde 30€"
        }
    ];

    return (
        <section id="tratamientos" className="section-padding bg-white">
            <div className="container">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-bold tracking-widest uppercase text-sm"
                    >
                        Nuestra Especialidad
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-3 mb-6 font-heading text-4xl md:text-5xl text-accent font-light"
                    >
                        Tecnología y Resultados
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="h-1 w-24 bg-primary mx-auto"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} index={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
