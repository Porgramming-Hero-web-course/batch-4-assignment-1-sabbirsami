const countWordOccurrences = (sentence: string, word: string): number => {
  const lowercaseSentenceArray = sentence.toLocaleLowerCase().split(" ");
  let numberOfWordOccurrence = 0;
  const numberOfWordOccurrences = lowercaseSentenceArray.filter(
    (singleWord) => {
      if (singleWord.includes(word)) {
        numberOfWordOccurrence++;
      }
    }
  );
  return numberOfWordOccurrence;
};

const sentence = "TypeScript is great. I love $TypeScript!%%";

console.log(countWordOccurrences(sentence, "typescript"));

/* const countWordOccurrences = (sentence: string, word: string)=> {
  let splitSentence = sentence.split(" ");

  for (let i = 0; i < splitSentence.length; i++) {
    if (splitSentence[i].startsWith(word)) {
      console.log(splitSentence[i]);
    }
  }
};

const sentence = "TypeScript is great. I love TypeScript!";

console.log(countWordOccurrences(sentence, "typescript")); */
