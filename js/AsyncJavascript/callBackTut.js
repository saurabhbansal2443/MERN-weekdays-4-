let raw = "bread";

function cutBread(raw) {
  setTimeout(function () {
    console.log("breadCutted ");
    function saucedBread() {
      setTimeout(function () {
        console.log("saucedBread ");
        function bakeBread() {
          setTimeout(function () {
            console.log("BakedBread");
          }, 3000);
        }
        bakeBread();
      }, 2000);
    }
    saucedBread();
    console.log("after sauced bread called ")
  }, 2000);
}
console.log("Start");
cutBread(raw);
console.log("end")
