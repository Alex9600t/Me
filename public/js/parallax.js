gsap.utils.toArray('.content > *').forEach((elem, index) => {
    gsap.from(elem, {
        scrollTrigger: {
            trigger: elem,
            start: 'top bottom',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: index * 0.3
    });
});