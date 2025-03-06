"use client";

import { useState } from 'react';

export default function ContactButton({ number, type, title }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isWhatsApp = type === 'whatsapp';
    const href = isWhatsApp ? `https://wa.me/${number}` : `tel:${number}`;
    const label = title || (isWhatsApp ? 'WhatsApp' : 'Ligue Agora');
    const bgColor = 'bg-blue-700 hover:bg-blue-800';

    const handleButtonClick = (event) => {
        event.preventDefault();
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <a href="#" onClick={handleButtonClick} className={`inline-flex items-center ${bgColor} text-white px-6 py-2 rounded-full shadow-lg transition font-inter`}>
                {isWhatsApp ? <i className="ri-whatsapp-line mr-2"></i> : <i className="ri-phone-line mr-2"></i>}
                {label}
            </a>
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full mx-4 pointer-events-auto">
                        <h2 className="text-xl font-semibold mb-4 text-center">Escolha uma opção</h2>
                        <div className="flex justify-around mb-4">
                            <button onClick={() => window.location.href = `tel:${number}`} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-200 flex items-center font-inter">
                                <i className="ri-phone-line mr-2"></i> Ligar
                            </button>
                            <button onClick={() => window.location.href = `https://wa.me/${number}`} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors duration-200 flex items-center font-inter">
                                <i className="ri-whatsapp-line mr-2"></i> WhatsApp
                            </button>
                        </div>
                        <button onClick={closeModal} className="block mx-auto text-gray-500 hover:text-gray-700 transition-colors duration-200 flex items-center justify-center font-inter">
                            <i className="ri-close-line mr-1"></i> Fechar
                        </button>
                    </div>
                </div>
            )}
        </>
    );
} 