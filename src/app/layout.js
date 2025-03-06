import { Inter } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Temperatura Máxima Aquecedores | Assistência Técnica 24h em São Paulo",
  description: "Especialistas em instalação, manutenção e conserto de aquecedores a gás em São Paulo. Atendimento em até 30 minutos, técnicos certificados e garantia por escrito. Todas as marcas: Rinnai, Bosch, Lorenzetti e mais.",
  keywords: "aquecedores a gás, instalação de aquecedor, manutenção de aquecedor, conserto de aquecedor, São Paulo, aquecedor de água, assistência técnica, Rinnai, Bosch, Lorenzetti, atendimento emergencial, aquecedor não liga, aquecedor com vazamento",
  authors: [{ name: "Temperatura Máxima Aquecedores" }],
  creator: "Temperatura Máxima Aquecedores",
  publisher: "Temperatura Máxima Aquecedores",
  alternates: {
    canonical: 'https://temperaturamaximaaquecedores.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Temperatura Máxima Aquecedores | Assistência Técnica 24h em São Paulo",
    description: "Instalação, manutenção e conserto de aquecedores a gás com atendimento em até 30 minutos. Técnicos certificados e garantia por escrito em São Paulo e Grande SP.",
    url: "https://temperaturamaximaaquecedores.com",
    siteName: "Temperatura Máxima Aquecedores",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Temperatura Máxima Aquecedores - Assistência Técnica em São Paulo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Temperatura Máxima Aquecedores | Assistência Técnica 24h em São Paulo',
    description: 'Instalação, manutenção e conserto de aquecedores a gás com atendimento em até 30 minutos em São Paulo.',
    images: ['/img/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/img/favicon.svg' }
    ],
    apple: [
      { url: '/img/favicon.svg' }
    ],
  },
  verification: {
    google: 'adicione-seu-codigo-de-verificacao',
  },
  category: 'assistência técnica',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/img/favicon.svg" type="image/svg+xml" />
        <meta name="geo.region" content="BR-SP" />
        <meta name="geo.placename" content="São Paulo" />
      </head>
      <body
        className={`${inter.variable} antialiased font-inter text-base`}
      >
        {children}
      </body>
    </html>
  );
}
