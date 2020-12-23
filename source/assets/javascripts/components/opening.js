// gsap
const opening = () => {
  const socialIcons = document.querySelector("#social-icons");
  const menu = document.querySelector("#menu");
  const headerRight = document.querySelector(".header-right");
  const headerH1 = document.querySelector("h1");
  const intro = document.querySelector(".intro");
  const arrow = document.querySelector("#bouncing-arrow");
  const tl = new TimelineMax();
  tl.fromTo(headerRight, 0.2, { opacity: 1, x: 0 }, { opacity: 1, x: 0 })
    .fromTo(headerRight, 1, { opacity: 1, x: 0 }, { opacity: 1, x: -220 })
    .fromTo(headerH1, 1, { opacity: 1, x: 0 }, { opacity: 1, x: -80 }, "-=1")
    .fromTo(intro, 1, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
    .fromTo(menu, 1, { opacity: 0, x: 30 }, { opacity: 1, x: 0 })
    .fromTo(socialIcons, 1, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=1")
    .fromTo(arrow, 1, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=1");
};

export { opening };
