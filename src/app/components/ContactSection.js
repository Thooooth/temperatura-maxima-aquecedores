"use client";

import Image from "next/image";
import { animate, stagger, inView } from "motion";
import { useRef, useEffect } from "react";

export default function ContactSection() {
    const titleRef = useRef(null);
    const contactInfoRef = useRef(null);
    const mapRef = useRef(null);
    const hoursRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        if (titleRef.current) {
            inView(titleRef.current, () => {
                animate(
                    titleRef.current,
                    { opacity: [0, 1], y: [30, 0] },
                    { duration: 0.8 }
                );
            });
        }

        if (contactInfoRef.current) {
            inView(contactInfoRef.current, () => {
                animate(
                    contactInfoRef.current,
                    { opacity: [0, 1], x: [-30, 0] },
                    { duration: 0.8 }
                );

                const contactItems = contactInfoRef.current.querySelectorAll('.contact-item');
                animate(
                    contactItems,
                    { opacity: [0, 1], y: [20, 0] },
                    { duration: 0.5, delay: stagger(0.1) }
                );
            });
        }

        if (mapRef.current) {
            inView(mapRef.current, () => {
                animate(
                    mapRef.current,
                    { opacity: [0, 1], x: [30, 0] },
                    { duration: 0.8 }
                );
            });
        }

        if (hoursRef.current) {
            inView(hoursRef.current, () => {
                animate(
                    hoursRef.current,
                    { opacity: [0, 1], y: [30, 0] },
                    { duration: 0.8 }
                );
            });
        }

        if (formRef.current) {
            inView(formRef.current, () => {
                animate(
                    formRef.current,
                    { opacity: [0, 1], y: [30, 0] },
                    { duration: 0.8 }
                );
            });
        }
    }, []);

    return (
        <section id="contato" className="py-12 sm:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <header className="text-center mb-10 sm:mb-16">
                    <h2 ref={titleRef} className="text-3xl sm:text-4xl font-bold text-blue-800 mb-3 sm:mb-4 opacity-0 leading-tight tracking-tight">Entre em Contato</h2>
                    <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto font-inter">
                        Estamos prontos para atender sua emergência ou agendar uma visita técnica.
                        Fale conosco por WhatsApp, telefone ou preencha o formulário abaixo.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <div ref={contactInfoRef} className="bg-blue-50 p-6 sm:p-8 rounded-lg shadow-md opacity-0">
                        <h3 className="text-2xl font-semibold text-blue-800 mb-6 leading-tight">Informações de Contato</h3>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 contact-item">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <i className="ri-whatsapp-line text-xl text-blue-600"></i>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-gray-800">WhatsApp</h4>
                                    <p className="text-gray-600 font-inter">(11) 94904-7540</p>
                                    <p className="text-sm text-gray-500 font-inter">Resposta em até 15 minutos</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 contact-item">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <i className="ri-phone-line text-xl text-blue-600"></i>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-gray-800">Telefone</h4>
                                    <p className="text-gray-600 font-inter">(11) 94904-7540</p>
                                    <p className="text-sm text-gray-500 font-inter">Atendimento 24h para emergências</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 contact-item">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <i className="ri-mail-line text-xl text-blue-600"></i>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-gray-800">E-mail</h4>
                                    <p className="text-gray-600 break-all font-inter">temperaturamaximaoficial@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 contact-item">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <i className="ri-map-pin-line text-xl text-blue-600"></i>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-gray-800">Endereço</h4>
                                    <p className="text-gray-600 font-inter">R. Martins Fontes, 364 - Consolação</p>
                                    <p className="text-gray-600 font-inter">São Paulo - SP, 01050-000</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://wa.me/5511949047540?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento"
                                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg transition-colors duration-300 font-medium font-inter"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="ri-whatsapp-line text-xl"></i>
                                Falar no WhatsApp
                            </a>
                            <a
                                href="tel:5511949047540"
                                className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full shadow-lg transition-colors duration-300 font-medium font-inter"
                            >
                                <i className="ri-phone-line text-xl"></i>
                                Ligar Agora
                            </a>
                        </div>

                        <div ref={hoursRef} className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-md">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <i className="ri-time-line text-yellow-600"></i>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm font-medium text-yellow-800">Horário de Atendimento</h3>
                                    <div className="mt-2 text-sm text-yellow-700 font-inter">
                                        <p>Segunda a Sexta: 8h às 18h</p>
                                        <p>Sábado: 8h às 12h</p>
                                        <p className="font-semibold mt-1">Atendimento emergencial disponível 24h</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={mapRef} className="opacity-0">
                        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md h-full">
                            <h3 className="text-2xl font-semibold text-blue-800 mb-6 leading-tight">Nossa Localização</h3>
                            <div className="rounded-lg overflow-hidden shadow-md h-[300px] sm:h-[400px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3001652113837!2d-46.64681932376149!3d-23.55305127885787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a7a7467193%3A0x3e223efd2c86c887!2sR.%20Martins%20Fontes%2C%20364%20-%20Consola%C3%A7%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001050-000!5e0!3m2!1spt-BR!2sbr!4v1709266000000!5m2!1spt-BR!2sbr"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Localização da Temperatura Máxima Aquecedores"
                                ></iframe>
                            </div>
                            <div className="mt-6">
                                <h4 className="text-lg font-medium text-gray-800 mb-2">Área de Cobertura</h4>
                                <p className="text-gray-700 mb-4 font-inter">
                                    Atendemos toda a cidade de São Paulo e região metropolitana, incluindo:
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                    <span className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm text-center font-inter">São Paulo</span>
                                    <span className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm text-center font-inter">Guarulhos</span>
                                    <span className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm text-center font-inter">Osasco</span>
                                    <span className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm text-center font-inter">Santo André</span>
                                    <span className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm text-center font-inter">São Bernardo</span>
                                    <span className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm text-center font-inter">São Caetano</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 