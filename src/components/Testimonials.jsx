import React from 'react';
import { Star, Quote, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ReviewCard = ({ name, text, stars = 5, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        className="bg-white p-8 rounded-sm shadow-sm border border-secondary relative flex flex-col gap-4 hover:shadow-md transition-shadow group"
    >
        <Quote className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors" size={40} />

        <div className="flex gap-1 text-primary">
            {[...Array(stars)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
            ))}
        </div>

        <p className="text-text-light italic leading-relaxed flex-1 text-sm">
            "{text}"
        </p>

        <div className="flex items-center gap-3 mt-2">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-heading font-bold text-primary border border-primary/20 uppercase">
                {name.charAt(0)}
            </div>
            <div>
                <p className="font-medium text-sm text-accent">{name}</p>
                <p className="text-xs text-gray-400">Cliente verificada</p>
            </div>
        </div>
    </motion.div>
);

const Testimonials = () => {
    // Placeholder text inspired by typical positive laser reviews
    const reviews = [
        {
            name: "Esther R.",
            text: "Llevo varias sesiones de láser y estoy encantada. La máquina no duele nada y las chicas son súper profesionales. 100% recomendable.",
            delay: 0
        },
        {
            name: "María José L.",
            text: "El trato es inmejorable y los resultados se notan desde la primera sesión. El centro está muy limpio y son muy puntuales.",
            delay: 0.2
        },
        {
            name: "Carmen G.",
            text: "Me hice un tratamiento facial y salí como nueva. Muy buena relación calidad-precio y un ambiente muy relajante.",
            delay: 0.4
        }
    ];

    return (
        <section id="opiniones" className="py-24 bg-secondary/30 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4 font-heading text-3xl md:text-4xl text-accent"
                    >
                        Nuestras Clientas Opinan
                    </motion.h2>

                    <motion.a
                        href="https://www.google.com/search?rlz=1C5CHFA_enES981ES981&q=ESTETIC-LASER%20Rese%C3%B1as&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNLQ0NzIxsTADMixMLEzMTY0MNzAyvmIUcw0OcQ3xdNb1cQx2DVIISi1OPbwxsXgRKw4JAHKcn3RNAAAA&rldimm=11972448611984847521&tbm=lcl&hl=es&sa=X&ved=0CB8Q9fQKKABqFwoTCMD9lOrgsJEDFQAAAAAdAAAAABAG&biw=1440&bih=778&dpr=2#lkt=LocalPoiReviews"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-6 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all text-sm group"
                    >
                        <span className="font-bold text-accent">4.8</span>
                        <div className="flex gap-1 text-primary">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} fill="currentColor" />
                            ))}
                        </div>
                        <span className="text-gray-500 hover:text-primary transition-colors flex items-center gap-1">
                            Ver reseñas en Google <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </span>
                    </motion.a>
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
