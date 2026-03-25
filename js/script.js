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


// ===== IMAGE CAROUSEL FUNCTIONALITY =====

// Gallery images configuration
const galleryImages = [
    'gallery/image1.png',
    'gallery/image2.png',
    'gallery/image3.png',
    'gallery/image4.png',
    'gallery/image5.png',
    'gallery/image6.png',
    'gallery/image7.png'
    // Add more images as needed
];

let currentIndex = 0;

// Initialize carousel
function initCarousel() {
    const carouselTrack = document.getElementById('carouselTrack');
    if (!carouselTrack) return;

    // Clear existing items
    carouselTrack.innerHTML = '';

    // Create carousel items
    galleryImages.forEach((imagePath, index) => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        if (index === 0) item.classList.add('active');
        
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = `Gallery image ${index + 1}`;
        img.onerror = function() {
            // Fallback if image doesn't exist
            this.src = 'images/placeholder.png';
        };
        
        item.appendChild(img);
        item.onclick = () => openImageModal(imagePath);
        carouselTrack.appendChild(item);
    });

    updateCarousel();
}

// Scroll carousel
function scrollCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    if (items.length === 0) return;

    // Remove active class from current item
    items[currentIndex].classList.remove('active');

    // Update index
    currentIndex += direction;
    
    // Loop around
    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    } else if (currentIndex >= items.length) {
        currentIndex = 0;
    }

    // Add active class to new item
    items[currentIndex].classList.add('active');

    updateCarousel();
}

// Update carousel position
function updateCarousel() {
    const track = document.getElementById('carouselTrack');
    const items = document.querySelectorAll('.carousel-item');
    if (!track || items.length === 0) return;

    // Calculate offset to center the active item
    const activeItem = items[currentIndex];
    const trackWidth = track.offsetWidth;
    const itemWidth = activeItem.offsetWidth;
    const itemOffset = activeItem.offsetLeft;
    
    // Center the active item
    const offset = -(itemOffset - (trackWidth / 2) + (itemWidth / 2));
    track.style.transform = `translateX(${offset}px)`;
}

// Open image in modal
function openImageModal(imagePath) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    modal.classList.add('show');
    modalImg.src = imagePath;
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('show');
    
    // Restore body scroll
    document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Prevent modal close when clicking on image
document.getElementById('modalImage')?.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Auto-scroll carousel (optional)
let autoScrollInterval;

function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        scrollCarousel(1);
    }, 5000); // Change image every 5 seconds
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

// Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('carouselTrack')) {
        initCarousel();
        
        // Optional: Start auto-scroll
        startAutoScroll();
        
        // Stop auto-scroll on user interaction
        document.querySelector('.carousel-container')?.addEventListener('mouseenter', stopAutoScroll);
        document.querySelector('.carousel-container')?.addEventListener('mouseleave', startAutoScroll);
    }
});

// Update carousel on window resize
window.addEventListener('resize', () => {
    updateCarousel();
});

// Touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.querySelector('.carousel-wrapper')?.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.querySelector('.carousel-wrapper')?.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            scrollCarousel(1); // Swipe left
        } else {
            scrollCarousel(-1); // Swipe right
        }
    }
}

console.log('Image carousel initialized!');
