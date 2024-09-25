let raw = "bread";
function cutBread(raw) {
  let cutPromise = new Promise((resolve, reject) => {
    if (raw) {
      setTimeout(() => {
        let breadCutted = "🥠";

        resolve(breadCutted);
      }, 2000);
    } else {
      reject("No raw 1");
    }
  });

  return cutPromise;
}

function saucedBread(cuttedBread) {
  let cutPromise = new Promise((resolve, reject) => {
    if (cuttedBread) {
      setTimeout(() => {
        let saucedBread = cuttedBread + "🍷";

        resolve(saucedBread);
      }, 2000);
    } else {
      reject("No raw  2");
    }
  });

  return cutPromise;
}

function bakeBread(saucedBread) {
  let cutPromise = new Promise((resolve, reject) => {
    if (saucedBread) {
      setTimeout(() => {
        let bakeBread = saucedBread + "🔥";

        resolve(bakeBread);
      }, 2000);
    } else {
      reject("No raw  3");
    }
  });

  return cutPromise;
}

// cutBread()
//   .then((res) => {
//     console.log(res);
//     return saucedBread(res);
//   })
//   .then((res) => {
//     console.log(res);
//     return bakeBread(res);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err)
//   })   


//async /await \


async function makeSandwich(){
    try{
    let cuttedBread = await cutBread(raw);
    console.log(cuttedBread)
    let saucBread = await saucedBread(cuttedBread);
    console.log(saucBread)    
    let sandwichBread = await bakeBread(saucBread);
    console.log(sandwichBread)
    }catch(err){
        console.log(reportError)
    }finally{
        
    }
}
console.log("start")
// makeSandwich();

cutBread(raw)
  .then((res) => {
    console.log(res);
    return saucedBread(res);
  })
  .then((res) => {
    console.log(res);
    return bakeBread(res);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err)
  })   


let i =1 ;
while(i < 20000000000){
    i++;
}

console.log("end")

// console.log( document )




