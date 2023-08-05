// rules of json properties

//'My object' will be converted to myObject

//algorithm

/*

1. Check if the word has a space in between
2. split the word at spaces.
3. capitalise the first letter of every word except the first word
4. join the words

*/
export function getCamelCase(word: string): string {
  const wordsArray: string[] = word.split(" ");

  // here we check if the word contains spaces or is a single word.
  if (wordsArray.length === 1) return word.toLowerCase();

  // not a single word, i.e contains spaces
  const capitalisedArray: string[] = wordsArray.map((word, index) => {
    const normalised = word.toLowerCase();
    if (index === 0) return normalised;
    else return normalised.charAt(0).toUpperCase() + normalised.slice(1);
  });

  return capitalisedArray.join("");
}

// rules of converting to title case

/*
  0. normalise the word to lowercase
  1. split the word
  2. if array is of length 1
  3. return the word
  4. if not map through the array, and capitalise charAt(0)
  5. slice the rest
  6. join the words with space in between each word



  example input
  1. fullName
  
  example output
  1. Full Name
*/

export function camelCaseToTitleCase(input: string) {
  return input
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
    .replace(/^./, function (str) {
      return str.toUpperCase();
    });
}

console.log(camelCaseToTitleCase("mohammedHammad"));
