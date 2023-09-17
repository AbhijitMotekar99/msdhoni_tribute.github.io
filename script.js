ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.intro-content span,.tg-image', { origin: 'top' });
ScrollReveal().reveal('.timeline span,.timeline', { origin: 'bottom' });
ScrollReveal().reveal('.intro-image,.info-box1,.info-box3', { origin: 'left' });
ScrollReveal().reveal('.intro-content p,.info-box2,.info-box4', { origin: 'right' });