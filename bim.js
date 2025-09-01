// // write bmi calculator

// function BMI(w, h) {
//   return w / (h * h);
// }

// console.log(BMI(64, 1.7).toFixed(3));

function BMI(weight, height, unitHeight, unitWeight) {
  let Uheight = unitHeight === "cm" || "CM" ? height / 100 : height;
  let UWeight = unitWeight === "lbs" ? weight / 2.206 : weight;

  const resultBMI = UWeight / (Uheight * Uheight);

  let category;

  if (resultBMI < 18.5) {
    category = "underWeight";
  } else if (resultBMI < 25) {
    category = "normal";
  } else if (resultBMI < 30) {
    category = "overWeight";
  } else {
    category = "obese";
  }

  return {
    bmi: resultBMI.toFixed(2),
    category,
  };
}

console.log(BMI(69, 167, "CM", "kg"));
console.log(BMI(141, 167, "cm", "lbs"));
