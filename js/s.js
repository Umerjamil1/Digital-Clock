let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let date = document.getElementById("date");

function work() {
  let s = new Date();
  date.innerText = s.toDateString();
  let h = s.getHours();
  hour.innerText = (h < 10 ? "0" : "") + h;
  min.innerText = (s.getMinutes() < 10 ? "0" : "") + s.getMinutes();
  sec.innerText = (s.getSeconds() < 10 ? "0" : "") + s.getSeconds();

  var values = btn.getAttribute("data-format");
  if (values === "12") {
    if (h > 12) {
      h -= 12;
    }
    hour.innerText = (h < 10 ? "0" : "") + h;
  }
}

setInterval(() => {
  work();
}, 1000);

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  btn.classList.toggle("value");

  var values = btn.getAttribute("data-format");

  if (values === "12") {
    btn.setAttribute("data-format", "24");
  } else {
    btn.setAttribute("data-format", "12");
  }
});

const dot = document.getElementById("dot");
const menu = document.getElementById("menu");
dot.addEventListener("click", () => {
  menu.classList.toggle("active");
});
