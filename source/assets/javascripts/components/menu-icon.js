const showMenu = () => {
  const menuIcon = document.querySelector("#menu-icon");
  const menu = document.querySelector("#menu");
  const menuSection = document.querySelectorAll(".menu-section");

  menuIcon.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("open");
    menu.classList.toggle("show");
    event.currentTarget.style.zIndex = "1099";
  });
};

export { showMenu };
