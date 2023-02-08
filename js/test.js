// function filterArray(numbers, value) {
//   const resultArray = [];
//   const minNumbers = numbers[0];
//   for (let i = 0; i <= numbers.length - 1; i++) {
//     // console.log(numbers[i] > value);
//     // console.log(numbers[0], numbers[2], numbers[4]);
//     if (numbers[i] > value) {
//       resultArray.push(numbers[i]);
//       // console.log(numbers);
//     }
//   }

// знайти мінімальне значення масиву

// if (numbers[i] < minNumbers) {
//   minNumbers = numbers[i];
// }
// console.log(minNumbers);

// for (const number of numbers) {
//   if (number < minNumbers) {
//     minNumbers = number;
//   }
//   return minNumbers;
// }
// console.log(minNumbers);
// вивести всі елементи масиву
// console.log(numbers);

// знайти певний елемент з масиву і закінчити виконання циклу

// знайти максимальне значення масиву

// знайти всі парні елементи масиву (edited)

// знайти непарні елементи масиву

// даний масив рядків де можуть бути однакові рядки, вибрати з нього всі рядки по певному критерію.

//   return resultArray;
// }

// const numbers = console.log(filterArray([12, 24, 2, 8, 41, 76], 20));

// let number = 33;
// const string = 'sss';
// const isNot = false;
// const array = [];
// const newArray = [1, 2, 3, 'string', 100];
// const element = newArray[3];
// const newElements = [newArray[0], newArray[newArray.length - 1]];
// function fn(newArray1) {
//   for (let i = 0; i <= newArray1.length - 1; i++) {
//     if (newArray[i] > number) {
//       number = newArray[i];
//     }
//   }
// }

// fn(newArray);
// console.log(number);

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   for (let product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }
//   return 0;
// }
// console.log(calculateTotalPrice('Blaster'));

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;

// Change code below this line
// Change code below this line
// Change code below this line

// Change code below this line НЕ РАБОТАЕТ **********
// function addOverNum(a, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }
//   if (a < total) {
//     return total;
//   }
//   // console.log(`${a}`);
// }
// console.log(addOverNum(44, 15, 27));

// Change code below this line НЕ РАБОТАЕТ **********
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//   },
// };

// console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles'));

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (let potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },

  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];
      if (potionName === potion.name) {
        this.potions.splice(i, 1);
      }
    }
  },
  updatePotionName(oldName, newName) {
    let result = 'Potion ${oldName} is not in inventory';
    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];
      if (oldName === potion.name) {
        potion.name = newName;
        result = 'Found ${oldName} change to ${newName}';
      }
    }
    return result;
  },
};
