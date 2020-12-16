import { showMenu } from "./components/menu-icon.js";

showMenu();
const socialIcons = document.querySelector(".social-icons");
console.log(socialIcons);
const tl = new TimelineMax();
console.log(tl);
tl.fromTo(socialIcons, 1, { opacity: 0, x: 30 }, { opacity: 1, x: 0 });
