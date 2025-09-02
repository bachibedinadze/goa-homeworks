function countWords(sentence) {
  // Trim leading/trailing spaces and split by one or more spaces
  const words = sentence.trim().split(/\s+/);
  return sentence.trim() === "" ? 0 : words.length;
}

// Example usage
console.log(countWords("   Hello   world!  "));   // 2
console.log(countWords("This    is   a test."));  // 4
console.log(countWords("   "));                   // 0