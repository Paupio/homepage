console.log("Cześć!");

let button = document.querySelector(".js-button");
let body = document.querySelector(".body");
let color = document.querySelector(".color");

button.addEventListener("click", () => {
    body.classList.toggle("dark");
    color.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
});
