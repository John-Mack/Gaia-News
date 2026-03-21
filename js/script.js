// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = navMenu.classList.contains('active') 
            ? 'rotate(45deg) translate(5px, 5px)' 
            : 'none';
        spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
        spans[2].style.transform = navMenu.classList.contains('active') 
            ? 'rotate(-45deg) translate(7px, -6px)' 
            : 'none';
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// Copy Server IP Function
function copyIP() {
    const ipElement = document.getElementById('serverIP');
    const ip = ipElement.textContent;
    const btn = document.querySelector('.copy-btn');
    
    navigator.clipboard.writeText(ip).then(() => {
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.background = '#4caf50';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Copy error:', err);
        alert('Unable to copy IP. Please copy manually: ' + ip);
    });
}

// Open External Store
function openExternalStore(product) {
    const storeURL = 'https://heirofgaia.tip4serv.com/';
    window.open(storeURL, '_blank');
}

// Open Discord
function openDiscord() {
    const discordURL = 'https://discord.gg/JfHbU9vkr3';
    window.open(discordURL, '_blank');
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Add scroll animation to cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and animate on scroll
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.card, .command-card, .rank-card, .store-card, .rule-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add particle effect to hero section (optional enhancement)
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    for (let i = 0; i < 600; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 4 + 1;
        const duration = 6 + Math.random() * 14;
        const delay = Math.random() * 8;
        const opacity = 0.3 + Math.random() * 0.7;
        const hue = Math.random() > 0.5 ? '212, 175, 55' : '139, 69, 19';

        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(${hue}, ${opacity});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: 0;
            animation: float${i % 3} ${duration}s ${delay}s infinite ease-in-out;
            box-shadow: 0 0 ${size * 3}px rgba(${hue}, 0.6);
        `;
        hero.appendChild(particle);
    }
}

// Add CSS animation for particles
const style = document.createElement('style');
const drift0 = (Math.random() * 100 - 50).toFixed(0);
const drift1 = (Math.random() * 100 - 50).toFixed(0);
const drift2 = (Math.random() * 100 - 50).toFixed(0);
style.textContent = `
    @keyframes float0 {
        0%   { transform: translateY(0) translateX(0); opacity: 0; }
        15%  { opacity: 1; }
        85%  { opacity: 0.8; }
        100% { transform: translateY(-140px) translateX(${drift0}px); opacity: 0; }
    }
    @keyframes float1 {
        0%   { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
        20%  { opacity: 1; }
        80%  { opacity: 0.6; }
        100% { transform: translateY(-180px) translateX(${drift1}px) scale(1.5); opacity: 0; }
    }
    @keyframes float2 {
        0%   { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
        10%  { opacity: 1; }
        90%  { opacity: 0.9; }
        100% { transform: translateY(-120px) translateX(${drift2}px) rotate(180deg); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize particles on homepage
if (document.querySelector('.hero')) {
    createParticles();
}

// Update current year in footer
const currentYear = new Date().getFullYear();
document.querySelectorAll('.footer p').forEach(p => {
    p.textContent = p.textContent.replace('2026', currentYear);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

console.log('Heir of Gaia - Website loaded successfully!');
