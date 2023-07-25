const links = document.querySelectorAll(".dropdown-menu li"); // Sélecteur pour cibler les liens (balise <li>) au lieu des balises <a>
const burger = document.querySelector(".burger-menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("colored");
  links.forEach((link, index) => {
    setTimeout(() => {
      link.classList.toggle("show");
    }, (index + 1) * 30); // Délai de 70 ms entre chaque lien (70 ms * index)
  });
});

// JavaScript
const h1Elements = document.querySelectorAll("h1");

h1Elements.forEach((h1) => {
  h1.addEventListener("mouseover", () => {
    h1Elements.forEach((h) => {
      if (h === h1) {
        h.classList.add("active");
      } else {
        h.classList.remove("active");
        h.classList.add("not-active");
      }
    });
  });

  h1.addEventListener("mouseout", () => {
    h1Elements.forEach((h) => {
      h.classList.remove("active", "not-active");
    });
  });
});
