import { htmlElement, $content } from "./index";

function render() {
  const a = document.querySelector("main");
  $content.removeChild(a);
  const main = htmlElement("main", "main-menu");
  const menu = {
    "Hamburguesa Simple": [
      "Pan de papa, medallon de 100gr, doble queso cheddar, panceta y mayonesa casera a eleccion",
      "Precio $320",
    ],
    "Hamburguesa Doble": [
      "Pan de papa, doble medallon de 100gr, doble queso cheddar, panceta y mayonesa casera a eleccion",
      "Precio $380",
    ],
    "Hamburguesa Triple": [
      "Pan de papa, triple medallon de 100gr, doble queso cheddar, panceta y mayonesa casera a eleccion",
      "Precio $430",
    ],
    "Homenaje Doble cuarto de libra": [
      "Nuestra version especial del doble cuarto de libra",
      "Precio $400",
    ],
  };

  for (let text in menu) {
    const div = htmlElement("div", "hambur");
    const h1 = htmlElement("h2", "title-contact");
    h1.textContent = text;
    div.appendChild(h1);

    menu[text].forEach((elem) => {
      const p = htmlElement("p");
      p.textContent = elem;
      div.appendChild(p);
    });
    main.appendChild(div);
  }

  $content.appendChild(main);
}

export { render as renderMenu };
