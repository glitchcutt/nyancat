// Smooth scrolling for navigation links
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

// Navbar hide on scroll
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    // Hide navbar on scroll down
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
});

// Create floating Nyan Cats - SIMPLE CODE THAT WORKS
function createFloatingNyans() {
    const container = document.getElementById('floating-nyans');
    const numberOfNyans = 8;
    
    container.innerHTML = '';

    // Pre-defined and well spaced heights
    const heights = [5, 20, 30, 40, 50, 60, 70, 80];
    
    for (let i = 0; i < numberOfNyans; i++) {
        const nyan = document.createElement('img');
        nyan.src = 'images/nyan.gif';
        nyan.className = 'floating-nyan';
        nyan.alt = 'Floating Nyan Cat';
        
        // EACH WITH FIXED AND SPACED HEIGHT
        const startPositionY = heights[i];
        
        // RANDOM SPEEDS BUT NOT TOO DIFFERENT
        const duration = Math.random() * 40 + 20; // 20-60 seconds
        
        // RANDOM DELAYS SO THEY DON'T ALL APPEAR TOGETHER
        const delay = Math.random() * 0; // 0 seconds delay
        
        const size = Math.random() * 20 + 80;
        
        nyan.style.cssText = `
            top: ${startPositionY}%;
            left: -150px;
            height: ${size}px;
            animation: floatNyanStraight ${duration}s linear ${delay}s infinite;
            opacity: 0.5;
        `;
        
        container.appendChild(nyan);
    }
}

// Add subtle animation to link cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
        }
    });
}, observerOptions);

// Observe link cards and memes
document.querySelectorAll('.link-card, .meme-card, .about-text p, .footer p').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px) scale(0.95)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(element);
});

// Create meme gallery
function createMemeGallery() {
    const memesGrid = document.getElementById('memes-grid');
    const totalMemes = 20;
    
    for (let i = 1; i <= totalMemes; i++) {
        const memeCard = document.createElement('div');
        memeCard.className = 'meme-card';
        
        const memeImg = document.createElement('img');
        memeImg.className = 'meme-img';
        memeImg.src = `images/memes/${i}.jpg`;
        memeImg.alt = `Nyan Cat Meme ${i}`;
        memeImg.loading = 'lazy';
        
        memeCard.appendChild(memeImg);
        memesGrid.appendChild(memeCard);
        
        // Add observer for animation
        memeCard.style.opacity = '0';
        memeCard.style.transform = 'translateY(20px) scale(0.95)';
        memeCard.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(memeCard);
    }
}

// Typewriter effect on subtitle
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    
    typing();
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    createFloatingNyans();
    createMemeGallery();
    
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        const originalText = subtitle.textContent;
        typeWriter(subtitle, originalText, 40);
    }
});

// Console welcome message
console.log('%c🎮 NYAN CAT RETRO EDITION - PRESS START! 🌈', 'color: #8b5cf6; font-size: 16px; font-weight: bold;');
console.log('%cJoin the legendary pixelated meme revolution!', 'color: #06b6d4; font-size: 14px;');

// Resize effect to adjust floating nyans
window.addEventListener('resize', function() {
    createFloatingNyans();
});

// Preload images for better performance
function preloadImages() {
    const imageUrls = [
        'images/nyan.gif',
        'images/galaxy.png'
    ];
    
    for (let i = 1; i <= 20; i++) {
        imageUrls.push(`images/memes/${i}.jpg`);
    }
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

document.addEventListener('DOMContentLoaded', preloadImages);
