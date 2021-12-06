gsap.from('#intro', {opacity: 0, duration: 1, y: -100, ease: 'Power1.easeInOut'});
gsap.from('.main-header', {opacity: 0, duration: 1, y: -500, ease: 'power4.out', delay: 0.5});
gsap.from('.anim1', {opacity: 0, duration: 1, y: -30, ease: 'Power1.easeInOut', delay: 0.8, stagger: 0.6});

gsap.to('.head-proj', {
    scrollTrigger: {
        trigger: '.head-proj',
        start: 'bottom center'
    },
    scale: 1.5,
    opacity: 1
})

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.show-card-container',
    }
});

tl.from('.show-card', { y: -100, opacity: 0, duration: 1, ease: 'power4.out', stagger: 0.6})


let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.contact-card',
    }
});

tl2.from('.contact-txt', { y: -50, opacity: 0, duration: 1, ease: 'power4.out'})
tl2.from('.contact-btn', { y: -50, opacity: 0, duration: 1, ease: 'power4.out', delay: 0.2})
