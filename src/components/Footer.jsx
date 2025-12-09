import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contacto" className="bg-accent text-white pt-24 pb-12">
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">

                {/* Contact Info */}
                <div>
                    <h3 className="font-heading font-bold text-2xl mb-8 text-primary">Estética Láser</h3>
                    <ul className="space-y-6 text-gray-300">
                        <li className="flex items-start gap-4">
                            <MapPin size={24} className="text-primary mt-1 shrink-0" />
                            <span className="leading-relaxed">C. de Mallorca, 6<br />46970 Alaquàs, Valencia</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <Phone size={24} className="text-primary shrink-0" />
                            <div className="flex flex-col">
                                <a href="tel:615024489" className="hover:text-primary transition-colors text-lg">615 024 489</a>
                                <span className="text-xs text-gray-400">Atención telefónica y WhatsApp</span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Hours */}
                <div>
                    <h3 className="font-heading font-bold text-xl mb-8">Horario de Apertura</h3>
                    <ul className="space-y-4 text-gray-300 text-sm">
                        <li className="flex justify-between border-b border-white/10 pb-2">
                            <span>Lunes a Viernes</span>
                            <span className="font-medium">10:00 - 14:00 | 16:00 - 20:00</span>
                        </li>
                        <li className="flex justify-between border-b border-white/10 pb-2">
                            <span>Sábados</span>
                            <span className="font-medium">Cita Previa</span>
                        </li>
                        <li className="flex justify-between border-b border-white/10 pb-2">
                            <span>Domingos</span>
                            <span className="text-gray-500">Cerrado</span>
                        </li>
                    </ul>
                </div>

                {/* Social / CTA */}
                <div>
                    <h3 className="font-heading font-bold text-xl mb-8">Síguenos</h3>
                    <p className="text-gray-400 mb-6 text-sm">Mantente al día de nuestras ofertas y novedades en depilación láser.</p>
                    <div className="flex gap-4 mb-10">
                        <a href="#" className="w-12 h-12 rounded-sm bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                            <Facebook size={22} />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-sm bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                            <Instagram size={22} />
                        </a>
                    </div>
                    <button className="w-full btn-primary py-4">Reservar Cita Online</button>
                </div>
            </div>

            <div className="container border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
                <p>&copy; {new Date().getFullYear()} Estética Láser Valencia. Todos los derechos reservados.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-primary">Aviso Legal</a>
                    <a href="#" className="hover:text-primary">Privacidad</a>
                    <a href="#" className="hover:text-primary">Cookies</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
