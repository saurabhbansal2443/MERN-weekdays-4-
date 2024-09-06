let inputBar = document.querySelector("input");
let addBtn = document.getElementById("btn");
let cont = document.querySelector(".cont");

let task = [];

let localStorageData = localStorage.getItem("TaskArray");

if (localStorageData != null) {
  let ogData = JSON.parse(localStorageData);

  task = ogData;

  makeTodo();
}
addBtn.addEventListener("click", function () {
  let query = inputBar.value;
  inputBar.value = "";

  let taskObj = {
    id: Date.now(),
    text: query,
  };
  task.push(taskObj);
  localStorage.setItem("TaskArray", JSON.stringify(task));
  console.log(task);
  makeTodo();
});

function makeTodo() {
  // create todo on UI

  cont.innerHTML = "";
  for (let i = 0; i < task.length; i++) {
    let { text, id } = task[i];

    let taskEle = document.createElement("div");
    taskEle.classList.add("todo");

    taskEle.innerHTML = `<span class="task"> ${text} </span>
            <span class="del"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M7 6V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7ZM13.4142 13.9997L15.182 12.232L13.7678 10.8178L12 12.5855L10.2322 10.8178L8.81802 12.232L10.5858 13.9997L8.81802 15.7675L10.2322 17.1817L12 15.4139L13.7678 17.1817L15.182 15.7675L13.4142 13.9997ZM9 4V6H15V4H9Z"></path></svg></span>
        `;

    let delBtn = taskEle.querySelector(".del");

    delBtn.addEventListener("click", function () {
      let filteredArray = task.filter(function (taskObj) {
        return taskObj.id != id;
      });

      task = filteredArray;
      localStorage.setItem("TaskArray", JSON.stringify(task));
      cont.removeChild(taskEle); //UI delete
    });

    cont.appendChild(taskEle);
  }
}
