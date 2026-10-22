
const header = document.querySelector("header");
const navLinks = document.querySelectorAll(
  'header nav a[href*="#"]'
);

const sections = document.querySelectorAll(
  "#hero, #projects, #contact"
);

// 1. Change active link when clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });

    link.classList.add("active");
  });
});

// 2. Show the active section while scrolling
function updateActiveLink() {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - 150) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.hash === `#${currentSection}` ||
      link.hash === `index.html#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

// 3. Hide header when scrolling down, show when scrolling up
let lastScroll = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll <= 0) {
    header.classList.remove("header-hidden");
  } else if (currentScroll > lastScroll) {
    // Scrolling down
    header.classList.add("header-hidden");
  } else if (currentScroll < lastScroll) {
    // Scrolling up
    header.classList.remove("header-hidden");
  }

  lastScroll = currentScroll;

  updateActiveLink();
});

// Set the correct active link on page load
updateActiveLink();
