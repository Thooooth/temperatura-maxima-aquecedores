"use client";

import Image from "next/image";
import { animate, stagger, inView } from "motion";
import { useEffect, useRef } from "react";

export default function WelcomeSection() {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const paragraphRef = useRef(null);
    const buttonsRef = useRef(null);
    const featuresRef = useRef(null);
    const imageRef = useRef(null);
    const promoRef = useRef(null);

    useEffect(() => {
        if (titleRef.current) {
            animate(
                titleRef.current,
                { opacity: [0, 1], y: [20, 0] },
                { duration: 0.8, delay: 0.2 }
            );
        }

        if (subtitleRef.current) {
            animate(
                subtitleRef.current,
                { opacity: [0, 1], y: [20, 0] },
                { duration: 0.8, delay: 0.4 }
            );
        }

        if (paragraphRef.current) {
            animate(
                paragraphRef.current,
                { opacity: [0, 1], y: [20, 0] },
                { duration: 0.8, delay: 0.6 }
            );
        }

        if (buttonsRef.current) {
            animate(
                buttonsRef.current,
                { opacity: [0, 1], y: [20, 0] },
                { duration: 0.8, delay: 0.8 }
            );
        }

        if (featuresRef.current) {
            const features = featuresRef.current.querySelectorAll('.feature-item');
            animate(
                features,
                { opacity: [0, 1], x: [-20, 0] },
                { duration: 0.5, delay: stagger(0.1, { start: 1 }) }
            );
        }

        if (imageRef.current) {
            animate(
                imageRef.current,
                { opacity: [0, 1], scale: [0.9, 1] },
                { duration: 1, delay: 0.5 }
            );
        }

        if (promoRef.current) {
            animate(
                promoRef.current,
                { opacity: [0, 1], scale: [0.95, 1] },
                { duration: 0.8, delay: 1.2 }
            );
        }
    }, []);

    return (
        <section className="relative bg-gradient-to-b from-blue-50 to-white py-10 sm:py-16 px-4 overflow-hidden" style={{ minHeight: '120px', contain: 'layout' }}>

            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
                    <div className="w-full lg:w-1/2 text-left" style={{ minHeight: '60px' }}>
                        <div ref={promoRef} className="bg-red-600 text-white p-3 mb-5 rounded-lg opacity-0 text-sm sm:text-base">
                            <div className="flex items-center">
                                <i className="ri-timer-flash-line text-yellow-300 text-lg sm:text-xl mr-2"></i>
                                <p className="font-medium font-inter">
                                    <span className="font-bold">OFERTA LIMITADA:</span> 15% OFF em manutenções preventivas! Válido até {new Date().getDate() + 7}/{new Date().getMonth() + 1}
                                </p>
                            </div>
                        </div>

                        <h1 ref={titleRef} className="text-4xl sm:text-5xl font-bold text-blue-800 mb-2 opacity-0 leading-tight tracking-tight">
                            <span className="text-orange-600">Aquecedores a Gás</span> com Instalação Garantida
                        </h1>
                        <h2 ref={subtitleRef} className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-3 sm:mb-4 opacity-0 leading-snug">Atendimento Emergencial em 30 minutos em SP</h2>

                        <p ref={paragraphRef} className="text-base sm:text-lg text-gray-700 mb-5 sm:mb-6 opacity-0 leading-relaxed font-inter">
                            Especialistas em <strong>aquecedores Rinnai, Bosch e Lorenzetti</strong> desde 2010. Resolvemos seu problema <span className="text-red-600 font-bold">HOJE</span> com técnicos certificados e peças originais!
                        </p>

                        <div ref={buttonsRef} className="flex flex-col xs:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 opacity-0">
                            <a
                                href="https://wa.me/5511949047540?text=Preciso%20de%20assistência%20URGENTE%20para%20meu%20aquecedor.%20Podem%20me%20atender%20hoje?"
                                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-3 rounded-full shadow-lg transition-colors duration-300 text-base sm:text-lg font-medium font-inter w-full xs:w-auto"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Solicitar atendimento imediato pelo WhatsApp"
                            >
                                <i className="ri-whatsapp-line text-xl" aria-hidden="true"></i>
                                ATENDIMENTO IMEDIATO
                            </a>
                            <a
                                href="tel:5511949047540"
                                className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 sm:px-6 py-3 rounded-full shadow-lg transition-colors duration-300 text-base sm:text-lg font-medium font-inter w-full xs:w-auto"
                                aria-label="Ligar para (11) 94904-7540"
                            >
                                <i className="ri-phone-line text-xl" aria-hidden="true"></i>
                                LIGUE AGORA
                            </a>
                        </div>

                        <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg border-l-4 border-yellow-500 mb-5 sm:mb-6 text-sm sm:text-base">
                            <p className="text-yellow-800 font-medium leading-relaxed font-inter">
                                <i className="ri-alarm-warning-line mr-1" aria-hidden="true"></i> Técnicos disponíveis AGORA para emergências! Resposta em até 30 minutos.
                            </p>
                        </div>

                        <div ref={featuresRef} className="flex flex-wrap gap-2 sm:gap-4 mt-4 sm:mt-6">
                            <div className="flex items-center gap-1 sm:gap-2 feature-item text-sm sm:text-base">
                                <div className="bg-green-100 p-1 sm:p-2 rounded-full">
                                    <i className="ri-check-line text-green-600" aria-hidden="true"></i>
                                </div>
                                <span className="text-gray-700 font-inter">Atendimento 24h</span>
                            </div>
                            <div className="flex items-center gap-1 sm:gap-2 feature-item text-sm sm:text-base">
                                <div className="bg-green-100 p-1 sm:p-2 rounded-full">
                                    <i className="ri-check-line text-green-600" aria-hidden="true"></i>
                                </div>
                                <span className="text-gray-700 font-inter">Garantia por Escrito</span>
                            </div>
                            <div className="flex items-center gap-1 sm:gap-2 feature-item text-sm sm:text-base">
                                <div className="bg-green-100 p-1 sm:p-2 rounded-full">
                                    <i className="ri-check-line text-green-600" aria-hidden="true"></i>
                                </div>
                                <span className="text-gray-700 font-inter">Técnicos Certificados</span>
                            </div>
                            <div className="flex items-center gap-1 sm:gap-2 feature-item text-sm sm:text-base">
                                <div className="bg-green-100 p-1 sm:p-2 rounded-full">
                                    <i className="ri-check-line text-green-600" aria-hidden="true"></i>
                                </div>
                                <span className="text-gray-700 font-inter">Peças Originais</span>
                            </div>
                        </div>
                    </div>

                    <div ref={imageRef} className="w-full lg:w-1/2 relative opacity-0 mt-6 lg:mt-0">
                        <div className="absolute -top-4 -right-4 bg-red-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-lg z-10 transform rotate-3 text-xs sm:text-sm">
                            <p className="font-bold font-inter">EMERGÊNCIA 24H</p>
                        </div>
                        <div className="relative rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src="/img/aquecedor_rinnai_3.jpg"
                                alt="Manutenção e Instalação de Aquecedor a Gás Rinnai em São Paulo"
                                width={500}
                                height={350}
                                className="object-cover w-full h-auto"
                                priority
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-3 sm:p-4">
                                <p className="text-white font-semibold text-sm sm:text-base font-inter">Especialistas em todas as marcas!</p>
                                <div className="flex flex-wrap gap-1 sm:gap-2 mt-1 sm:mt-2">
                                    <span className="bg-white/20 text-white text-xs px-2 py-1 rounded font-inter">Rinnai</span>
                                    <span className="bg-white/20 text-white text-xs px-2 py-1 rounded font-inter">Bosch</span>
                                    <span className="bg-white/20 text-white text-xs px-2 py-1 rounded font-inter">Lorenzetti</span>
                                    <span className="bg-white/20 text-white text-xs px-2 py-1 rounded font-inter">Komeco</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 