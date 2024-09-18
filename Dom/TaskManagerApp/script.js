const addBtn = document.querySelector(".add");
const allCardBtn = document.querySelector(".all");
const deleteBtn = document.querySelector(".delete");
const taskHeaderCont = document.querySelector(".taskAdder");
const taskAdderAllColor = document.querySelectorAll(
  ".priorityColorsTextAdder > .box"
);
const textAdder = document.querySelector(".taskPart");

const priorityColorsTextAdder = document.querySelector(
  ".priorityColorsTextAdder"
);

let deleteFlag = false ; 


deleteBtn.addEventListener("click", function(){
    deleteBtn.classList.toggle('red')
    deleteFlag = !deleteFlag
})   

let mainCont = document.querySelector(".main");

let taskAdderColor = "red";

let tasks = [];

let colors = ["red", "blue", "green", "black"];

addBtn.addEventListener("click", function () {
  taskHeaderCont.classList.toggle("hidden");
});

priorityColorsTextAdder.addEventListener("click", function (event) {
  let clickedEle = event.target;

  if (clickedEle.classList[0] == "box") {
    let newColor = clickedEle.classList[1]; // selecting the new color
    taskAdderColor = newColor;

    for (let i = 0; i < taskAdderAllColor.length; i++) {
      // removing previous border
      taskAdderAllColor[i].classList.remove("border");
    }
    clickedEle.classList.add("border");
  }
});

textAdder.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    // console.log(textAdder.value );
    // console.log( taskAdderColor);

    let taskObj = {
      id: Date.now(),
      color: taskAdderColor,
      text: textAdder.value,
    };
    tasks.push(taskObj);
    // console.log( tasks)
    textAdder.value = "";
    taskHeaderCont.classList.toggle("hidden");

    ticketMaker();
  }
});

function ticketMaker() {
  mainCont.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let taskObj = tasks[i];
    let { id, color, text } = taskObj;
    let newTicket = document.createElement("div");
    newTicket.classList.add("ticket");
    newTicket.innerHTML = ` 
            <div class="color ${color}"></div>
            <div class="task"> ${text}</div>
       `;

    let colorCont = newTicket.querySelector(".color");

    colorCont.addEventListener("click", function () {
      let currentColor = colorCont.classList[1];

      let currentColorIdx = colors.findIndex(function (col) {
        return col == currentColor;
      });

      //   console.log(colors.length, currentColorIdx);

      let nextColorIdx = (currentColorIdx + 1) % colors.length;

      colorCont.classList.remove(currentColor);
      colorCont.classList.add(colors[nextColorIdx]);
      taskObj.color = colors[nextColorIdx]
    });

    newTicket.addEventListener("dblclick" , function(){
         if(deleteFlag == true ){
            let filterTaskArray = tasks.filter(function(taskObj){
                return taskObj.id != id ;
            })

            tasks = filterTaskArray;


            mainCont.removeChild(newTicket);
      
            console.log( tasks )

         }
    })

    mainCont.appendChild(newTicket);
  }
}
