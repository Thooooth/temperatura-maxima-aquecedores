"use client";

import { useState, useEffect, useRef } from 'react';
import { animate, stagger, inView } from "motion";
import Image from 'next/image';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);
    const [countdown, setCountdown] = useState(10);
    const titleRef = useRef(null);
    const faqsRef = useRef(null);
    const ctaRef = useRef(null);
    const bannerRef = useRef(null);

    const faqs = [
        {
            question: "Quanto custa o conserto do meu aquecedor a gás?",
            answer: "O valor depende do problema específico, mas nossos preços são transparentes e competitivos. Fazemos diagnóstico gratuito e enviamos orçamento detalhado antes de qualquer serviço. Temos condições especiais para pagamento à vista e parcelamos em até 12x no cartão."
        },
        {
            question: "Qual é a vida útil de um aquecedor a gás?",
            answer: "Aquecedores Rinnai, Bosch e outras marcas de qualidade duram entre 10 e 15 anos com manutenção adequada. Realizamos manutenção preventiva que pode estender essa vida útil em até 5 anos, economizando milhares de reais em substituição."
        },
        {
            question: "Com que frequência devo fazer a manutenção do meu aquecedor?",
            answer: "Recomendamos manutenção preventiva anual para garantir segurança e eficiência. Em regiões com água calcária ou uso intenso, a manutenção semestral é ideal. Nosso plano de manutenção programada oferece 15% de desconto e prioridade no atendimento."
        },
        {
            question: "Quais são os sinais de que meu aquecedor precisa de manutenção URGENTE?",
            answer: "Atenção aos sinais de perigo: água não esquenta adequadamente, chama amarelada (deveria ser azul), ruídos estranhos, vazamentos, odor de gás, aumento no consumo ou manchas de fuligem. Se notar qualquer um destes, entre em contato IMEDIATAMENTE para evitar riscos à segurança."
        },
        {
            question: "É possível converter meu aquecedor para outro tipo de gás?",
            answer: "Sim! Realizamos conversão de GLP para gás natural e vice-versa com segurança e garantia. Este serviço deve ser realizado apenas por técnicos certificados como os nossos, que garantem a calibração correta e segurança do equipamento após a conversão."
        },
        {
            question: "Qual a diferença entre aquecedor de passagem e aquecedor de acumulação?",
            answer: "O aquecedor de passagem (mais comum em residências) esquenta a água instantaneamente, sendo compacto e econômico. O aquecedor de acumulação (boiler) mantém um reservatório de água quente, ideal para uso simultâneo em vários pontos. Podemos avaliar qual é o melhor para sua necessidade específica."
        },
        {
            question: "Vocês atendem emergências em finais de semana e feriados?",
            answer: "SIM! Oferecemos atendimento emergencial 24 horas, 7 dias por semana, incluindo finais de semana e feriados. Nossa equipe de plantão está sempre pronta para resolver seu problema com rapidez e eficiência, garantindo que você não fique sem água quente em momentos críticos."
        },
        {
            question: "Quais formas de pagamento vocês aceitam?",
            answer: "Aceitamos todas as principais formas de pagamento: dinheiro, PIX, cartões de débito e crédito (parcelamento em até 12x), transferência bancária e boleto. Oferecemos 10% de desconto para pagamentos à vista e condições especiais para condomínios e empresas."
        }
    ];

    useEffect(() => {
        // Contador regressivo para o banner de emergência
        const timer = setInterval(() => {
            setCountdown(prev => prev > 0 ? prev - 1 : 10);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

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

        if (faqsRef.current) {
            inView(faqsRef.current, () => {
                const items = faqsRef.current.querySelectorAll('.faq-item');
                animate(
                    items,
                    { opacity: [0, 1], y: [20, 0] },
                    { duration: 0.5, delay: stagger(0.1) }
                );
            });
        }

        if (ctaRef.current) {
            inView(ctaRef.current, () => {
                animate(
                    ctaRef.current,
                    { opacity: [0, 1], scale: [0.9, 1] },
                    { duration: 0.5, delay: 0.5 }
                );
            });
        }

        if (bannerRef.current) {
            inView(bannerRef.current, () => {
                animate(
                    bannerRef.current,
                    { opacity: [0, 1], y: [30, 0] },
                    { duration: 0.8 }
                );
            });
        }
    }, []);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50 relative">
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div ref={titleRef} className="text-center mb-12 opacity-0">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-3 sm:mb-4 leading-tight tracking-tight">Dúvidas Frequentes sobre Aquecedores a Gás</h2>
                    <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto font-inter">
                        Respostas rápidas para suas principais dúvidas sobre manutenção, instalação e reparo de aquecedores.
                        Não encontrou o que procura? Fale diretamente com nossos especialistas.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 mb-12">
                    <div ref={faqsRef} className="lg:w-2/3">
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-4 faq-item opacity-0">
                                <button
                                    className={`flex justify-between items-center w-full p-5 text-left font-semibold rounded-lg ${openIndex === index ? 'bg-blue-600 text-white' : 'bg-white text-blue-800 hover:bg-blue-100'
                                        } transition-colors duration-200`}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span className="font-inter">{faq.question}</span>
                                    <i className={`ri-arrow-down-s-line text-xl transform ${openIndex === index ? 'rotate-180' : ''} transition-transform duration-200`}></i>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="p-5 bg-white border border-t-0 rounded-b-lg">
                                        <p className="text-gray-700 font-inter">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div ref={bannerRef} className="lg:w-1/3 opacity-0">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full border-2 border-red-500">
                            <div className="relative h-64">
                                <Image
                                    src="/img/aquecedor_rinnai_2.jpg"
                                    alt="Conserto e Manutenção de Aquecedor a Gás em São Paulo"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-red-600 text-white rounded-full w-16 h-16 flex flex-col items-center justify-center transform rotate-12 shadow-lg border-2 border-white">
                                    <span className="text-xs font-bold font-inter">DESCONTO</span>
                                    <span className="text-xl font-bold font-inter">15%</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent flex items-end">
                                    <div className="p-4 text-white">
                                        <div className="flex items-center mb-2">
                                            <i className="ri-error-warning-fill text-red-500 text-2xl mr-2 animate-pulse"></i>
                                            <h3 className="text-xl font-bold leading-tight">EMERGÊNCIA: Aquecedor não funciona?</h3>
                                        </div>
                                        <p className="text-blue-100 font-inter text-lg">Técnicos a caminho em até <span className="font-bold text-yellow-300">30 minutos!</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 rounded-r-md">
                                    <div className="flex items-start">
                                        <i className="ri-alarm-warning-line text-red-600 text-xl mr-2 mt-1"></i>
                                        <div>
                                            <p className="text-red-800 font-medium font-inter">Sem água quente é um problema SÉRIO!</p>
                                            <p className="text-red-700 text-sm font-inter mt-1">Atendimento 24h/7 dias - Técnicos em toda São Paulo</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="bg-yellow-50 p-3 rounded-md mb-3">
                                        <p className="text-sm text-yellow-800 font-inter"><i className="ri-timer-line mr-1"></i> <span className="font-semibold">Tempo médio de chegada:</span> 15-30 minutos</p>
                                    </div>
                                    <div className="bg-blue-50 p-3 rounded-md mb-3 flex items-center justify-between">
                                        <p className="text-sm text-blue-800 font-inter"><span className="font-semibold">Técnicos disponíveis agora:</span> 3</p>
                                        <div className="flex items-center">
                                            <p className="text-sm text-red-600 font-bold font-inter">Oferta expira em: {countdown}s</p>
                                        </div>
                                    </div>
                                    <a
                                        href="https://wa.me/5511949047540?text=EMERGÊNCIA:%20Meu%20aquecedor%20parou%20de%20funcionar.%20Preciso%20de%20assistência%20URGENTE!"
                                        className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-lg transition-colors duration-300 w-full font-medium font-inter"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="ri-whatsapp-line text-xl"></i>
                                        CHAMAR TÉCNICO AGORA
                                    </a>
                                    <a
                                        href="tel:5511949047540"
                                        className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-3 rounded-full shadow-lg transition-colors duration-300 w-full font-medium font-inter"
                                    >
                                        <i className="ri-phone-line text-xl"></i>
                                        LIGAR: (11) 94904-7540
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={ctaRef} className="text-center opacity-0">
                    <h3 className="text-2xl font-semibold text-blue-800 mb-4 leading-tight">Ainda tem dúvidas?</h3>
                    <p className="text-gray-700 mb-6 font-inter">
                        Nossa equipe de especialistas está pronta para ajudar com qualquer questão sobre seu aquecedor a gás.
                        Entre em contato agora mesmo para um diagnóstico gratuito.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="https://wa.me/5511949047540?text=Olá,%20tenho%20uma%20dúvida%20sobre%20meu%20aquecedor%20a%20gás.%20Podem%20me%20ajudar?"
                            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg transition-colors duration-300 font-medium font-inter"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="ri-whatsapp-line text-xl"></i>
                            Tirar Dúvidas no WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}