document.addEventListener("DOMContentLoaded", function () {
    const songContainers = document.querySelectorAll('.song-container');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, options);

    songContainers.forEach(container => {
        observer.observe(container);
    });
});

function toggleFlip(element) {
    element.closest('.song-container').classList.toggle('flipped');
}