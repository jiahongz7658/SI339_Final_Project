function toggleFlip(element) {
    element.classList.toggle("flipped");
}

document.addEventListener("DOMContentLoaded", function () {
    const albumContainers = document.querySelectorAll('.album-container');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    albumContainers.forEach(container => {
        observer.observe(container);
    });
});