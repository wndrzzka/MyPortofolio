document.addEventListener('DOMContentLoaded', () => {
    
    AOS.init({
        once: true,
        offset: 30,
        duration: 800, 
        easing: 'ease-out-cubic',
    });

    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const htmlElement = document.documentElement;

    if (localStorage.getItem('color-theme') === 'dark') {
        themeToggleLightIcon.classList.remove('hidden');
        htmlElement.classList.add('dark');
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
        htmlElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
    }

    themeToggleBtn.addEventListener('click', function() {
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            htmlElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    });

    if(window.innerWidth < 768) {
        const tiltElements = document.querySelectorAll('[data-tilt]');
        tiltElements.forEach(el => {
            el.vanillaTilt.destroy();
        });
    }

    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (window.matchMedia("(pointer: fine)").matches) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 250, fill: "forwards" });
        });

        document.querySelectorAll('.interactive-el').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.style.width = '60px';
                cursorOutline.style.height = '60px';
                cursorOutline.style.backgroundColor = 'rgba(0, 242, 234, 0.15)';
                cursorOutline.style.borderColor = 'rgba(0, 242, 234, 0.8)';
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.style.width = '40px';
                cursorOutline.style.height = '40px';
                cursorOutline.style.backgroundColor = 'transparent';
                cursorOutline.style.borderColor = 'rgba(0, 242, 234, 0.5)';
            });
        });
    }

    const scrollProgress = document.getElementById('scroll-progress');
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        const pos = document.documentElement.scrollTop;
        const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollValue = Math.round((pos * 100) / calcHeight);
        scrollProgress.style.width = `${scrollValue}%`;

        if (pos > 300) {
            backToTop.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
            backToTop.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
        } else {
            backToTop.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
            backToTop.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

});
