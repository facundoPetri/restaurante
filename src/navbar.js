import { htmlElement, $content } from "./index";

function render() {
  const navItems = ["Inicio", "Menu", "Contacto"];
  const navbar = htmlElement("nav", "navbar");

  navItems.forEach((item) => {
    const a = htmlElement("a", "navelem");
    a.textContent = item;

    navbar.appendChild(a);
  });

  $content.appendChild(navbar);
}

export { render as renderNav };
