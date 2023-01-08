const form = document.getElementById("form");
const user = document.getElementById("name");
const h1 = document.querySelector("h1");
const clock = document.getElementById("clock");
const getDate = document.getElementById("date");
const getDay = document.getElementById("day");
const imgArry = ["img0", "img1", "img2", "img3", "img4"];
const random = Math.floor(Math.random() * imgArry.length);
const logout = document.getElementById("logout");

document.body.style.backgroundImage = `url(/바닐라JS챌린지/img/img${random}.png)`;
document.body.style.backgroundSize = `100%`;

function login(event) {
  event.preventDefault();
  form.classList.add("hidden");
  h1.classList.toggle("hidden");
  h1.innerText = `Hello ${user.value}`;
  localStorage.setItem("username", user.value);
  logout.classList.remove("hidden");
}
form.addEventListener("submit", login);

const saveNmae = localStorage.getItem("username");
if (saveNmae !== null) {
  form.classList.add("hidden");
  h1.classList.toggle("hidden");
  h1.innerText = `Hello ${saveNmae}`;
  logout.classList.remove("hidden");
} else {
  h1.classList.add("hidden");
  form.classList.remove("hidden");
}
logout.addEventListener("click", function () {
  localStorage.clear("username");
  h1.classList.add("hidden");
  form.classList.remove("hidden");
  logout.classList.add("hidden");
});

function getClock() {
  const date = new Date();
  let h =
    date.getHours() >= 13
      ? "PM " + date.getHours()
      : date.getHours() === 0
      ? "AM 12"
      : "AM " + date.getHours();
  let n = date.getMinutes() <= 9 ? "0" + date.getMinutes() : date.getMinutes();
  let s = date.getSeconds() <= 9 ? "0" + date.getSeconds() : date.getSeconds();

  const y = date.getFullYear();
  const m =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1} ` : date.getMonth() + 1;
  const d = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

  var dayList = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const w = dayList[date.getDay()];

  const time = `${h} : ${n} : ${s}`;

  clock.innerText = time;

  getDate.innerText = `${y}. ${m}. ${d}`;
  getDay.innerText = w;
}

getClock();
setInterval(getClock, 1000);

// function getdClock() {
//   clock.classList.add("bom");
// }
setInterval(getClock, 1000);
