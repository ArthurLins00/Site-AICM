window.addEventListener('scroll', function() {
    const fadeElements = document.querySelectorAll('.fade-in');

    fadeElements.forEach(function(fadeElement) {
        const position = fadeElement.getBoundingClientRect();
        
        if (position.top < window.innerHeight) {
            fadeElement.classList.add('visible');
        }
    });
});