"use client";

import Image from 'next/image';
import { animate, stagger, inView } from "motion";
import { useEffect, useRef } from "react";

export default function AboutSection() {
    const titleRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);
    const valuesRef = useRef(null);
    const statsRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        if (titleRef.current) {
            inView(titleRef.current, () => {
                animate(
                    titleRef.current,
                    { opacity: [0, 1], y: [50, 0] },
                    { duration: 0.8 }
                );
            });
        }

        if (imageRef.current) {
            inView(imageRef.current, () => {
                animate(
                    imageRef.current,
                    { opacity: [0, 1], scale: [0.8, 1] },
                    { duration: 0.8 }
                );
            });
        }

        if (contentRef.current) {
            inView(contentRef.current, () => {
                animate(
                    contentRef.current,
                    { opacity: [0, 1], x: [50, 0] },
                    { duration: 0.8 }
                );
            });
        }

        if (valuesRef.current) {
            inView(valuesRef.current, () => {
                const values = valuesRef.current.querySelectorAll('.value-item');
                animate(
                    values,
                    { opacity: [0, 1], y: [20, 0] },
                    { duration: 0.5, delay: stagger(0.1) }
                );
            });
        }

        if (statsRef.current) {
            inView(statsRef.current, () => {
                const stats = statsRef.current.querySelectorAll('.stat-item');
                animate(
                    stats,
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
    }, []);

    return (
        <section id="sobre" className="py-16 bg-gradient-to-b from-white to-blue-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <div ref={titleRef} className="text-center mb-12 opacity-0">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-3 sm:mb-4 leading-tight tracking-tight">Especialistas em Aquecedores a Gás em São Paulo</h2>
                    <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto font-inter">
                        Desde 2010 garantindo água quente e segurança para milhares de famílias em toda São Paulo e região metropolitana.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div ref={imageRef} className="md:w-1/2 opacity-0">
                        <div className="relative rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/img/img_instalacao_placa_solar.jpg"
                                alt="Instalação profissional de aquecedores a gás e placas solares em São Paulo"
                                width={600}
                                height={400}
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute top-0 left-0 bg-blue-600 text-white px-4 py-2 rounded-br-lg">
                                <p className="font-bold font-inter">Desde 2010</p>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-4">
                                <p className="text-white font-semibold font-inter">Equipe técnica especializada em todas as marcas</p>
                            </div>
                        </div>
                    </div>

                    <div ref={contentRef} className="md:w-1/2 opacity-0">
                        <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3 sm:mb-4 leading-tight">Por que escolher a Temperatura Máxima?</h3>
                        <p className="text-gray-700 mb-4 font-inter">
                            A <span className="font-semibold text-blue-800">Temperatura Máxima</span> é referência em serviços para aquecedores a gás em São Paulo. Com mais de 13 anos de experiência, nossa equipe de técnicos certificados já atendeu mais de 5.000 clientes com excelência e profissionalismo.
                        </p>
                        <p className="text-gray-700 mb-4 font-inter">
                            Trabalhamos com todas as principais marcas do mercado (Rinnai, Bosch, Lorenzetti, Komeco) e oferecemos serviços completos de instalação, manutenção preventiva, manutenção corretiva e venda de equipamentos com as melhores condições.
                        </p>

                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                            <p className="text-yellow-800 font-medium font-inter">
                                Nosso compromisso é resolver seu problema no mesmo dia, com garantia por escrito e preço justo. Não deixamos nenhum cliente sem água quente!
                            </p>
                            <p className="text-yellow-600 mt-2 font-semibold font-inter">— Rafael, Fundador</p>
                        </div>

                        <div ref={valuesRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            <div className="bg-white p-4 rounded-lg shadow-md value-item hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="bg-blue-100 p-2 rounded-full">
                                        <i className="ri-shield-check-line text-blue-600 text-xl"></i>
                                    </div>
                                    <h5 className="font-semibold text-gray-800">Segurança Garantida</h5>
                                </div>
                                <p className="text-gray-600 font-inter">Técnicos certificados e serviços que seguem todas as normas ABNT.</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md value-item hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="bg-blue-100 p-2 rounded-full">
                                        <i className="ri-flashlight-line text-blue-600 text-xl"></i>
                                    </div>
                                    <h5 className="font-semibold text-gray-800">Rapidez no Atendimento</h5>
                                </div>
                                <p className="text-gray-600 font-inter">Atendimento emergencial em até 30 minutos em toda São Paulo.</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md value-item hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="bg-blue-100 p-2 rounded-full">
                                        <i className="ri-customer-service-2-line text-blue-600 text-xl"></i>
                                    </div>
                                    <h5 className="font-semibold text-gray-800">Suporte 24 horas emergencial</h5>
                                </div>
                                <p className="text-gray-600 font-inter">Atendimento todos os dias, inclusive finais de semana e feriados.</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md value-item hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="bg-blue-100 p-2 rounded-full">
                                        <i className="ri-award-line text-blue-600 text-xl"></i>
                                    </div>
                                    <h5 className="font-semibold text-gray-800">Garantia por Escrito</h5>
                                </div>
                                <p className="text-gray-600 font-inter">Todos os serviços com garantia documentada de até 12 meses.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={statsRef} className="mt-16 bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-6 text-center">Temperatura Máxima em Números</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="stat-item">
                            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">+5.000</div>
                            <p className="text-gray-700 font-inter">Clientes Satisfeitos</p>
                        </div>
                        <div className="stat-item">
                            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">+13</div>
                            <p className="text-gray-700 font-inter">Anos no Mercado</p>
                        </div>
                        <div className="stat-item">
                            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">+8.000</div>
                            <p className="text-gray-700 font-inter">Serviços Realizados</p>
                        </div>
                        <div className="stat-item">
                            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">98%</div>
                            <p className="text-gray-700 font-inter">Índice de Satisfação</p>
                        </div>
                    </div>
                </div>

                <div ref={ctaRef} className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-lg shadow-xl text-white text-center opacity-0">
                    <div className="inline-block bg-yellow-300 text-blue-900 px-4 py-1 rounded-full font-bold text-sm mb-4 font-inter">
                        OFERTA EXCLUSIVA
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 leading-tight">Primeira visita técnica com 50% de desconto!</h3>
                    <p className="text-blue-100 mb-6 max-w-3xl mx-auto font-inter">
                        Aproveite esta oferta por tempo limitado e garanta o melhor atendimento para seu aquecedor a gás.
                        <span className="font-bold"> Atendemos todas as marcas e modelos!</span>
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="https://wa.me/5511949047540?text=Quero%20aproveitar%20o%20desconto%20de%2050%%20na%20primeira%20visita%20técnica!"
                            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg transition-colors duration-300 font-medium font-inter"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="ri-whatsapp-line text-xl"></i>
                            GARANTIR MEU DESCONTO
                        </a>
                        <a
                            href="tel:5511949047540"
                            className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-800 px-6 py-3 rounded-full shadow-lg transition-colors duration-300 font-medium font-inter"
                        >
                            <i className="ri-phone-line text-xl"></i>
                            LIGAR AGORA
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
} 