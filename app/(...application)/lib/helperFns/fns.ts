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

export function isObject(objValue: any) {
  return (
    objValue && typeof objValue === "object" && objValue.constructor === Object
  );
}

/*
validateSAID explanation

1. return -1, if not valid, returns 1 for Saudis, and 2 for expatriate residents
2. For every digit of the 10 digit number,
  a. Check if the index is even i.e (idx % 2 === 0)
  b. If even then, 
    . double the digit
    . 


*/

export function validateSAID(id: string): number {
  const type = id[0];
  const _idLength = 10;
  const _type1 = "1";
  const _type2 = "2";
  let sum = 0;
  id = id.trim();
  if (
    isNaN(parseInt(id)) ||
    id.length !== _idLength ||
    (type !== _type2 && type !== _type1)
  ) {
    return -1;
  }
  for (let num = 0; num < 10; num++) {
    const digit = Number(id[num]);
    if (num % 2 === 0) {
      const doubled = digit * 2;
      const ZFOdd = `00${doubled}`.slice(-2);
      sum += Number(ZFOdd[0]) + Number(ZFOdd[1]);
    } else {
      sum += digit;
    }
  }
  return sum % 10 !== 0 ? -1 : Number(type);
}

console.log("SA id check", validateSAID("2089517656"));
