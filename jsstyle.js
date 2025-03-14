// header toggle start //
let MenuBtn = document.getElementById("MenuBtn");

MenuBtn.addEventlistener("click", () => {
  document.querySelector("body").classList.toggle("menuActive");
  MenuBtn.classList.toggle("fa-xmark");
});

// header toggle end //

// typing animation start //
let type = new Typed(".auto-input", {
  Strings: ["Software Engineer :) ...!"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 2000,
  loop: true,
});
// typing animation end //

// skill section animation start //
const progressBars = document.querySelectorAll(".inner-line");

window.addEventlistener("scroll", function () {
  progressBars.forEach(function (progressBar) {
    const rect = progressBar.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      const width = progressBar.getAttribute("data-width");
      progressBar.computedStyleMap.width = width + "%";
    }
  });
});
// skill section animation end //
//Active link state on scroll start//
//Get all Link
let navlinks = document.querySelectorAll("header nav ul li a");
//Get all sections
let sections = document.querySelectorAll("section");

window.addEventlistener("scroll", () => {
  const scrollPos = window.scrollY + 10;
  sections.forEach((section) => {
    if (
      scrollPos > section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navlinks.forEach((link) => {
        link.classList.remove("active");
        if (
          section.getAttribute("id") === link.getAttribute("href").substring(1)
        ) {
          link.classList.add("active");
        }
      });
    }
  });
});
//Active link state on scroll end//
// =============================================== -------------------------------------- =============================================== //
