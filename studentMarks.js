let marks = {
  Hridula: 90,
  Rushmila: 86,
  Soha: 95,
  Naba: 81,
  Nabiha: 77
}

// for loop
for(let i=0; i<Object.keys(marks).length; i++) {
  console.log(`The marks of ${Object.keys(marks)[i]} is ${marks[Object.keys(marks)[i]]}`);
}

// for in loop
for (let key in marks) {
  console.log(`The marks of ${key} is ${marks[key]}`);
}

// mean of marks
let marksOfHridula = marks.Hridula;
let marksOfRushmila = marks.Rushmila;
let marksOfSoha = marks.Soha;
let marksOfNaba = marks.Naba;
let marksOfNabiha = marks.Nabiha;

const mean = (a, b, c, d, e) => {
  return (a + b + c + d + e) / 5;
}

console.log(mean(marksOfHridula, marksOfRushmila, marksOfSoha, marksOfNaba, marksOfNabiha));