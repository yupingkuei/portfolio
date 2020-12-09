const showMenu = () => {
  const menuIcon = document.querySelector("#menu-icon");
  menuIcon.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("open");
  });
};

export { showMenu };
