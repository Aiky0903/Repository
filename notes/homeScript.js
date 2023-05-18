function onLoad() {
  const navLinks = document.querySelectorAll(".nav_link");
  const windowPath = window.location.pathname;

  navLinks.forEach((navLink) => {
    const navLinkPath = new URL(navLink.href).pathname;

    if (windowPath === navLinkPath) {
      navLink.classList.add("active");
      console.log(navLink);
    }
  });
}
