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

const priorityColor = document.querySelector(".priorityColor");
const inputBar = document.querySelector(".search");
const searchBtn = document.querySelector(".SearchBtn");

let deleteFlag = false;

window.addEventListener("keydown", function(event) {
   if(event.key == "Enter" && !taskHeaderCont.classList.contains("hidden")){
        addTask();
   }
})

deleteBtn.addEventListener("click", function () {
  deleteBtn.classList.toggle("red");
  deleteFlag = !deleteFlag;
});

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

function addTask (){
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

    ticketMaker(tasks);
}

textAdder.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
      addTask();
  }
});

function ticketMaker(arr) {
  mainCont.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    let taskObj = arr[i];
    let { id, color, text } = taskObj;
    let newTicket = document.createElement("div");
    newTicket.classList.add("ticket");
    newTicket.innerHTML = ` 
            <div class="color ${color}"></div>
            <div class="task" > ${text}</div>
            <span class="editBtn"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17ZM11 14V18H13V14H11Z"></path></svg></span>
      
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
      taskObj.color = colors[nextColorIdx];
    });

    newTicket.addEventListener("dblclick", function () {
      if (deleteFlag == true) {
        let filterTaskArray = tasks.filter(function (taskObj) {
          return taskObj.id != id;
        });

        tasks = filterTaskArray;

        mainCont.removeChild(newTicket);

        console.log(tasks);
      }
    });

    // edit functionality

    let editBtn = newTicket.querySelector(".editBtn");
    let tasktextArea = newTicket.querySelector(".task");
    let editTask = false;

    editBtn.addEventListener("click", function () {
      if (editTask == false) {
        // here we have to write the logic for update
        tasktextArea.setAttribute("contenteditable", "true");
        editBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M7 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C14.7405 2 17.1131 3.5748 18.2624 5.86882L16.4731 6.76344C15.6522 5.12486 13.9575 4 12 4C9.23858 4 7 6.23858 7 9V10ZM10 15V17H14V15H10Z"></path></svg>`;
      } else {
        // save the upadted text
        tasktextArea.setAttribute("contenteditable", "false");
        taskObj.text = tasktextArea.innerText;
        editBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17ZM11 14V18H13V14H11Z"></path></svg>`;
      }

      // console.log(tasks);

      editTask = !editTask;
    });

    mainCont.appendChild(newTicket);
  }
}

// priority ticket show 

priorityColor.addEventListener("click", function (event ) {
      let clickedEle = event.target;

      if(clickedEle.classList[0] == 'box'){
          let priorityColor = clickedEle.classList[1];

          let filteredTask = tasks.filter(function (taskObj) {
            return taskObj.color == priorityColor;
          })

          ticketMaker(filteredTask);
        
      }
})

//all card btn 

 allCardBtn.addEventListener("click", function (){
    ticketMaker(tasks); 
 }) 

 searchBtn.addEventListener("click", function (){
  let query = inputBar.value ; 
  inputBar.value = "";

  let filteredTask = tasks.filter(function (taskObj) {
    return taskObj.text.toLowerCase().includes(query.toLowerCase());
  })

  ticketMaker(filteredTask);

 }) 


