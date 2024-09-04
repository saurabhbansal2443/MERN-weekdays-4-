/// 

// let h1tag = document.querySelector("h1");
// // let ptag = document.querySelector("#ptag");

// let ptag = document.getElementById("ptag");

// let allBoxes = document.querySelectorAll(".box");

// console.log(allBoxes)

// for(let i=0 ; i<allBoxes.length ; i++){
//     allBoxes[i].innerHTML = " Circle "
// }



// // console.dir(ptag);

// ptag.style.backgroundColor = "yellow"

// // console.dir( h1tag)

// h1tag.innerText = " I am chnaged through JS "


let imgTag = document.querySelector("img");

let flag = true 
imgTag.addEventListener("click", function() {
    
    if (flag == true ){
        imgTag.src = "pic2.jpeg";
    }else{
        imgTag.src = 'pic1.jpeg'
    }

    flag = !flag
})


// let box = document.querySelector("div");


// box.addEventListener("click", function () {
//     box.classList.toggle("circle")
// })

// let ptag = document.createElement("p");

// ptag.innerText = "Saurabh";

// box.appendChild(ptag);

// box.removeChild(ptag)

// console.log( ptag)

// box.classList.add("circle");

// box.classList.remove("circle")

// box.classList.toggle("circle")
// box.classList.toggle("circle")

// Event listner 



