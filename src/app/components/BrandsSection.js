"use client";

import Image from "next/image";
import { animate, stagger, inView } from "motion";
import { useRef, useEffect } from "react";

export default function BrandsSection() {
    const titleRef = useRef(null);
    const brandsRef = useRef(null);
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

        if (brandsRef.current) {
            inView(brandsRef.current, () => {
                const brands = brandsRef.current.querySelectorAll('.brand-item');
                animate(
                    brands,
                    { opacity: [0, 1], scale: [0.9, 1] },
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
    }, []);

    return (
        <section id="marcas" className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div ref={titleRef} className="text-center mb-12 opacity-0">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-3 sm:mb-4 leading-tight tracking-tight">Assistência Técnica para Todas as Marcas</h2>
                    <p className="text-base sm:text-lg mb-6 text-gray-700 max-w-3xl mx-auto font-inter">
                        Somos especialistas em manutenção, instalação e reparo de aquecedores das principais marcas do mercado.
                        Nossos técnicos são certificados e treinados diretamente pelos fabricantes.
                    </p>
                </div>

                <div ref={brandsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
                    <div className="brand-item bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-xs opacity-0">
                        <div className="flex justify-center items-center h-32">
                            <Image
                                src="/img/rinnai-logo.svg"
                                alt="Assistência Técnica Autorizada Rinnai em São Paulo"
                                width={180}
                                height={80}
                                className="object-contain"
                            />
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-lg font-semibold text-blue-800">Rinnai</h3>
                            <p className="text-gray-600 mt-2 font-inter">Especialistas em manutenção e instalação de aquecedores Rinnai, a marca líder mundial em tecnologia de aquecimento.</p>
                            <div className="mt-4">
                                <a
                                    href="https://wa.me/5511949047540?text=Preciso%20de%20assistência%20técnica%20para%20meu%20aquecedor%20Rinnai"
                                    className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm transition-colors font-inter"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="ri-whatsapp-line"></i>
                                    Solicitar Assistência Rinnai
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="brand-item bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-xs opacity-0">
                        <div className="flex justify-center items-center h-32">
                            <Image
                                src="/img/rheem-logo.png"
                                alt="Manutenção de Aquecedores Rheem em São Paulo"
                                width={126}
                                height={56}
                                className="object-contain"
                            />
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-lg font-semibold text-blue-800">Rheem</h3>
                            <p className="text-gray-600 mt-2 font-inter">Serviços especializados para aquecedores Rheem, reconhecidos pela durabilidade e alta performance.</p>
                            <div className="mt-4">
                                <a
                                    href="https://wa.me/5511949047540?text=Preciso%20de%20assistência%20técnica%20para%20meu%20aquecedor%20Rheem"
                                    className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm transition-colors font-inter"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="ri-whatsapp-line"></i>
                                    Solicitar Assistência Rheem
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="brand-item bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-xs opacity-0">
                        <div className="flex justify-center items-center h-32">
                            <Image
                                src="/img/lorenzetti-logo.png"
                                alt="Conserto de Aquecedores Lorenzetti em São Paulo"
                                width={180}
                                height={80}
                                className="object-contain"
                            />
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-lg font-semibold text-blue-800">Lorenzetti</h3>
                            <p className="text-gray-600 mt-2 font-inter">Atendimento especializado para toda linha de aquecedores Lorenzetti, com peças originais e garantia.</p>
                            <div className="mt-4">
                                <a
                                    href="https://wa.me/5511949047540?text=Preciso%20de%20assistência%20técnica%20para%20meu%20aquecedor%20Lorenzetti"
                                    className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm transition-colors font-inter"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="ri-whatsapp-line"></i>
                                    Solicitar Assistência Lorenzetti
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={ctaRef} className="mt-12 text-center opacity-0">
                    <p className="text-gray-700 mb-4 font-inter">
                        Além destas, também somos especialistas em <strong>Bosch, Komeco, Orbis, Inova, Vulcão</strong> e outras marcas.
                    </p>
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 max-w-2xl mx-auto">
                        <h3 className="text-xl font-semibold text-blue-800 mb-3">Não encontrou a marca do seu aquecedor?</h3>
                        <p className="text-gray-700 mb-4 font-inter">
                            Nossos técnicos são treinados para trabalhar com todas as marcas disponíveis no mercado.
                            Entre em contato e resolva seu problema hoje mesmo!
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="https://wa.me/5511949047540?text=Olá,%20tenho%20um%20aquecedor%20de%20outra%20marca%20e%20preciso%20de%20assistência"
                                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full shadow transition-colors font-inter"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="ri-whatsapp-line"></i>
                                Falar com Especialista
                            </a>
                            <a
                                href="tel:5511949047540"
                                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full shadow transition-colors font-inter"
                            >
                                <i className="ri-phone-line"></i>
                                Ligar Agora: (11) 94904-7540
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 