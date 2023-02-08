// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
// }
// const rrr = getExtremeElements([1, 2, 3, 4]);
// console.log(getExtremeElements([1, 2, 3, 4]));

// console.log(rrr);

// function splitMessage(message, delimiter) {
//   let words;
//   words = message.split(delimiter);
//   console.log(words);
//   return result;
// }
// console.log(splitMessage('Mango hurries to the train', ' '));

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimiter);

//   // Change code above this line
//   return string;
// }
// console.log(string);
// console.log(
//   makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' '),
// );

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// console.log(fruits);
// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 3);
// const lastThreeEls = fruits.slice(-2);
// console.log(firstTwoEls);

/*

------------  Задать вопрос - почему не работает length 

*/

// function findLongestWord(string) {
//   debugger;
//   let words = string.split(' ');
//   let biggerWord = words[0];

//   for (word of words) {
//     if (biggerWord.length < word.length) {
//       biggerWord = word;
//     }
//   }
//   return biggerWord;
// }
// findLongestWord('Google do awwwwwww rolldadasdasd');
// console.log(biggerWord);
