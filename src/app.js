document.body.insertAdjacentHTML("beforeend", site.page);
const style = document.createElement("style");
style.textContent = site.css;
document.head.appendChild(style);
document.getElementById("home_nav").addEventListener("click", () => {
    document.getElementById("terms").style.display = 'none'
    document.getElementById("home").style.display = 'block'
})
document.getElementById("terms_nav").addEventListener("click", () => {
    document.getElementById("terms").style.display = 'block'
    document.getElementById("home").style.display = 'none'
})