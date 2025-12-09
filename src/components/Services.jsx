import React from 'react';
import { Gem, Eye, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, price, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        whileHover={{ y: -5 }}
        className="bg-secondary p-8 rounded-lg text-center hover:shadow-lg transition-all border border-transparent hover:border-primary/20"
    >
        <div className="inline-flex p-4 rounded-full bg-white text-primary mb-6 shadow-sm">
            <Icon size={24} strokeWidth={1.5} />
        </div>
        <h3 className="mb-3 font-heading text-2xl text-text">{title}</h3>
        <p className="text-text-light mb-4 text-sm leading-relaxed">
            {description}
        </p>
        <div className="text-xs font-medium tracking-widest text-primary uppercase">
            {price}
        </div>
    </motion.div>
);

const Services = () => {
    const services = [
        {
            icon: Gem,
            title: "Manicura y Pedicura",
            description: "Cuidado experto para tus manos y pies. Esmaltado tradicional y semipermanente.",
            price: "Desde 15€"
        },
        {
            icon: Eye,
            title: "Mirada",
            description: "Lifting de pestañas, tinte y diseño de cejas para realzar tu expresión natural.",
            price: "Desde 25€"
        },
        {
            icon: Sparkles,
            title: "Tratamientos Faciales",
            description: "Higiene, hidratación y tratamientos anti-edad personalizados.",
            price: "Consultar"
        }
    ];

    return (
        <section id="tratamientos" className="section-padding bg-white">
            <div className="container">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4 text-3xl md:text-4xl"
                    >
                        Nuestros Servicios
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-xl mx-auto text-text-light"
                    >
                        Momentos de belleza diseñados para ti.
                    </motion.p>
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
