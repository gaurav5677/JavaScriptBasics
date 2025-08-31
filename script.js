var a = 12; // global scope

let c = 12;
let d = c;
// block scope

{
  a = 10;
}

//function scope

function acbc() {
  if (ture) {
    var c = 9;
  }
}
