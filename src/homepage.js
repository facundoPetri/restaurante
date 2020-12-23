import { htmlElement, $content } from "./index";

function render() {
  const a = document.querySelector("main");
  if (a) $content.removeChild(a);
  const main = htmlElement("main");

  const title = htmlElement("h2", "title-home");
  title.textContent = "Clicks Burger";

  const textHome = htmlElement("p", "text-home");
  textHome.textContent =
    "lorem ipsum afoasjgfoiasjgoisjgoisjgoisdfgoidsgokdmgoksdgfokd";

  main.append(title, textHome);

  $content.appendChild(main);
}

export { render as renderHome };
