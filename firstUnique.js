const text = '';


const regExp = /[^A-Za-z\s]/g;
const cleanText = text.replace(regExp, "");

const regExp1 = /\s+/g;
const finishedText = cleanText.replace(regExp1, " ");


function getUniqueFirstLetters(text) {
  const words = text.split(' ');
  const uniqueFirstLetters = [];

  for (const word of words) {
      const letters = word.split('');
      let uniqueLetter = null;

      for (const letter of letters) {
          if (letters.indexOf(letter) === letters.lastIndexOf(letter)) {
              uniqueLetter = letter;
              break;
          }
      }

      if (uniqueLetter !== null) {
          uniqueFirstLetters.push(uniqueLetter);
      }
  }

  return uniqueFirstLetters;
}

function getFirstUniqueLetter(letters) {
  const letterCount = {};

  for (const letter of letters) {
      if (letterCount.hasOwnProperty(letter)) {
          letterCount[letter]++;
      } else {
          letterCount[letter] = 1;
      }
  }

  for (const letter of letters) {
      if (letterCount[letter] === 1) {
          return letter;
      }
  }


  return null;
}