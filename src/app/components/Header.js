"use client";

import Image from "next/image";
import { animate, stagger } from "motion";
import { useEffect, useRef, useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const logoRef = useRef(null);
    const navRef = useRef(null);
    const buttonRef = useRef(null);
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        if (logoRef.current) {
            animate(
                logoRef.current,
                { opacity: [0, 1], x: [-20, 0] },
                { duration: 0.8 }
            );
        }

        if (navRef.current) {
            const navItems = navRef.current.querySelectorAll('li');
            animate(
                navItems,
                { opacity: [0, 1], y: [-10, 0] },
                { duration: 0.5, delay: stagger(0.1) }
            );
        }

        if (buttonRef.current) {
            animate(
                buttonRef.current,
                { opacity: [0, 1], x: [20, 0] },
                { duration: 0.8 }
            );
        }

        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Prevent body scroll when mobile menu is open
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Animate mobile menu
        if (isMenuOpen && mobileMenuRef.current) {
            const menuItems = mobileMenuRef.current.querySelectorAll('li');
            animate(
                mobileMenuRef.current,
                { opacity: [0, 1] },
                { duration: 0.3 }
            );
            animate(
                menuItems,
                { opacity: [0, 1], x: [-20, 0] },
                { duration: 0.3, delay: stagger(0.05, { start: 0.1 }) }
            );
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={`flex justify-between items-center py-2 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg sticky top-0 z-50 px-4 sm:px-6 md:px-10 transition-all duration-300 ${isScrolled ? 'py-1 sm:py-2' : ''}`}>
            <div ref={logoRef} className="flex items-center gap-2 sm:gap-4 opacity-0">
                <Image
                    src="/img/logo_temperaturaMaxima_branco.svg"
                    alt="Logo Temperatura Máxima Aquecedores"
                    width={40}
                    height={80}
                    className={`h-auto transition-all duration-300 ${isScrolled ? 'w-48 sm:w-56 md:w-64' : 'w-56 sm:w-64 md:w-72'}`}
                />
            </div>
            <nav ref={navRef} className="hidden md:block min-h-[30px]">
                <ul className="flex gap-6 lg:gap-8 text-base lg:text-lg font-medium leading-relaxed font-inter">
                    <li className="opacity-0"><a href="#servicos" className="hover:text-yellow-300 transition-colors duration-300">Serviços</a></li>
                    <li className="opacity-0"><a href="#sobre" className="hover:text-yellow-300 transition-colors duration-300">Sobre Nós</a></li>
                    <li className="opacity-0"><a href="#depoimentos" className="hover:text-yellow-300 transition-colors duration-300">Depoimentos</a></li>
                    <li className="opacity-0"><a href="#faq" className="hover:text-yellow-300 transition-colors duration-300">FAQ</a></li>
                    <li className="opacity-0"><a href="#contato" className="hover:text-yellow-300 transition-colors duration-300">Contato</a></li>
                </ul>
            </nav>
            <div ref={buttonRef} className="hidden md:block opacity-0">
                <a
                    href="https://wa.me/5511949047540?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento"
                    className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 lg:px-5 py-2 rounded-full shadow-lg transition-colors duration-300 text-sm lg:text-base leading-relaxed font-medium font-inter"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Solicitar orçamento pelo WhatsApp"
                >
                    <i className="ri-whatsapp-line mr-2" aria-hidden="true"></i>
                    Orçamento Rápido
                </a>
            </div>
            <button
                onClick={toggleMenu}
                className="md:hidden text-white p-1 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-md"
                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isMenuOpen}
            >
                <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`} aria-hidden="true"></i>
            </button>

            {/* Menu mobile */}
            {isMenuOpen && (
                <div
                    ref={mobileMenuRef}
                    className="fixed left-0 right-0 bottom-0 top-[57px] bg-blue-800/98 backdrop-blur-sm z-40 md:hidden overflow-y-auto overflow-x-hidden w-full"
                    aria-modal="true"
                    role="dialog"
                >
                    <div className="px-4 py-5 max-w-full">
                        <ul className="flex flex-col gap-3 text-lg font-medium leading-relaxed font-inter">
                            <li className="opacity-0 border-b border-blue-700 pb-3">
                                <a href="#servicos" className="block py-2 hover:text-yellow-300 transition-colors duration-300 active:text-yellow-400" onClick={closeMenu}>Serviços</a>
                            </li>
                            <li className="opacity-0 border-b border-blue-700 pb-3">
                                <a href="#sobre" className="block py-2 hover:text-yellow-300 transition-colors duration-300 active:text-yellow-400" onClick={closeMenu}>Sobre Nós</a>
                            </li>
                            <li className="opacity-0 border-b border-blue-700 pb-3">
                                <a href="#depoimentos" className="block py-2 hover:text-yellow-300 transition-colors duration-300 active:text-yellow-400" onClick={closeMenu}>Depoimentos</a>
                            </li>
                            <li className="opacity-0 border-b border-blue-700 pb-3">
                                <a href="#faq" className="block py-2 hover:text-yellow-300 transition-colors duration-300 active:text-yellow-400" onClick={closeMenu}>FAQ</a>
                            </li>
                            <li className="opacity-0 border-b border-blue-700 pb-3">
                                <a href="#contato" className="block py-2 hover:text-yellow-300 transition-colors duration-300 active:text-yellow-400" onClick={closeMenu}>Contato</a>
                            </li>
                        </ul>

                        <div className="mt-6">
                            <a
                                href="https://wa.me/5511949047540?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento"
                                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-lg transition-colors duration-300 w-full font-medium font-inter"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMenu}
                            >
                                <i className="ri-whatsapp-line text-xl" aria-hidden="true"></i>
                                Solicitar Orçamento
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
} 