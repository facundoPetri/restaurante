import { htmlElement, $content } from "./index";

function render() {
  const a = document.querySelector("main");
  $content.removeChild(a);
  const main = htmlElement("main", "main-contact");
  const info = {
    Contactanos: ["Poeta Lugones", "123456789"],
    Horarios: ["Jueves a Domingo", "20:30 a 00:00"],
  };

  for (let text in info) {
    const div = htmlElement("div", "item");
    const h1 = htmlElement("h1");
    h1.textContent = text;
    div.appendChild(h1);

    info[text].forEach((elem) => {
      const p = htmlElement("p");
      p.textContent = elem;
      div.appendChild(p);
    });
    main.appendChild(div);
  }

  const form = htmlElement("form", "form");
  const formElems = ["Nombre y apellido", "Telefono", "E-mail", "Mensaje"];
  formElems.forEach((elem) => {
    const input = htmlElement("input", "form-control");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", elem);

    form.appendChild(input);
  });
  const button = htmlElement("button");
  form.appendChild(button);
  button.innerText = "Enviar";
  main.appendChild(form);
  $content.appendChild(main);
}

export { render as renderContact };
