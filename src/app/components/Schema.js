"use client";

import Script from "next/script";

export default function Schema() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Temperatura Máxima Aquecedores",
        "image": "https://temperaturamaximaaquecedores.com/img/logo.png",
        "url": "https://temperaturamaximaaquecedores.com",
        "telephone": "+551194904-7540",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "São Paulo",
            "addressLocality": "São Paulo",
            "addressRegion": "SP",
            "postalCode": "00000-000",
            "addressCountry": "BR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -23.5505,
            "longitude": -46.6333
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Saturday"
                ],
                "opens": "09:00",
                "closes": "14:00"
            }
        ],
        "sameAs": [
            "https://www.facebook.com/temperaturamaxima",
            "https://www.instagram.com/temperaturamaxima"
        ],
        "description": "Especialistas em instalação, manutenção e conserto de aquecedores a gás em São Paulo. Atendimento em até 30 minutos, técnicos certificados e garantia por escrito. Todas as marcas: Rinnai, Bosch, Lorenzetti e mais."
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Assistência Técnica de Aquecedores a Gás",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Temperatura Máxima Aquecedores"
        },
        "areaServed": {
            "@type": "City",
            "name": "São Paulo"
        },
        "serviceType": "Manutenção e Instalação de Aquecedores",
        "offers": {
            "@type": "Offer",
            "description": "Serviços de manutenção, instalação e reparo de aquecedores a gás",
            "availability": "https://schema.org/InStock"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serviços para Aquecedores",
            "itemListElement": [
                {
                    "@type": "OfferCatalog",
                    "name": "Manutenção Corretiva",
                    "description": "Diagnóstico e reparo de problemas em aquecedores a gás"
                },
                {
                    "@type": "OfferCatalog",
                    "name": "Manutenção Preventiva",
                    "description": "Serviço para evitar problemas futuros e garantir o funcionamento ideal"
                },
                {
                    "@type": "OfferCatalog",
                    "name": "Instalação",
                    "description": "Instalação profissional de aquecedores a gás"
                }
            ]
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Quanto tempo demora para um técnico chegar?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Em casos de emergência, nossos técnicos podem chegar em até 30 minutos em São Paulo. Para agendamentos normais, oferecemos horários no mesmo dia ou no dia seguinte, conforme sua preferência."
                }
            },
            {
                "@type": "Question",
                "name": "Vocês atendem todas as marcas de aquecedores?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim, atendemos todas as marcas disponíveis no mercado, incluindo Rinnai, Bosch, Lorenzetti, Komeco, Orbis, entre outras. Nossos técnicos são certificados e treinados para trabalhar com qualquer modelo."
                }
            },
            {
                "@type": "Question",
                "name": "Qual o valor da visita técnica?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A visita técnica para diagnóstico tem valor fixo de R$ 120,00, porém este valor é TOTALMENTE REVERTIDO caso o serviço seja aprovado. Ou seja, aprovando o orçamento, você não paga pela visita técnica."
                }
            },
            {
                "@type": "Question",
                "name": "Vocês oferecem garantia?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim, todos os nossos serviços possuem garantia por escrito de 6 meses, tanto para a mão de obra quanto para as peças instaladas. Trabalhamos apenas com peças originais de fábrica."
                }
            }
        ]
    };

    return (
        <>
            <Script
                id="local-business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
} 