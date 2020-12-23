import { htmlElement, $content } from "./index";

function render() {
    const footerItems = ["Instagram", "WhatsApp"]
    const footerHref = ["https://www.instagram.com/", "wpp"]
    const footer = htmlElement("footer")

    footerItems.forEach((item, i) => {
        const a = htmlElement("a", "footerelem")
        a.textContent = item
        a.setAttribute("href", footerHref[i])
        a.setAttribute("target", "_blank")
        footer.appendChild(a)
    })
    $content.appendChild(footer)
}

export {render as renderFooter}