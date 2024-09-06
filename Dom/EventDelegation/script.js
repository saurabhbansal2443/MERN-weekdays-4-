

let container = document.querySelector(".cont");

container.addEventListener("click", function(event){
   let clickedEle = event.target;
   
   console.log(clickedEle.classList[1])
})  