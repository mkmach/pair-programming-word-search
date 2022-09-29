const transpose = function (letters) {
    const returnArray = [];
    for (let i = 0; i < letters.length; i++) {
      for (let j = 0; j < letters[i].length; j++) {
        if (!returnArray[j]) {
          returnArray[j] = [];
        }
        returnArray[j].push(letters[i][j]);
      }
    }
    console.log("returnArray:", returnArray);
    return returnArray;

    // const verticalJoin = letters.map(ls => ls.join(''))
  };

const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map((ls) => ls.join(""));
    //[["AWCFDSDFF"],["SEINFELD"],[], []]
    console.log("horizontalJoin:", horizontalJoin);
  
    for (joinedLetters of horizontalJoin) {
      if (joinedLetters.includes(word)) return true;
    }

    const verticalJoin = transpose(letters).map((ls) => ls.join(""));
    console.log("verticalJoin:", verticalJoin);

    for (joinedLetters of verticalJoin) {
        if (joinedLetters.includes(word)) return true; 
      }

    return false;
  };
  
  module.exports = wordSearch;
  
  // //1) should return false if the word is not present
  