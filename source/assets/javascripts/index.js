import { showMenu } from "./components/menu-icon.js";
import { opening } from "./components/opening.js";
import { type } from "./components/typing.js";

showMenu();
if (window.innerWidth > 479) {
  opening();
} else {
  const headerRight = document.querySelector(".header-right");
  const headerH1 = document.querySelector("h1");
  const intro = document.querySelector(".intro");
  const tl = new TimelineMax();
  tl.fromTo(headerRight, 0.2, { opacity: 1, x: 0 }, { opacity: 1, x: 0 })
    .fromTo(headerRight, 1, { opacity: 1, x: 0 }, { opacity: 1, x: -50 })
    .fromTo(headerH1, 1, { opacity: 1, x: 0 }, { opacity: 1, x: -80 }, "-=1")
    .fromTo(intro, 1, { opacity: 0, y: 30 }, { opacity: 1, y: 0 });
}

type();

// scrolling detector
const sections = document.querySelectorAll("section");
const options = {
  rootMargin: "-100px 0px -500px 0px",
};

const navCheck = (entries) => {
  entries.forEach((entry) => {
    const className = entry.target.className;
    console.log(className);
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const top = document.querySelector("#top");
    if (entry.isIntersecting) {
      if (entry.target.className !== "header") {
        activeAnchor.classList.toggle("menu-color");
        top.style.display = "block";
      } else {
        top.style.display = "none";
      }
    } else {
      activeAnchor.classList.remove("menu-color");
    }
  });
};
let observer = new IntersectionObserver(navCheck, options);

sections.forEach((section) => {
  observer.observe(section);
});
// scrolling fade-in
const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
  threshold: 0,
  rootMargin: "-200px 0px -200px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

// scrolling slide in
const sliders = document.querySelectorAll(".slide-in");
sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
