const str = "pineapple is yummy";
console.log(str);
console.log(str.indexOf("apple"));

const student = [97, 86, 75, 66, 55, 97, 85, 97, 97, 95];
console.log(
  student.sort((a, b) => {
    return b - a;
  })
);

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

const modalBox = document.getElementById("modal-box");
const modalOpen = document.getElementById("box");
const modalClose = document.getElementById("btn");
const modalImg = document.getElementById("img-box");
// const box=modalOpen

// modalOpen.addEventListener("click", () => {
//   modalBox.style.display = "block";
//   const img = document.getElementById("img-box");
// });

// modalClose.addEventListener("click", () => {
//   modalBox.style.display = "none";
// });

function modal() {}
