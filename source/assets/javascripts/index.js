import { showMenu } from "./components/menu-icon.js";
import { opening } from "./components/opening.js";
import { type } from "./components/typing.js";

showMenu();
opening();
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
