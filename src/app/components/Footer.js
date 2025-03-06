"use client";

import Image from "next/image";
import { animate, stagger } from "motion";
import { useEffect, useRef } from "react";

export default function Footer() {
    const footerRef = useRef(null);
    const linksRef = useRef(null);
    const contactRef = useRef(null);
    const copyrightRef = useRef(null);

    useEffect(() => {
        if (footerRef.current) {
            const links = linksRef.current.querySelectorAll('li');
            animate(
                links,
                { opacity: [0, 1], y: [10, 0] },
                { duration: 0.5, delay: stagger(0.1) }
            );

            animate(
                contactRef.current,
                { opacity: [0, 1], y: [20, 0] },
                { duration: 0.8, delay: 0.3 }
            );

            animate(
                copyrightRef.current,
                { opacity: [0, 1] },
                { duration: 0.8, delay: 0.5 }
            );
        }
    }, []);

    return (
        <footer ref={footerRef} className="bg-blue-900 text-white pt-12 pb-6">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <div className="mb-4">
                            <Image
                                src="/img/logo_temperaturaMaxima_branco.svg"
                                alt="Logo Temperatura Máxima Aquecedores"
                                width={252}
                                height={84}
                                className="h-auto"
                            />
                        </div>
                        <p className="text-blue-200 mb-4 font-inter">
                            Especialistas em instalação, manutenção e reparo de aquecedores a gás em São Paulo.
                            Atendimento 24h para emergências.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-blue-300 transition-colors">
                                <i className="ri-facebook-fill text-xl"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-blue-300 transition-colors">
                                <i className="ri-instagram-fill text-xl"></i>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white hover:text-blue-300 transition-colors">
                                <i className="ri-youtube-fill text-xl"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 tracking-tight">Links Rápidos</h3>
                        <ul ref={linksRef} className="space-y-2 font-inter">
                            <li><a href="#servicos" className="text-blue-200 hover:text-white transition-colors">Serviços</a></li>
                            <li><a href="#sobre" className="text-blue-200 hover:text-white transition-colors">Sobre Nós</a></li>
                            <li><a href="#depoimentos" className="text-blue-200 hover:text-white transition-colors">Depoimentos</a></li>
                            <li><a href="#faq" className="text-blue-200 hover:text-white transition-colors">Perguntas Frequentes</a></li>
                            <li><a href="#contato" className="text-blue-200 hover:text-white transition-colors">Contato</a></li>
                            <li><a href="/politica-de-privacidade" className="text-blue-200 hover:text-white transition-colors">Política de Privacidade</a></li>
                        </ul>
                    </div>

                    <div ref={contactRef} className="opacity-0">
                        <h3 className="text-lg font-semibold mb-4 tracking-tight">Contato</h3>
                        <ul className="space-y-3 font-inter">
                            <li className="flex items-start">
                                <i className="ri-map-pin-line text-blue-300 mt-1 mr-2"></i>
                                <span>R. Martins Fontes, 364 - Consolação<br />São Paulo - SP, 01050-000</span>
                            </li>
                            <li className="flex items-center">
                                <i className="ri-phone-line text-blue-300 mr-2"></i>
                                <a href="tel:5511949047540" className="hover:text-blue-300 transition-colors">(11) 94904-7540</a>
                            </li>
                            <li className="flex items-center">
                                <i className="ri-whatsapp-line text-blue-300 mr-2"></i>
                                <a href="https://wa.me/5511949047540" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">(11) 94904-7540</a>
                            </li>
                            <li className="flex items-center">
                                <i className="ri-mail-line text-blue-300 mr-2"></i>
                                <a href="mailto:temperaturamaximaoficial@gmail.com" className="hover:text-blue-300 transition-colors">temperaturamaximaoficial@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div ref={copyrightRef} className="pt-6 mt-6 border-t border-blue-800 text-center opacity-0">
                    <p className="text-blue-300 text-sm font-inter">
                        &copy; {new Date().getFullYear()} Temperatura Máxima Aquecedores. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
} 