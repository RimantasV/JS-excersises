// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 2000);
// console.log(3);

// document.querySelector("p").textContent = "this is a paragraph";

// setTimeout(() => {
//   alert(document.querySelector("p").textContent);
// }, 100);

// document.querySelector("p").style.color = "green";

// let prom = new Promise((resolve, reject) => {
//   let num = Math.random();
//   if (num < 0.5) {
//     resolve("Yay! Resolved: " + num);
//   } else {
//     reject("Ohhh noooo!: " + num);
//   }
// });

// console.log(prom);

// prom.then((res) => console.log(res)).catch((err) => console.log(err));

function myFunction2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve(222);
      reject("rejected 222");
    }, 1000);
  });
}

function myFunction3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(333);
    }, 1000);
  });
}

// myFunction1()
//   .then((value) => {
//     console.log(value);
//     return myFunction2();
//   })
//   .then((value) => {
//     console.log(value);
//     return myFunction3();
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

function myFunction1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(111);
    }, 1000);
  });
}

// async/await
async function handlePromises() {
  try {
    console.log(await myFunction1());
    console.log(await myFunction2());
    console.log(await myFunction3());
  } catch (error) {
    console.log(error);
  }
}

// handlePromises();

const checkPizza = function (toppings) {
  return new Promise((resolve, reject) => {
    if (toppings.includes("pineapple")) {
      reject("Bad pizza");
    } else {
      resolve("Your pizza have these ingredients " + toppings);
    }
  });
};

// checkPizza(["pineapple", "cheese"])
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// checkPizza(["chicken", "cheese"])
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

async function getPizza() {
  try {
    const result = await checkPizza(["chicken", "cheese", "pineapple"]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

getPizza();
