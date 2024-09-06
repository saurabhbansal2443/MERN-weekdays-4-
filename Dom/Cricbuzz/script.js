const input = document.getElementById("inputTab");
const shape = document.getElementById("dropdown");
const color = document.getElementById("color");
const addBtn = document.getElementById("add");
const container = document.querySelector(".cont");

addBtn.addEventListener("click", function () {
  let n = input.value;
  let shapeValue = shape.value;
  let colorValue = color.value;

  //    console.log( n , shapeValue , colorValue )

  //   input.value = "";

  container.innerHTML = "";

  for (let i = 1; i <= n; i++) {
    let ele = document.createElement("div");

    ele.classList.add("box");

    if (shapeValue == "circle") {
      ele.classList.add("circle");
    }

    ele.style.backgroundColor = colorValue;

    container.appendChild(ele);
  }
});
