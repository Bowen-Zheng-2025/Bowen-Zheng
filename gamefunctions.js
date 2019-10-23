/* randNum(max);
a helper function to return whole number randoms
@param max {int} the max in the random range
@return {int} a random number of 1 or more
*/

  function randNum(max){
    return Math.floor(Math.random() * max + 1);
  }

/* uniqueIndex(max, number)
a helper function to get unique numbers out of a range so as to avoid reuse.
@param max {int} the max number in the number in the range +1
@param number {int} the number of responses to return
@return {array} an array of the selected number
*/
  function uniqueIndex(max, number){
    var array = [];
    var numArray = [];
    array.length = max;
    for (var i = 0; i < number; i++) {
      var num = randNum(max)
      if (array[num] == "") {
        numArray[i] = num;
      }else{
        var num = randNum(max)
        i--
      }
      array[num] = ""
    }
    return numArray;
  }

/* andEval(condition1, condition2)
takes two conditions and makes a new condition out of them based on their combined
and state and combines the text of the two conditions. Cleans up text some
@param condition1 {object} an object with str and bool keys
@param condition2 {object} an object with str and bool keys
@return {object} an object with str and bool keys
*/

  function andEval(condition1, condition2){
    var cond1 = condition1.trim();
    var cond2 = condition2.trim();
    return cond1 + " and " + cond2;
  }




/* orEval(condition1, condition2)
takes two conditions and makes a new condition out of them based on their combined
or state and combines the text of the two conditions. Cleans up text some
@param condition1 {object} an object with str and bool keys
@param condition2 {object} an object with str and bool keys
@return {object} an object with str and bool keys
*/

  function orEval(condition1, condition2){
    var cond1 = condition1.trim();
    var cond2 = condition2.trim();
    return cond1 + " or " + cond2;
  }

/* arrayReader(array, split)
take an array of strings in the format of text 1 split text 2
text 2 is assumed to be the words true or false. Uses these to set bools
makes a new array where each element is an object.
@param array: {array} an array with string containing the split
@param split: {string} the item to split at
@return {array} an array of objects keyed with str and bool
*/


/* arrayReader(array, split)
take an array of strings in the format of text 1 split text 2
text 2 is assumed to be the words true or false. Uses these to set bools
makes a new array where each element is an object.
@param array: {array} an array with string containing the split
@param split: {string} the item to split at
@return {array} an array of objects keyed with str, bool and the new key negated: false
*/


/* notEval(condition)
takes a condtion, negates it's value, adds the text "it is not the case that" to the
front of it, sets the negated key to true
@param condtion {object} an object with str and bool keys
@return {object} an object with str, bool, and negated keys
*/


/* makeQuestion(conditions, maxDepth=3, negate=.2)
takes an array of condition objects formated {str: text, bool: bool, negated: bool}
and uses it make a question of depths between 1 - maxDepth combined statement length
it should randomly use and or ors at a 50% chance each
@param condition {array} an array of objects formatted as listed above
@param maxDepth {int} number of conditionals to be put together at max
@param negate {float} chance of a negation happening
@return a new object with the same general format
*/

/* makeSentence(condition)
Makes a (likely run-on) sentence out of a conditional stored in an object with the keys str, bool, and negated. It does the following: if negated then it capitalized the i in "it is not the case" and adds a period to the end of the str. If it is not negated then it adds the phrase "It is the case " to the start of the str and adds a period to the end of the string.
@param condition {array} an array of objects formatted as listed above
@return {object} a new object with the same general format
*/
