document.getElementById("dev").addEventListener("click", (event) => {
  event.preventDefault();
  toggleSwitch(event);
  toggleCode();
});

function toggleSwitch(event) {
  event.currentTarget.classList.toggle("bg-gray-300");
  event.currentTarget.classList.toggle("bg-green-500");
  event.currentTarget.children[0].classList.toggle("translate-x-0");
  event.currentTarget.children[0].classList.toggle("translate-x-5");
}
let nodes = document.querySelectorAll("[data-code]");
function toggleCode() {
  nodes.forEach((node) => {
    let code = node.getAttribute("data-code");
    let string = node.getAttribute("data-string");
    node.textContent = code;
    node.setAttribute("data-code", string);
    node.setAttribute("data-string", code);
  });
}
