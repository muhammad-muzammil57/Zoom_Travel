const sr = ScrollReveal({
    distance: "25px",
    duration: 1000,
    easing: "ease-out",
});

// Base
sr.reveal(".small-title")
sr.reveal(".title", {delay:250 })
sr.reveal(".desc", {delay:500 })
// Home
sr.reveal(".home__content-btn", {delay:750})
sr.reveal(".home__cards .home__card", {delay:500, interval:500 })
// About
sr.reveal(".about__cards .about__card", {delay:500, interval:500 })
sr.reveal(".about__stats .about__stat", {delay:700, interval:250 })

// Destinations
sr.reveal(".desttinations__content-btn", {delay:700 })
sr.reveal(".destinations__swiper", {delay:500 })
// Services
sr.reveal(".services__man-img", {delay:1000 })
sr.reveal(".services__cards .services__card", {delay:700, interval:500 })

// Subscribe
sr.reveal(".subscribe__plane-img", {delay:1250, origin:"right"})
sr.reveal(".subscribe__input", {delay:750 })
sr.reveal(".subscribe__btn", {delay:1000 })
