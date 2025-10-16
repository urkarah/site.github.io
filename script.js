// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header background on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // Animate stats on scroll
    const stats = document.querySelectorAll('.stat h3');
    const animateStats = () => {
        stats.forEach(stat => {
            const rect = stat.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const finalValue = stat.textContent;
                const numericValue = parseInt(finalValue.replace(/\D/g, ''));
                if (numericValue && !stat.classList.contains('animated')) {
                    stat.classList.add('animated');
                    animateValue(stat, 0, numericValue, 2000, finalValue);
                }
            }
        });
    };

    const animateValue = (element, start, end, duration, suffix) => {
        const range = end - start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / range));
        let current = start;
        
        const timer = setInterval(() => {
            current += increment * (range / 100);
            if (current >= end) {
                current = end;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + suffix.replace(/\d/g, '');
        }, stepTime);
    };

    window.addEventListener('scroll', animateStats);
    animateStats(); // Check on load

    // Button hover effects
    const buttons = document.querySelectorAll('.main-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add loading animation
    document.body.style.opacity = '0';
    window.addEventListener('load', () => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    });

    // SEO tracking (placeholder for analytics)
    console.log('Сайт Асхаба Тамаева загружен. Ключевые слова: Тамаев, ракетка тамаев, печенька тамаев');
}); 