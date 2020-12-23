import { showMenu } from "./components/menu-icon.js";
import { opening } from "./components/opening.js";

showMenu();
opening();

// const header = document.querySelector(".header");
// document.addEventListener("scroll", (event) => {
//   if (event.scrollTop() > 800) {
//     console.log("hi");
//   }
// });

//typing effect

const texts = ["Web Developer", "Project Manager", "Digital Artist"];
let count = 0; //count of words
let index = 0; //index of characters
let currentText = "";
let letter = "";

const type = () => {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 200);
};
type();

//scrolling detector
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
