const today = new Date();
const year = today.getFullYear();
const showFooter = () => {
  const footer = document.querySelector("#footer");
  footer.innerHTML = `<p>©${year} Yuping Kuei. All rights reserved</p>`;
};

export { showFooter };
