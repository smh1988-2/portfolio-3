const targets = document.querySelectorAll(".experience-switchback");

function handleIntersection(entries) {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
        } else {
            entry.target.classList.remove('visible')
        }
    });
}
const observer = new IntersectionObserver(handleIntersection);

targets.forEach(target => observer.observe(target));