"use client";

import { useState, useEffect, useRef } from 'react';
import { animate, stagger, inView } from "motion";

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "Carlos Silva",
            location: "São Paulo, SP",
            rating: 5,
            text: "Meu aquecedor Rinnai parou de funcionar num domingo à noite. Liguei para a Temperatura Máxima e em 25 minutos o técnico já estava aqui. Problema resolvido na hora! Serviço impecável e preço justo.",
            color: "bg-blue-500",
            service: "Atendimento Emergencial"
        },
        {
            name: "Ana Oliveira",
            location: "Guarulhos, SP",
            rating: 5,
            text: "Instalaram meu aquecedor Bosch em menos de 3 horas, com acabamento perfeito e sem sujeira. O técnico explicou tudo sobre o funcionamento e me deu dicas valiosas para economizar gás. Super recomendo!",
            color: "bg-green-500",
            service: "Instalação"
        },
        {
            name: "Roberto Mendes",
            location: "Osasco, SP",
            rating: 5,
            text: "Faço manutenção preventiva anual com a Temperatura Máxima há 5 anos. Meu aquecedor Lorenzetti nunca deu problema e continua funcionando como novo. O investimento na manutenção compensa muito!",
            color: "bg-purple-500",
            service: "Manutenção Preventiva"
        },
        {
            name: "Juliana Costa",
            location: "Santo André, SP",
            rating: 5,
            text: "Meu aquecedor estava com vazamento de gás e representava um perigo real. A equipe chegou rapidamente, identificou o problema e resolveu na hora. Profissionais sérios que priorizam a segurança do cliente.",
            color: "bg-orange-500",
            service: "Reparo Emergencial"
        },
        {
            name: "Marcelo Almeida",
            location: "São Bernardo do Campo, SP",
            rating: 5,
            text: "Comprei um aquecedor Rinnai com eles e economizei mais de R$800 comparado a outras lojas. A instalação foi incluída no preço e feita no mesmo dia. Atendimento nota 10 do início ao fim!",
            color: "bg-red-500",
            service: "Venda e Instalação"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const testimonialsRef = useRef(null);
    const whyChooseRef = useRef(null);
    const reviewsRef = useRef(null);
    const ctaRef = useRef(null);
    const statsRef = useRef(null);
    const productsRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

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

        if (subtitleRef.current) {
            inView(subtitleRef.current, () => {
                animate(
                    subtitleRef.current,
                    { opacity: [0, 1], y: [30, 0] },
                    { duration: 0.8 }
                );
            });
        }

        if (testimonialsRef.current) {
            inView(testimonialsRef.current, () => {
                animate(
                    testimonialsRef.current,
                    { opacity: [0, 1], x: [-30, 0] },
                    { duration: 0.8 }
                );
            });
        }

        if (whyChooseRef.current) {
            inView(whyChooseRef.current, () => {
                animate(
                    whyChooseRef.current,
                    { opacity: [0, 1], x: [30, 0] },
                    { duration: 0.8 }
                );

                const items = whyChooseRef.current.querySelectorAll('.why-choose-item');
                animate(
                    items,
                    { opacity: [0, 1], y: [20, 0] },
                    { duration: 0.5, delay: stagger(0.1, { start: 0.3 }) }
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

        if (statsRef.current) {
            inView(statsRef.current, () => {
                animate(
                    statsRef.current,
                    { opacity: [0, 1], y: [30, 0] },
                    { duration: 0.8 }
                );

                const items = statsRef.current.querySelectorAll('.stat-item');
                animate(
                    items,
                    { opacity: [0, 1], scale: [0.9, 1] },
                    { duration: 0.5, delay: stagger(0.1) }
                );
            });
        }

        if (productsRef.current) {
            inView(productsRef.current, () => {
                const items = productsRef.current.querySelectorAll('.product-item');
                animate(
                    items,
                    { opacity: [0, 1], y: [30, 0], scale: [0.95, 1] },
                    { duration: 0.6, delay: stagger(0.2) }
                );
            });
        }

        if (reviewsRef.current) {
            inView(reviewsRef.current, () => {
                animate(
                    reviewsRef.current,
                    { opacity: [0, 1], y: [30, 0] },
                    { duration: 0.8 }
                );
            });
        }
    }, []);

    // Efeito de transição suave quando o índice ativo muda
    useEffect(() => {
        if (testimonialsRef.current) {
            animate(
                testimonialsRef.current,
                { opacity: [0.7, 1], scale: [0.95, 1] },
                { duration: 0.5 }
            );
        }
    }, [activeIndex]);

    return (
        <section id="depoimentos" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <header className="text-center mb-10 sm:mb-16">
                    <h2 ref={titleRef} className="text-3xl sm:text-4xl font-bold text-blue-800 mb-3 sm:mb-4 opacity-0 leading-tight tracking-tight">O Que Nossos Clientes Dizem</h2>
                    <p ref={subtitleRef} className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto opacity-0 font-inter">
                        Confira os depoimentos de clientes satisfeitos com nossos serviços de instalação,
                        manutenção e reparo de aquecedores a gás em São Paulo.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div ref={testimonialsRef} className="relative opacity-0">
                        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 border-2 border-blue-100 ${testimonials[activeIndex].color} font-inter`}>
                                    {testimonials[activeIndex].name.split(' ').map(name => name[0]).join('')}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">{testimonials[activeIndex].name}</h3>
                                    <p className="text-gray-600 text-sm font-inter">{testimonials[activeIndex].location}</p>
                                    <div className="flex mt-1">
                                        {[...Array(5)].map((_, i) => (
                                            <i key={i} className={`ri-star-fill ${i < testimonials[activeIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`}></i>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-inter">
                                    {testimonials[activeIndex].service}
                                </span>
                            </div>
                            <p className="text-gray-700 italic font-inter">{testimonials[activeIndex].text}</p>
                            <div className="mt-4 text-center">
                                <a
                                    href="https://wa.me/5511949047540?text=Quero%20um%20atendimento%20de%20qualidade%20como%20vi%20nos%20depoimentos!"
                                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium font-inter"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="ri-whatsapp-line mr-1"></i> Quero um atendimento assim!
                                </a>
                            </div>
                        </div>

                        <div className="flex justify-center mt-6 gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                                    aria-label={`Ver depoimento ${index + 1}`}
                                ></button>
                            ))}
                        </div>
                    </div>

                    <div ref={whyChooseRef} className="w-full md:w-full bg-blue-700 p-6 sm:p-8 rounded-lg shadow-lg text-white opacity-0">
                        <h3 className="text-2xl font-semibold mb-4 leading-tight">Por que somos a melhor escolha em SP</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start why-choose-item">
                                <i className="ri-check-line text-yellow-300 text-xl mr-2 mt-1"></i>
                                <div>
                                    <h4 className="font-semibold text-lg">Técnicos Certificados</h4>
                                    <p className="text-blue-100 font-inter">Equipe especializada em todas as marcas de aquecedores com certificação oficial.</p>
                                </div>
                            </li>
                            <li className="flex items-start why-choose-item">
                                <i className="ri-check-line text-yellow-300 text-xl mr-2 mt-1"></i>
                                <div>
                                    <h4 className="font-semibold text-lg">Atendimento Emergencial</h4>
                                    <p className="text-blue-100 font-inter">Técnicos em toda São Paulo prontos para atender em até 30 minutos.</p>
                                </div>
                            </li>
                            <li className="flex items-start why-choose-item">
                                <i className="ri-check-line text-yellow-300 text-xl mr-2 mt-1"></i>
                                <div>
                                    <h4 className="font-semibold text-lg">Garantia por Escrito</h4>
                                    <p className="text-blue-100 font-inter">Todos os serviços com garantia documentada de até 12 meses.</p>
                                </div>
                            </li>
                            <li className="flex items-start why-choose-item">
                                <i className="ri-check-line text-yellow-300 text-xl mr-2 mt-1"></i>
                                <div>
                                    <h4 className="font-semibold text-lg">Preço Justo e Transparente</h4>
                                    <p className="text-blue-100 font-inter">Orçamento detalhado antes de qualquer serviço, sem surpresas.</p>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-6">
                            <a
                                href="https://wa.me/5511949047540?text=Quero%20contratar%20o%20melhor%20serviço%20para%20meu%20aquecedor!"
                                className="inline-flex items-center bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-full shadow-lg transition-colors duration-300 font-medium font-inter"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="ri-whatsapp-line mr-2 text-xl"></i>
                                Solicitar Orçamento
                            </a>
                        </div>
                    </div>
                </div>

                <div ref={reviewsRef} className="mt-12 sm:mt-16 opacity-0">
                    <div className="bg-blue-50 p-6 sm:p-8 rounded-lg">
                        <h3 className="text-2xl font-semibold text-blue-800 mb-4 leading-tight">Avaliações em Plataformas</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                            <div className="bg-white p-4 rounded-lg shadow-md text-center">
                                <div className="flex justify-center mb-2">
                                    <i className="ri-google-fill text-3xl text-[#4285F4]"></i>
                                </div>
                                <div className="flex justify-center mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className="ri-star-fill text-yellow-400"></i>
                                    ))}
                                </div>
                                <p className="text-gray-800 font-semibold">4.9/5</p>
                                <p className="text-gray-600 text-sm font-inter">142 avaliações</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md text-center">
                                <div className="flex justify-center mb-2">
                                    <i className="ri-facebook-fill text-3xl text-[#1877F2]"></i>
                                </div>
                                <div className="flex justify-center mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className="ri-star-fill text-yellow-400"></i>
                                    ))}
                                </div>
                                <p className="text-gray-800 font-semibold">4.8/5</p>
                                <p className="text-gray-600 text-sm font-inter">98 avaliações</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md text-center">
                                <div className="flex justify-center mb-2">
                                    <i className="ri-instagram-fill text-3xl text-[#E1306C]"></i>
                                </div>
                                <div className="flex justify-center mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className={`ri-star-fill ${i < 5 ? 'text-yellow-400' : 'text-gray-300'}`}></i>
                                    ))}
                                </div>
                                <p className="text-gray-800 font-semibold">4.9/5</p>
                                <p className="text-gray-600 text-sm font-inter">76 avaliações</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md text-center">
                                <div className="flex justify-center mb-2">
                                    <i className="ri-whatsapp-fill text-3xl text-[#25D366]"></i>
                                </div>
                                <div className="flex justify-center mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className="ri-star-fill text-yellow-400"></i>
                                    ))}
                                </div>
                                <p className="text-gray-800 font-semibold">5.0/5</p>
                                <p className="text-gray-600 text-sm font-inter">215 avaliações</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={ctaRef} className="text-center mt-12 bg-gradient-to-r from-blue-700 to-blue-900 p-8 rounded-lg shadow-xl opacity-0">
                    <div className="inline-block bg-yellow-300 text-blue-900 px-4 py-1 rounded-full font-bold text-sm mb-4 animate-pulse font-inter">
                        PROMOÇÃO LIMITADA
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Manutenção Preventiva com 15% OFF</h3>
                    <p className="text-blue-100 mb-6 font-inter">
                        Agende agora sua manutenção preventiva e garanta água quente sem problemas o ano todo!
                        <span className="font-bold"> Oferta válida por tempo limitado.</span>
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="https://wa.me/5511949047540?text=Quero%20agendar%20manutenção%20preventiva%20com%2015%%20de%20desconto!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg font-inter"
                        >
                            <i className="ri-whatsapp-line text-xl"></i>
                            GARANTIR MEU DESCONTO
                        </a>
                        <a
                            href="tel:5511949047540"
                            className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-800 px-6 py-3 rounded-full shadow-lg transition-colors duration-300 font-inter"
                        >
                            <i className="ri-phone-line text-xl"></i>
                            LIGAR AGORA
                        </a>
                    </div>
                    <p className="text-blue-200 text-sm mt-4 font-inter">
                        Atendemos toda São Paulo e região metropolitana
                    </p>
                </div>
            </div>
        </section>
    );
} 