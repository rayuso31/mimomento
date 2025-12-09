import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const ReviewCard = ({ name, text, stars = 5, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        className="bg-white p-8 rounded-2xl shadow-sm border border-secondary relative flex flex-col gap-4 hover:shadow-md transition-shadow"
    >
        <Quote className="absolute top-6 right-6 text-primary/20" size={40} />

        <div className="flex gap-1 text-primary">
            {[...Array(stars)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
            ))}
        </div>

        <p className="text-text-light italic leading-relaxed flex-1">
            "{text}"
        </p>

        <div className="flex items-center gap-3 mt-2">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-heading font-bold text-primary border border-primary/20">
                {name.charAt(0)}
            </div>
            <div>
                <p className="font-medium text-sm">{name}</p>
                <p className="text-xs text-[#999]">Cliente verificada</p>
            </div>
        </div>
    </motion.div>
);

const Testimonials = () => {
    const reviews = [
        {
            name: "Ana Martínez",
            text: "El mejor sitio para hacerse las uñas en La Cañada. Son super detallistas y el trato es excelente. ¡Repetiré seguro!",
            delay: 0
        },
        {
            name: "Sofía Ruiz",
            text: "Me hice un lifting de pestañas y quedó espectacular. Mis pestañas parecen mucho más largas y naturales. Muy recomendado.",
            delay: 0.2
        },
        {
            name: "Elena Gómez",
            text: "Un ambiente muy relajante y profesional. Se nota que les gusta su trabajo. Salí encantada con mi tratamiento.",
            delay: 0.4
        }
    ];

    return (
        <section id="testimonios" className="py-24 bg-secondary/30 border-t border-b border-white">
            <div className="container">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4 text-3xl"
                    >
                        Nuestras Clientas Opinan
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 text-text-light"
                    >
                        <span className="font-medium text-text">4.9</span>
                        <div className="flex gap-1 text-primary">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={18} fill="currentColor" />
                            ))}
                        </div>
                        <span className="text-sm">(en Facebook)</span>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} {...review} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
