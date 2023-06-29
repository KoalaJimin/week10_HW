let elWrite = document.getElementById("home");
let elCheck = document.getElementById("rec");

function goWrite() {
  window.location.href = "../pages/diary.html";
}

function goCheck() {
  window.location.href = "../pages/check.html";
}

elWrite.addEventListener("click", goWrite);
elCheck.addEventListener("click", goCheck);
