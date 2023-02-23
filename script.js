const txtName = document.getElementById("username");
const txtPass = document.getElementById("password");
const txtEmail = document.getElementById("email");
const btn1 = document.getElementById("btn1");
const out1 = document.getElementById("output1");
const out2 = document.getElementById("output2");
const out3 = document.getElementById("output3");

function fun1(input1, input2, input3) {
  out1.innerText = input1;
  out2.innerText = input2;
  out3.innerText = input3;
}
btn1.addEventListener("click", () => {
  fun1(username.value, password.value, email.value);
});

const navbarNav = document.querySelector(".navbar-nav");
// Ketika humberger menu di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
