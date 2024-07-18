// animations/animation.js
import gsap from 'gsap';

export function animateNavBar() {
    gsap.to(".w-full", {
        rotation: 360,
        duration: 2,
        stagger: 0.1,
        repeat: -1, // Repite indefinidamente
        yoyo: true // Hace que la animación se reproduzca de ida y vuelta
    });
}
