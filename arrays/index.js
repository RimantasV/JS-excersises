// // let array = ["Du", "gaideliai", "baltus", "zirnius", "kule"];

// // console.log(array.splice(2));

// // let stringFromArray = array.join();

// // console.log(stringFromArray);

// // let myString = "labas, vakras, html, javascript";

// // let arrayFromString = myString.split(", ");

// // console.log(arrayFromString);

// // const arr = ["I", "study", "JavaScript", "right", "now"];

// // arr.splice(0, 3, "lets", "dance");

// // console.log(arr.join(""));

// // let array1 = [1, [9, 8, 7], 3, 4, 5];
// // let array2 = array1.slice();

// // array1[1][0] = "test";

// // console.log(array1);
// // console.log(array2);

// let accords = ["D", "G", "C", "C7", "F"];

// // function modifyElement(string) {
// //   if (!string.endsWith("7")) {
// //     return (string += "7");
// //   } else return string;
// // }

// // function modifyAccords(accords, callback) {
// //   for (let i = 0; i < accords.length; i++) {
// //     accords[i] = callback(accords[i]);
// //   }
// //   return accords;
// // }

// // console.log(modifyAccords(accords, modifyElement));

// // 1. arrow function
// accords.forEach((accord, index) => console.log(index, accord));

// // 2. function declared outside
// function consoleItems(item, index) {
//   console.log(index, item);
// }

// accords.forEach(consoleItems);

// // const budgets = [
// //   {
// //     name: "Rytis",
// //     budget: 50,
// //   },
// //   {
// //     name: "Saulė",
// //     budget: 230,
// //   },
// //   {
// //     name: "Paulius",
// //     budget: 1500,
// //   },
// //   {
// //     name: "Gytis",
// //     budget: 92,
// //   },
// //   {
// //     name: "Sandra",
// //     budget: 7,
// //   },
// // ];

// // function isPersonInArray(budgets, name) {
// //   const includesName = budgets.map((el) => el.name).includes(name);
// //   if (includesName) {
// //     if (name.endsWith("s")) {
// //       console.log(`welcome Mr. ${name}`);
// //     } else {
// //       console.log(`welsome Miss. ${name}`);
// //     }
// //   } else {
// //     console.log("not in list");
// //   }
// // }

// // isPersonInArray(budgets, "R");

// // console.log([1, 2, 3, 4, 5, 2, 1, 2].filter((el) => el === 2).length);

const budgets = [
  {
    name: "Rytis",
    budget: 50,
  },
  {
    name: "Saulė",
    budget: 230,
  },
  {
    name: "Paulius",
    budget: 1500,
  },
  {
    name: "Gytis",
    budget: 92,
  },
  {
    name: "Sandra",
    budget: 7,
  },
];

const names = budgets.map((person) => person.name);

const monies = budgets.map((obj) => obj.budget);

function extractBudget(xxx) {
  return xxx.budget;
}

const budgetFunction = (obj) => obj.budget;

const isNegative = (number) => number < 0;

const isAtLeastOneNegative = monies.some((number) => number < 0);

function belowHundred(arr) {
  if (arr.some((el) => el < 100)) {
    return arr.filter((el) => el < 100);
  } else return "All numbers are above 100";
}

console.log(belowHundred(monies));

function symbolified(arr) {
  if (arr.every((name) => name.length > 3)) {
    if (arr.some((name) => name.includes("a"))) {
      return arr
        .filter((name) => name.includes("a"))
        .map((el) => el.replace("a", "@"));
    }
  }
}

console.log(symbolified(names));
