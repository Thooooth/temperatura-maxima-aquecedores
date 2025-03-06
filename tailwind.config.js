/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'xs': '0.75rem',     // 12px
                'sm': '0.875rem',    // 14px
                'base': '1rem',      // 16px
                'lg': '1.125rem',    // 18px
                'xl': '1.25rem',     // 20px
                '2xl': '1.5rem',     // 24px
                '3xl': '1.875rem',   // 30px
                '4xl': '2.25rem',    // 36px
                '5xl': '3rem',       // 48px
                '6xl': '3.75rem',    // 60px
            },
            lineHeight: {
                'tight': '1.2',
                'snug': '1.3',
                'normal': '1.5',
                'relaxed': '1.6',
            },
            letterSpacing: {
                'tighter': '-0.05em',
                'tight': '-0.025em',
                'normal': '0',
                'wide': '0.025em',
                'wider': '0.05em',
            },
            screens: {
                'xs': '480px',
            },
        },
    },
    plugins: [],
} 