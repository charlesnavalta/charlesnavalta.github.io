document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    const header = document.querySelector('header');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    window.addEventListener('scroll', function() {
        const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

        if (scrolledToBottom) {
            header.style.top = '-100px';
        } else {
            header.style.top = '0';
        }
    });
});