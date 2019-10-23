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
