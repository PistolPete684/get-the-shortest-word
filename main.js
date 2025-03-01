function findShort(s){
  //Split the string into an array to work with more easily
  let array = s.split(' ');
  //Initialize the variable shortestWord by assigning a value
  let shortestWord = Infinity;
  //Loop through to check if the word is shorter than the variable shortestWord; and update it if so
  for (let word of array){
    if(word.length < shortestWord){
      shortestWord = word.length;
    }
  }
  //Return what the shortest word is found to be after looping through them all
  return shortestWord;
}