"use client";

import { animate, stagger, inView } from "motion";
import { useRef, useEffect } from "react";
import Script from "next/script";

export default function AdvantagesSection() {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const cardsRef = useRef(null);
    const ctaRef = useRef(null);

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

        if (descriptionRef.current) {
            inView(descriptionRef.current, () => {
                animate(
                    descriptionRef.current,
                    { opacity: [0, 1], y: [20, 0] },
                    { duration: 0.8, delay: 0.2 }
                );
            });
        }

        if (cardsRef.current) {
            inView(cardsRef.current, () => {
                const cards = cardsRef.current.querySelectorAll('.advantage-card');
                animate(
                    cards,
                    { opacity: [0, 1], y: [40, 0], scale: [0.95, 1] },
                    { duration: 0.6, delay: stagger(0.2) }
                );
            });
        }

        if (ctaRef.current) {
            inView(ctaRef.current, () => {
                animate(
                    ctaRef.current,
                    { opacity: [0, 1], y: [20, 0] },
                    { duration: 0.8, delay: 0.6 }
                );
            });
        }
    }, []);

    const advantages = [
        {
            icon: "ri-shield-check-fill",
            title: "Técnicos Certificados",
            description: "Nossa equipe é formada por profissionais com certificações específicas para cada marca de aquecedor, garantindo diagnósticos precisos e reparos eficientes."
        },
        {
            icon: "ri-money-dollar-circle-line",
            title: "Orçamento Transparente",
            description: "Sem surpresas na hora de pagar. Apresentamos orçamento detalhado antes de qualquer serviço, com os melhores preços do mercado e diversas formas de pagamento."
        },
        {
            icon: "ri-time-line",
            title: "Atendimento Rápido",
            description: "Técnicos em toda São Paulo para atendimento em até 30 minutos em casos de emergência. Não deixamos você ficar sem água quente quando mais precisa."
        },
        {
            icon: "ri-tools-fill",
            title: "Peças Originais",
            description: "Utilizamos exclusivamente peças originais com garantia de fábrica, assegurando maior durabilidade e segurança para seu equipamento."
        },
        {
            icon: "ri-customer-service-2-line",
            title: "Suporte Pós-Serviço",
            description: "Acompanhamento após o serviço com orientações de uso e manutenção preventiva para prolongar a vida útil do seu aquecedor e evitar problemas futuros."
        },
        {
            icon: "ri-map-pin-line",
            title: "Atendimento em Toda SP",
            description: "Cobertura completa em São Paulo e região metropolitana, com técnicos estrategicamente posicionados para chegar rapidamente até você."
        }
    ];

    return (
        <>
            <section id="vantagens" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <header className="text-center mb-10 sm:mb-16">
                        <h2 ref={titleRef} className="text-3xl sm:text-4xl font-bold text-blue-800 mb-3 sm:mb-4 opacity-0 leading-tight tracking-tight">Por que Escolher a Temperatura Máxima?</h2>
                        <p ref={descriptionRef} className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto opacity-0 font-inter">
                            Desde 2010, somos referência em serviços para aquecedores a gás em São Paulo,
                            combinando excelência técnica, atendimento personalizado e preços justos.
                        </p>
                    </header>

                    <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {advantages.map((advantage, index) => (
                            <div key={index} className="advantage-card bg-white rounded-xl shadow-lg p-6 opacity-0 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                                <div className="flex items-center mb-4">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <i className={`${advantage.icon} text-2xl text-blue-600`}></i>
                                    </div>
                                    <h3 className="text-xl font-semibold text-blue-800 leading-tight">{advantage.title}</h3>
                                </div>
                                <p className="text-gray-700 font-inter">{advantage.description}</p>
                            </div>
                        ))}
                    </div>

                    <div ref={ctaRef} className="mt-12 sm:mt-16 text-center opacity-0">
                        <a
                            href="https://wa.me/5511949047540?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20meu%20aquecedor"
                            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg transition-colors duration-300 text-lg font-medium font-inter"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="ri-whatsapp-line mr-2 text-xl"></i>
                            Solicitar Orçamento
                        </a>
                        <p className="mt-4 text-gray-600 text-sm font-inter">Resposta em até 15 minutos durante horário comercial</p>
                    </div>
                </div>
            </section>

            <Script id="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Assistência Técnica para Aquecedores a Gás",
                    "provider": {
                        "@type": "LocalBusiness",
                        "name": "Temperatura Máxima Aquecedores",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "R. Martins Fontes, 364",
                            "addressLocality": "São Paulo",
                            "addressRegion": "SP",
                            "postalCode": "01050-000",
                            "addressCountry": "BR"
                        },
                        "telephone": "+551194904-7540",
                        "priceRange": "$$"
                    },
                    "areaServed": {
                        "@type": "City",
                        "name": "São Paulo"
                    },
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Serviços para Aquecedores",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Instalação de Aquecedor a Gás"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Manutenção de Aquecedor a Gás"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Conserto de Aquecedor a Gás"
                                }
                            }
                        ]
                    }
                })
            }} />
        </>
    );
} 