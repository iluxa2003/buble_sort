const bubleGum = document.querySelector(".bubleGum");
const randomMass = [10, 15, 22, 19, 18, 17, 12];
function buble(rndArray) {
  for (let j = 0; j < rndArray.length; j++) {
    for (let i = 1; i < rndArray.length; i++) {
      if (rndArray[i] > rndArray[i - 1]) {
        const zIndex = rndArray[i];
        rndArray[i] = rndArray[i - 1];
        rndArray[i - 1] = zIndex;
      }
    }
  }
  return rndArray;
}
// buble(randomMass);
buttonClick = (event) =>{
    console.log(buble(randomMass))
}
bubleGum.addEventListener("click" , buttonClick)
