tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                display: ['"Space Grotesk"', 'sans-serif'],
                mono: ['"Fira Code"', 'monospace'],
            },
            colors: {
                darkbg: '#09090b',
                cardbg: '#18181b',
                brand: {
                    500: '#00f2ea',
                    600: '#0284c7',
                    900: '#0c4a6e',
                }
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'spin-slow': 'spin 15s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'pan-bg': 'pan-bg 40s linear infinite',
                'marquee': 'marquee 25s linear infinite',
                'blob': 'blob 15s infinite alternate',
                'fade-in-up': 'fadeInUp 1s ease-out forwards',
                'fade-in-scale': 'fadeInScale 1s ease-out forwards',
                'slide-down': 'slide-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                    '50%': { transform: 'translateY(-15px) rotate(2deg)' },
                },
                'pan-bg': {
                    '0%': { backgroundPosition: '0 0' },
                    '100%': { backgroundPosition: '100px 100px' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' }
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.05)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' }
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                fadeInScale: {
                    '0%': { opacity: '0', transform: 'scale(0.85) rotate(-5deg)' },
                    '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' }
                },
                'slide-down': {
                    '0%': { transform: 'translateY(-100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                }
            }
        }
    }
}
