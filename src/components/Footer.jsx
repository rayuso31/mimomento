import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contacto" className="bg-[#2C2C2C] text-white pt-20 pb-10">
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

                {/* Contact Info */}
                <div>
                    <h3 className="font-heading text-2xl mb-6 text-primary">Mimomento</h3>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start gap-3">
                            <MapPin size={20} className="text-primary mt-1 shrink-0" />
                            <span>Plaza Puerta del Sol, 19<br />46182 La Cañada, Valencia</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={20} className="text-primary shrink-0" />
                            <a href="tel:960210309" className="hover:text-primary transition-colors">960 21 03 09</a>
                        </li>
                    </ul>
                </div>

                {/* Hours */}
                <div>
                    <h3 className="font-heading text-xl mb-6">Horario</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex justify-between">
                            <span>Lunes</span>
                            <span className="text-gray-500">CERRADO</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Mar - Jue</span>
                            <span>09:30 - 14:00 | 16:00 - 20:00</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Viernes</span>
                            <span>09:30 - 20:00</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Sábado</span>
                            <span>09:30 - 13:30</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Domingo</span>
                            <span className="text-gray-500">CERRADO</span>
                        </li>
                    </ul>
                </div>

                {/* Social / CTA */}
                <div>
                    <h3 className="font-heading text-xl mb-6">Síguenos</h3>
                    <div className="flex gap-4 mb-8">
                        <a href="https://www.facebook.com/mimomento19" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                            <Instagram size={20} />
                        </a>
                    </div>
                    <button className="w-full btn-primary">Reservar Cita</button>
                </div>
            </div>

            <div className="container border-t border-white/10 pt-8 text-center text-gray-500 text-xs">
                <p>&copy; {new Date().getFullYear()} Mimomento. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
