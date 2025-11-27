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

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(10, 10, 15, 0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(10, 10, 15, 0.95)';
    }
});

// Add subtle animation to link cards on scroll
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

// Observe link cards
document.querySelectorAll('.link-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Create stars in background
function createStars() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    
    document.body.appendChild(starsContainer);
    
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * 3;
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 5;
        
        star.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.7 + 0.1};
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
        `;
        
        starsContainer.appendChild(star);
    }
}

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
    }
}

// Add twinkle animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 0.2; }
        50% { opacity: 1; }
    }
`;
document.head.appendChild(style);

// Parallax effect on stars
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const stars = document.querySelector('.stars');
    if (stars) {
        stars.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

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
    createStars();
    createMemeGallery();
    
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        const originalText = subtitle.textContent;
        typeWriter(subtitle, originalText, 30);
    }
    
    // Add mouse move effect to Nyan Cat
    const nyanCat = document.querySelector('.nyan-cat');
    if (nyanCat) {
        document.addEventListener('mousemove', function(e) {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            nyanCat.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX * 0.1}deg)`;
        });
    }
});

// Console welcome message
console.log('%c🚀 NYAN CAT MEMECOIN - TO THE MOON! 🌈', 'color: #8b5cf6; font-size: 16px; font-weight: bold;');
console.log('%cJoin the legendary meme revolution!', 'color: #06b6d4; font-size: 14px;');

// Resize effect to adjust stars
window.addEventListener('resize', function() {
    const stars = document.querySelector('.stars');
    if (stars) {
        stars.innerHTML = '';
        createStars();
    }
});