const content = document.querySelector('.content');
window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 50;
    const y = (e.clientY / window.innerHeight - 0.5) * 50;
    gsap.to(content, { duration: 1, x: x, y: y });
    console.log('parallax: ' + x + y)
});