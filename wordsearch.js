const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  // console.log("horizontolJoin:", horizontalJoin);
  
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  
  const verticalJoin = transpose(letters).map((ls) => ls.join(""));
  // console.log("verticalJoin:", verticalJoin);

  for (let l of verticalJoin) {
    if (l.includes(word))
      return true;
  }

  return false;
};

const transpose = function(matrix) {
  
  const array = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {

      if (!array[col]) {
        array[col] = [];
      }
      array[col].push(matrix[row][col]);
    }
  }
  return array;
};


//@mzparulina
//@mkmach
module.exports = wordSearch;

      // This is a conditional statement that checks if the array at index col is empty. If it is, it assigns an empty array to that index.

      // What about the case where the word matrix is an empty array? You'll have to write tests for these cases (and any others that you think of), and you might also have to modify the wordSearch function to make those new tests pass.

      /*
  row = 0, col = 0
  Array = [[]]
  Array = [[A]]
  //
  //
  //
    row = 0, col = 1
    Array = [[A]]
    Array = [[A],[]]
    Array = [[A],[W]]

    //

    row = 0, col = 2
    Array = [[A],[W]]
    Array =  [[A],[W] []]
    Array =  [[A],[W],[C]]

    ... for every column we end up doing this 

    lets move to when we finish our first loop...

immm
    row = 1, col = 0
    Array = [[A],[W],[C]]
    If doesnt run because array exists at col = 0 so push value
    Array = [[A, S],[W],[C]]
  */