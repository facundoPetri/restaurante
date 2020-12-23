import { renderHome } from "./homepage";
import { renderNav } from "./navbar";
import { renderFooter } from "./footer";
import { renderMenu } from "./menu";
import { renderContact } from "./contacto";

const $content = document.getElementById("content");

init();

function init() {
  renderNav();
  renderHome();
  renderFooter();
  tabLogic();
}

function htmlElement(type, clase) {
  const elem = document.createElement(type);
  if (clase) {
    elem.classList.add(clase);
  }
  return elem;
}
function tabLogic() {
  let navelems = document.querySelectorAll(".navelem");
  navelems.forEach((elem) =>
    elem.addEventListener("click", (e) => {
      let clicked = e.target.innerText;
      if (clicked === "Inicio") renderHome();
      else if (clicked === "Menu") renderMenu();
      else renderContact();
    })
  );
}
export { htmlElement, $content };
