/* stringParser(string)
uses regex to find the end of each line cleans them and makes them an array
students check https://beckism.com/2010/09/splitting-lines-javascript/ for regex
you also want it clean off any lagging carage returns from the end of the line
@param string: {string} a big old string to be read
@return {array} the contents of the string an array, 1 line per array index;
*/

  function stringParser(string){
    var regex = string.match(/^.*((\r\n|\n|\r)|$)/gm);
    for (var i = 0; i < regex.length; i++) {
      if (i == regex.length-1) {
        continue;
      }
      else{
        regex[i] = regex[i].slice(0, regex[i].length-1);
      }
    }
    return regex;
  }

/* arrayReader(array, split)
take an array of strings in the format of text 1 split text 2
cleans up any extra whitespace
turns this into an object of form {str: text1, bool: bool based on text 2}
text 2 is assumed to be the words true or false. Uses these to set bools
makes a new array where each element is an object.
@param array: {array} an array with string containing the split
@param split: {string} the item to split at
@return {array} an array of objects keyed with str and bool
*/

  function arrayReader(array,split){
    var retArr = [];
    for (var i = 0; i < array.length; i++) {
      var obj = {}
      var line = array[i].split(split)
        obj.str = line[0].trim();
        obj.negated = false;
      if(line[1].trim() === "true"){obj.bool = true;}
      else{obj.bool = false}
      retArr.push(obj)

    }
    return retArr;
  }




/* stringReader(string, split=";")
a wrapper function for stringParser and arrayReader
@param string {string} a heaping long string covering many lines
@pram split=";" {string} where to split the string
@return {array} an array of objects keyed str and bool
*/
function stringReader(string, split=";"){
  var strPar = stringParser(string);
  var arrRea = arrayReader(strPar,split);
  return arrRea;
}
/* arrayReader(array, split)
take an array of strings in the format of text 1 split text 2
text 2 is assumed to be the words true or false. Uses these to set bools
makes a new array where each element is an object.
@param array: {array} an array with string containing the split
@param split: {string} the item to split at
@return {array} an array of objects keyed with str and bool
*/

//1. change the following function in stringReader:
/* arrayReader(array, split)
take an array of strings in the format of text 1 split text 2
text 2 is assumed to be the words true or false. Uses these to set bools
makes a new array where each element is an object.
@param array: {array} an array with string containing the split
@param split: {string} the item to split at
@return {array} an array of objects keyed with str and bool
*/

//to the following:
/* arrayReader(array, split)
take an array of strings in the format of text 1 split text 2
text 2 is assumed to be the words true or false. Uses these to set bools
makes a new array where each element is an object.
@param array: {array} an array with string containing the split
@param split: {string} the item to split at
@return {array} an array of objects keyed with str, bool and the new key negated: false
*/

//2. implement
/* notEval(condition)
takes a condtion, negates it's value, adds the text "it is not the case that" to the
front of it, sets the negated key to true
@param condtion {object} an object with str and bool keys
@return {object} an object with str, bool, and negated keys
*/

  function notEval(condition){
    return {str: "it is not the case " + condition.str,
    bool: !condition.bool, negated: !condition.negated  }
    }

//3. implement the following
/* makeQuestion(conditions, maxDepth=3, negate=.2)
takes an array of condition objects formated {str: text, bool: bool, negated: bool}
and uses it make a question of depths between 1 - maxDepth combined statement length
it should randomly use and or ors at a 50% chance each
@param condition {array} an array of objects formatted as listed above
@param maxDepth {int} number of conditionals to be put together at max
@param negate {float} chance of a negation happening
@return a new object with the same general format
*/
/*^^^ with this one -
You'll need to pick random things without replacement (did we do a function for that?)
You'll need to have a random chance of a negation (by default 20% (aka .2)
You'll need to loop through maxDepth amount of things and glue them together, but you'll have to do something different when there is only 1 left . What sort of loop and logic would work best for this?
*/
//4. implement the following
/* makeSentence(condition)
Makes a (likely run-on) sentence out of a conditional stored in an object with the keys str, bool, and negated. It does the following: if negated then it capitalized the i in "it is not the case" and adds a period to the end of the str. If it is not negated then it adds the phrase "It is the case " to the start of the str and adds a period to the end of the string.
@param condition {array} an array of objects formatted as listed above
@return {object} a new object with the same general format
*/
