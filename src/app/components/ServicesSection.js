"use client";

import { useRef, useEffect } from 'react';
import Image from "next/image";
import { animate, stagger, inView } from "motion";

export default function ServicesSection() {
    const titleRef = useRef(null);
    const servicesRef = useRef(null);
    const brandsRef = useRef(null);
    const ctaRef = useRef(null);
    const urgentBannerRef = useRef(null);

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

        if (servicesRef.current) {
            inView(servicesRef.current, () => {
                const serviceCards = servicesRef.current.querySelectorAll('.service-card');
                animate(
                    serviceCards,
                    { opacity: [0, 1], y: [50, 0] },
                    { duration: 0.6, delay: stagger(0.1) }
                );
            });
        }

        if (brandsRef.current) {
            inView(brandsRef.current, () => {
                animate(
                    brandsRef.current,
                    { opacity: [0, 1], y: [30, 0] },
                    { duration: 0.8 }
                );

                const brandItems = brandsRef.current.querySelectorAll('.brand-item');
                animate(
                    brandItems,
                    { opacity: [0, 1], scale: [0.8, 1] },
                    { duration: 0.5, delay: stagger(0.1) }
                );
            });
        }

        if (ctaRef.current) {
            inView(ctaRef.current, () => {
                animate(
                    ctaRef.current,
                    { opacity: [0, 1], y: [30, 0] },
                    { duration: 0.8 }
                );
            });
        }

        if (urgentBannerRef.current) {
            inView(urgentBannerRef.current, () => {
                animate(
                    urgentBannerRef.current,
                    { opacity: [0, 1], scale: [0.95, 1] },
                    { duration: 0.5 }
                );
            });
        }
    }, []);

    return (
        <section id="servicos" className="py-16 bg-white">
            <div ref={urgentBannerRef} className="container mx-auto px-4 max-w-6xl mb-12 opacity-0">
                <div className="bg-red-600 text-white rounded-lg shadow-xl p-6 flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center mb-4 md:mb-0">
                        <i className="ri-alarm-warning-fill text-4xl mr-4 text-yellow-300"></i>
                        <div>
                            <h3 className="text-xl font-bold">SEU AQUECEDOR PAROU? RESOLVEMOS HOJE!</h3>
                            <p className="text-white/90 font-inter">Técnicos a caminho em até 30 minutos na Grande São Paulo</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href="tel:5511949047540" className="flex items-center justify-center gap-2 bg-white text-red-600 hover:bg-gray-100 px-5 py-2 rounded-full font-semibold transition font-inter">
                            <i className="ri-phone-fill"></i>
                            LIGUE AGORA
                        </a>
                        <a href="https://wa.me/5511949047540?text=EMERGÊNCIA:%20Meu%20aquecedor%20parou%20de%20funcionar.%20Preciso%20de%20atendimento%20urgente!" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold transition font-inter">
                            <i className="ri-whatsapp-fill"></i>
                            WHATSAPP URGENTE
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-6xl">
                <div ref={titleRef} className="text-center mb-12 opacity-0">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-3 sm:mb-4 leading-tight tracking-tight">Serviços Especializados em Aquecedores</h2>
                    <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto font-inter">
                        Soluções completas para aquecedores Rinnai, Bosch, Lorenzetti e todas as principais marcas.
                        Técnicos certificados com atendimento em toda São Paulo.
                    </p>
                </div>

                <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden service-card transform transition-transform hover:scale-105 hover:shadow-xl">
                        <div className="h-48 relative overflow-hidden">
                            <Image
                                src="/img/aquecedor_rinnai.jpg"
                                alt="Manutenção Corretiva de Aquecedores a Gás em São Paulo"
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-blue-900/40 flex items-center justify-center">
                                <i className="ri-tools-fill text-6xl text-white"></i>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Manutenção Corretiva</h3>
                            <p className="text-gray-600 mb-4 font-inter">
                                Resolução imediata de vazamentos, falhas de ignição, baixa pressão e chamas irregulares.
                                Seu aquecedor funcionando HOJE!
                            </p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start">
                                    <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                                    <span className="font-inter">Diagnóstico em 15 minutos</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                                    <span className="font-inter">Peças originais em estoque</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                                    <span className="font-inter">Garantia de 6 meses</span>
                                </li>
                            </ul>
                            <div className="flex justify-center">
                                <a href="https://wa.me/5511949047540?text=URGENTE:%20Preciso%20de%20manutenção%20corretiva%20para%20meu%20aquecedor%20que%20parou%20de%20funcionar"
                                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition font-inter">
                                    <i className="ri-whatsapp-line"></i>
                                    RESOLVER AGORA
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden service-card transform transition-transform hover:scale-105 hover:shadow-xl">
                        <div className="h-48 relative overflow-hidden">
                            <Image
                                src="/img/aquecedor_rinnai_2.jpg"
                                alt="Manutenção Preventiva de Aquecedores a Gás em São Paulo"
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-blue-900/40 flex items-center justify-center">
                                <i className="ri-calendar-check-line text-6xl text-white"></i>
                            </div>
                            <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 rounded-bl-lg">
                                <span className="text-sm font-bold font-inter">15% OFF</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Manutenção Preventiva</h3>
                            <p className="text-gray-600 mb-4 font-inter">
                                Evite problemas e economize! Manutenção completa que prolonga a vida útil do seu equipamento
                                e garante segurança.
                            </p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start">
                                    <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                                    <span className="font-inter">Limpeza e desobstrução</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                                    <span className="font-inter">Verificação de segurança</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                                    <span className="font-inter">Calibração de temperatura</span>
                                </li>
                            </ul>
                            <div className="flex justify-center">
                                <a href="https://wa.me/5511949047540?text=Quero%20agendar%20manutenção%20preventiva%20com%2015%%20de%20desconto"
                                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition font-inter">
                                    <i className="ri-whatsapp-line"></i>
                                    GARANTIR DESCONTO
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden service-card transform transition-transform hover:scale-105 hover:shadow-xl">
                        <div className="h-48 relative overflow-hidden">
                            <Image
                                src="/img/img_instalacao_aquecedores_1.jpg"
                                alt="Instalação Profissional de Aquecedores a Gás em São Paulo"
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-blue-900/40 flex items-center justify-center">
                                <i className="ri-install-line text-6xl text-white"></i>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Instalação Profissional</h3>
                            <p className="text-gray-600 mb-4 font-inter">
                                Instalação segura e eficiente de aquecedores a gás, seguindo todas as normas técnicas.
                                Serviço completo em até 24h!
                            </p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start">
                                    <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                                    <span className="font-inter">Visita técnica gratuita</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                                    <span className="font-inter">Instalação conforme ABNT</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                                    <span className="font-inter">Garantia estendida</span>
                                </li>
                            </ul>
                            <div className="flex justify-center">
                                <a href="https://wa.me/5511949047540?text=Quero%20um%20orçamento%20para%20instalação%20de%20aquecedor%20a%20gás"
                                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition font-inter">
                                    <i className="ri-whatsapp-line"></i>
                                    ORÇAMENTO RÁPIDO
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={ctaRef} className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white text-center opacity-0">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 leading-tight">Seu aquecedor precisa de assistência?</h3>
                    <p className="text-blue-100 mb-6 max-w-3xl mx-auto font-inter">
                        Não fique sem água quente! Atendemos em toda São Paulo e Grande SP com os melhores técnicos do mercado.
                        <span className="font-bold"> Orçamento sem compromisso e atendimento imediato!</span>
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="https://wa.me/5511949047540?text=Preciso%20de%20assistência%20para%20meu%20aquecedor%20a%20gás.%20Podem%20me%20atender%20hoje?"
                            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg transition-colors duration-300 font-medium font-inter"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="ri-whatsapp-line text-xl"></i>
                            ATENDIMENTO HOJE
                        </a>
                        <a
                            href="tel:5511949047540"
                            className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-800 px-6 py-3 rounded-full shadow-lg transition-colors duration-300 font-medium font-inter"
                        >
                            <i className="ri-phone-line text-xl"></i>
                            FALAR COM TÉCNICO
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
} 